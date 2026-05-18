import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  transformSharePointToAnnouncement,
  IAnnouncement,
} from "../utils/announcementHelpers";
import { Badge } from "./Badge";
import styles from "./AnnouncementDetail.module.scss";
import { sp } from "../../../services/pnpClient";

export interface IAnnouncementDetailWithSharePointProps {
  basePath?: string;
  useSharePoint?: boolean;
}

export const AnnouncementDetailWithSharePoint: React.FC<
  IAnnouncementDetailWithSharePointProps
> = ({ basePath = "/announcements", useSharePoint = true }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = React.useState<IAnnouncement | null>(
    null,
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        setLoading(true);
        setError(null);

        if (useSharePoint) {
          // Try to extract ID from slug if it ends with a number
          const idMatch = slug.match(/-(\d+)$/);
          const id = idMatch ? parseInt(idMatch[1], 10) : null;

          let spItem = null;

          // First try to find by Slug field if it exists
          try {
            const items = await sp.web.lists
              .getByTitle("Announcements")
              .items.select(
                "ID",
                "Title",
                "Description",
                "Detail",
                "Category",
                "Tag",
                "Date",
                "Time",
                "Slug",
                "Content",
                "Image",
                "Modified",
                "Created",
              )
              .expand("AttachmentFiles")
              .filter(`Slug eq '${slug}'`)
              .top(1)
              ()

            if (items && items.length > 0) {
              spItem = items[0];
            }
          } catch (err) {
            console.warn(
              "Slug field might not exist, trying by ID or title match",
            );
          }

          // If not found by slug, try by ID
          if (!spItem && id) {
            try {
              spItem = await sp.web.lists
                .getByTitle("Announcements")
                .items.getById(id)
                .select(
                  "ID",
                  "Title",
                  "Description",
                  "Detail",
                  "Category",
                  "Tag",
                  "Date",
                  "Time",
                  "Slug",
                  "Content",
                  "Image",
                  "Modified",
                  "Created",
                )
                .expand("AttachmentFiles")
                ()
            } catch (err) {
              console.warn("Item not found by ID");
            }
          }

          // If still not found, try to match by title (slug without ID)
          if (!spItem) {
            const titleFromSlug = slug
              .replace(/-(\d+)$/, "")
              .replace(/-/g, " ");
            try {
              const items = await sp.web.lists
                .getByTitle("Announcements")
                .items.select(
                  "ID",
                  "Title",
                  "Description",
                  "Detail",
                  "Category",
                  "Tag",
                  "Date",
                  "Time",
                  "Slug",
                  "Content",
                  "Image",
                  "Modified",
                  "Created",
                )
                .expand("AttachmentFiles")
                .filter(`substringof('${titleFromSlug}', Title)`)
                .top(1)
                ()

              if (items && items.length > 0) {
                spItem = items[0];
              }
            } catch (err) {
              console.warn("Item not found by title match");
            }
          }

          if (spItem) {
            const transformed = transformSharePointToAnnouncement(spItem);
            setAnnouncement(transformed);
          } else {
            setError("Announcement not found");
          }
        } else {
          // If not using SharePoint, show error
          setError("SharePoint integration is required");
        }
      } catch (err) {
        console.error("Error loading announcement:", err);
        setError("Failed to load announcement");
      } finally {
        setLoading(false);
      }
    };

    loadAnnouncement();
    window.scrollTo(0, 0);
  }, [slug, useSharePoint]);

  if (loading) {
    return (
      <div className={styles.announcementDetailContainer}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading announcement...</p>
        </div>
      </div>
    );
  }

  if (error || !announcement) {
    return (
      <div className={styles.announcementDetailContainer}>
        <div className={styles.notFound}>
          <h1>Announcement Not Found</h1>
          <p>
            The announcement you're looking for doesn't exist or has been
            removed.
          </p>
          <button
            onClick={() => navigate(basePath)}
            className={styles.backButton}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className={styles.announcementDetailContainer}>
      {/* Breadcrumb - removed */}

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          {announcement.category} / {announcement.title}
        </h1>
      </div>

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img
            src={announcement.heroImage}
            alt={announcement.title}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />

          <div className={styles.heroBadge}>
            <Badge text={announcement.tag} variant='primary' size='medium' />
          </div>

          <div className={styles.heroMeta}>
            <time className={styles.heroDate} dateTime={announcement.date}>
              {announcement.time || formatDate(announcement.date)}
            </time>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          {announcement.content.sections.map((section, index) => {
            if (section.type === "text") {
              return (
                <div
                  key={index}
                  className={styles.textSection}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            }

            if (section.type === "quote") {
              return (
                <blockquote key={index} className={styles.quoteSection}>
                  <div className={styles.quoteIcon} aria-hidden='true'>
                    "
                  </div>
                  <p className={styles.quoteText}>{section.content}</p>
                  {section.author && (
                    <footer className={styles.quoteAuthor}>
                      — {section.author}
                    </footer>
                  )}
                </blockquote>
              );
            }

            return null;
          })}

          {/* Back Button */}
          <div className={styles.navigationSection}>
            <button
              onClick={() => navigate(basePath)}
              className={styles.backToListButton}
              aria-label='Back to announcements list'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  d='M12.5 15L7.5 10L12.5 5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
