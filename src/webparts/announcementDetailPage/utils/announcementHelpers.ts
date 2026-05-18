/**
 * Announcement interface for SharePoint data
 */
export interface IAnnouncement {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  tag: string;
  date: string;
  time: string;
  heroImage: string;
  content: {
    sections: {
      type: 'text' | 'quote';
      content: string;
      author?: string;
    }[];
  };
}

/**
 * Generates a URL-friendly slug from a title
 * @param title - The announcement title
 * @returns A slugified version of the title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .substring(0, 100); // Limit length
};

/**
 * Transforms SharePoint announcement data to IAnnouncement format
 * @param spItem - SharePoint list item
 * @returns IAnnouncement object
 */
export const transformSharePointToAnnouncement = (spItem: any): IAnnouncement => {
  // Generate slug from title or use ID
  const slug = spItem.Slug || generateSlug(spItem.Title) || `announcement-${spItem.ID}`;

  // Get image URL
  let heroImage = '';
  if (spItem.AttachmentFiles && spItem.AttachmentFiles.length > 0) {
    heroImage = spItem.AttachmentFiles[0].ServerRelativeUrl;
  } else if (spItem.Image) {
    try {
      const imageData = JSON.parse(spItem.Image);
      heroImage = imageData.serverRelativeUrl;
    } catch {
      // Fallback if parsing fails
      heroImage = '';
    }
  }

  // Parse content sections - prefer Detail field over Description
  let contentSections = [];
  const detailContent = spItem.Detail || spItem.Description;
  if (spItem.Content) {
    try {
      const parsedContent = JSON.parse(spItem.Content);
      contentSections = parsedContent.sections || [];
    } catch {
      // If Content field can't be parsed, use Detail or Description
      if (detailContent) {
        contentSections = [
          {
            type: 'text',
            content: detailContent
          }
        ];
      }
    }
  } else if (detailContent) {
    contentSections = [
      {
        type: 'text',
        content: detailContent
      }
    ];
  }

  // Calculate time ago
  const timeAgo = calculateTimeAgo(spItem.Modified || spItem.Created);

  return {
    id: spItem.ID,
    slug,
    title: spItem.Title,
    description: spItem.Description || '',
    category: spItem.Category || 'General',
    tag: spItem.Tag || 'ANNOUNCEMENT',
    date: spItem.Date || spItem.Modified || spItem.Created,
    time: spItem.Time || timeAgo,
    heroImage: heroImage || '',
    content: {
      sections: contentSections
    }
  };
};

/**
 * Calculates human-readable time ago from a date string
 * @param dateString - ISO date string
 * @returns Human-readable time ago (e.g., "2 hours ago")
 */
export const calculateTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  if (seconds < 60) {
    return 'just now';
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

/**
 * Formats a date string to a readable format
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Gets the announcement detail page URL
 * @param slug - The announcement slug
 * @param basePath - The base path for announcements
 * @returns The full URL for the announcement detail page
 */
export const getAnnouncementDetailUrl = (slug: string, basePath: string = '/announcements'): string => {
  return `${basePath}/${slug}`;
};

/**
 * Gets the announcement detail page URL using ID (fallback)
 * @param id - The announcement ID
 * @param title - The announcement title (optional, for generating slug)
 * @param basePath - The base path for announcements
 * @returns The full URL for the announcement detail page
 */
export const getAnnouncementDetailUrlById = (
  id: number,
  title?: string,
  basePath: string = '/announcements'
): string => {
  const slug = title ? generateSlug(title) : `announcement-${id}`;
  return `${basePath}/${slug}`;
};
