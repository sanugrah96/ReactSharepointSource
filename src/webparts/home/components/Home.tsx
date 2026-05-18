import * as React from "react";
import styles from "./Home.module.scss";
import { IHomeProps } from "./IHomeProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  IIconProps,
  Label,
  Pivot,
  PivotItem,
  SearchBox,
} from "@fluentui/react";
import * as moment from "moment";
import * as Moment from "moment-timezone";
import {
  MSGraphClient,
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";
import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import * as $ from "jquery";
import { sp } from "../../../services/pnpClient";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Pagination } from "./Pagination";
import {
  generateSlug,
  IAnnouncement,
} from "../../announcementDetailPage/utils/announcementHelpers";
require("../assets/style.css");
require("../assets/fabric.min.css");
const filterIcon: IIconProps = { iconName: "search" };

const viewCount = 6;
const localizer = momentLocalizer(moment);

const labels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]; // extend if needed

interface NavNode {
  id: number;
  title: string;
  level: string;
  parentId?: number;
  parentTitle?: string;
  url: string;
  icon: any;
  order: number;
  children: NavNode[];
}

export interface IHomeState {
  quickLinks: any;
  announcementData: any;
  companyevents: any;
  aboutUS: any;
  news: any;
  celebrationData: any;
  celebrationDataSub: any;
  quizData: any;
  answers: { [questionId: number]: string };
  announcementDataall: any;
  announcementCurrentPage: number;
  announcementTotalPages: number;
  announcementItems: any;
  announcementSearchText: any;
  announcementSearchArray: any;
  sSingleValueDropdown: string;
  sIsDropdownSelected: boolean;
  sAllEvents: any[];
  birthdayData: any;
  activePivotKey: any;
  vivaEngageShow: boolean;
  calendarShow: boolean;
  bigBirthdayShow: boolean;
  bigEventsShow: boolean;
  videosDetails: any;
  videosCurrentPage: number;
  videosTotalPages: number;
  videosItems: any;
  videosSearchText: any;
  videosSearchArray: any;
  homeVideos: any[];
  currentHeroVideoIndex: number;
  // Hero video slide-transition state — two stacked <video> slots crossfade by translateX
  activeSlot: 'A' | 'B';
  slotAUrl: string;
  slotBUrl: string;
  slotAClass: 'is-active' | 'is-leaving' | 'is-staged';
  slotBClass: 'is-active' | 'is-leaving' | 'is-staged';
  // Routing state
  currentRoute: string;
  currentItemId: string | null;
  // Announcement detail state
  announcementDetail: IAnnouncement | null;
  announcementDetailLoading: boolean;
  announcementDetailError: string | null;
  // Event detail state
  eventDetail: any;
  eventDetailLoading: boolean;
  eventDetailError: string | null;
  // Video detail state
  videoDetail: any;
  videoDetailLoading: boolean;
  videoDetailError: string | null;
  // Calendar state
  calendarView: string;
  calendarDate: Date;
  selectedEvent: any;
  showEventDetail: boolean;
  allCalendarEvents: any[];
  quickLinksOpen: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  private graphClient: MSGraphClient = null;

  // Hero video slide transition: two <video> slots, refs to drive .play() programmatically
  private slotARef = React.createRef<HTMLVideoElement>();
  private slotBRef = React.createRef<HTMLVideoElement>();
  private heroSlideTimeoutId: number | null = null;
  private readonly SLIDE_SETTLE_MS = 1050; // ~50ms past the 1s CSS transition

  constructor(props: IHomeProps, state: IHomeState) {
    super(props);
    this.state = {
      quickLinks: [],
      announcementData: [],
      companyevents: [],
      aboutUS: [],
      news: [],
      celebrationData: [],
      celebrationDataSub: [],
      quizData: [],
      answers: {},
      announcementDataall: [],
      announcementCurrentPage: 1,
      announcementTotalPages: 5,
      announcementItems: [],
      announcementSearchText: "",
      announcementSearchArray: [],
      sSingleValueDropdown: "",
      sIsDropdownSelected: false,
      sAllEvents: [],
      birthdayData: [],
      activePivotKey: "THESOURCE",
      vivaEngageShow: false,
      calendarShow: false,
      bigBirthdayShow: false,
      bigEventsShow: false,
      videosDetails: [],
      videosCurrentPage: 1,
      videosTotalPages: 5,
      videosItems: [],
      videosSearchText: "",
      videosSearchArray: [],
      homeVideos: [],
      currentHeroVideoIndex: 0,
      activeSlot: 'A',
      slotAUrl: '',
      slotBUrl: '',
      slotAClass: 'is-active',
      slotBClass: 'is-staged',
      // Routing state
      currentRoute: "/",
      currentItemId: null,
      // Announcement detail state
      announcementDetail: null,
      announcementDetailLoading: false,
      announcementDetailError: null,
      // Event detail state
      eventDetail: null,
      eventDetailLoading: false,
      eventDetailError: null,
      // Video detail state
      videoDetail: null,
      videoDetailLoading: false,
      videoDetailError: null,
      // Calendar state
      calendarView: "month",
      calendarDate: new Date(),
      selectedEvent: null,
      showEventDetail: false,
      allCalendarEvents: [],
      quickLinksOpen: false,
    };

    // Bind routing methods
    this.handlePopState = this.handlePopState.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  private getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }
  public render(): React.ReactElement<IHomeProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;
    const { quickLinks } = this.state as {
      quickLinks: Record<string, NavNode[]>;
    };

    const ImageLink =
      this.props.announcementHomeBannerFilePicker == undefined
        ? require("../assets/annobanner.jpg")
        : this.props.announcementHomeBannerFilePicker.fileAbsoluteUrl;
    const ImageLink1 =
      this.props.companyEventHomeBannerFilePicker == undefined
        ? require("../assets/eventbanner.png")
        : this.props.companyEventHomeBannerFilePicker.fileAbsoluteUrl;
    const ImageLink2 =
      this.props.videosHomeBannerFilePicker == undefined
        ? require("../assets/vidoesBanner.png")
        : this.props.videosHomeBannerFilePicker.fileAbsoluteUrl;
    // Hero video URLs: state.slotAUrl/slotBUrl drive the two stacked slots.
    // If the list hasn't loaded yet (both empty), fall back to property-pane picker / URL / hardcoded.
    const heroFallbackUrl = (this.props.heroVideoFilePicker && this.props.heroVideoFilePicker.fileAbsoluteUrl)
      ? this.props.heroVideoFilePicker.fileAbsoluteUrl
      : (this.props.heroVideoUrl && this.props.heroVideoUrl.trim().length > 0
        ? this.props.heroVideoUrl
        : 'https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4');
    const slotAEffectiveUrl = this.state.slotAUrl || (this.state.activeSlot === 'A' ? heroFallbackUrl : '');
    const slotBEffectiveUrl = this.state.slotBUrl || (this.state.activeSlot === 'B' ? heroFallbackUrl : '');
    const heroIsSingleSource = this.state.homeVideos.length <= 1;

    const isDetailPage =
      (this.state.currentRoute === "/announcements" ||
        this.state.currentRoute === "/events" ||
        this.state.currentRoute === "/videos") &&
      this.state.currentItemId;

    return (
      <section className={`homecontainer${isDetailPage ? " detail-page" : ""}`}>
        {!isDetailPage && (
          <header className='top-bar'>
            <div className='left'>
              <div className='date'>
                {moment(new Date()).format("dddd MMMM DD, YYYY")}
              </div>
              <h1 className='greeting'>
                {this.getGreeting()}, {this.props.userDisplayName.split(" ")[0]}
              </h1>
            </div>

            <div className='right'>
              <img src={require("../assets/logo.png")} className='logo' />
            </div>
          </header>
        )}

        <Pivot
          aria-label='Banner Pivot'
          selectedKey={this.state.activePivotKey}
        >
          <PivotItem
            itemKey='THESOURCE'
            headerText='THE SOURCE'
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  this.navigate("/");
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontSize: "20px",
                  cursor: "pointer",
                  background:
                    this.state.activePivotKey === "THESOURCE"
                      ? "#FFFFFF33"
                      : "transparent",
                  padding: "0px 8px",
                }}
              >
                THE SOURCE
              </div>
            )}
          >
            <div className='hero-video-wrapper'>
              <video
                ref={this.slotARef}
                src={slotAEffectiveUrl}
                className={`homevideo hero-slot ${this.state.slotAClass}`}
                loop={heroIsSingleSource}
                controls={this.state.activeSlot === 'A'}
                playsInline
                muted
                autoPlay={this.state.activeSlot === 'A'}
                preload='auto'
                onEnded={this.handleHeroVideoEnded}
                onPlay={this.hidePlayOverlay}
              />
              <video
                ref={this.slotBRef}
                src={slotBEffectiveUrl}
                className={`homevideo hero-slot ${this.state.slotBClass}`}
                loop={false}
                controls={this.state.activeSlot === 'B'}
                playsInline
                muted
                autoPlay={false}
                preload='auto'
                onEnded={this.handleHeroVideoEnded}
                onPlay={this.hidePlayOverlay}
              />
              <div
                className='play-button-overlay'
                onClick={this.handlePlayOverlayClick}
              ></div>
            </div>
            <div className='container'>
              <aside className={`sidebar ${this.state.quickLinksOpen ? 'ql-open' : 'ql-closed'}`}>
                {/* <div className="QuickDesk">
                  <h2>Quick Links</h2>

                  <Accordion allowZeroExpanded={true}>
                    {Object.keys(this.state.quickLinks).map((category) => (
                      <AccordionItem key={category} uuid={category}>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <h4 className="menu-section-title">
                              {" "}
                              <img src={require("../assets/directorywhite.png")} /> {category}
                            </h4>
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <div className="menu-section">
                            {this.state.quickLinks[category].map((item) => {
                              const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

                              return (
                                <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" rel="noreferrer" data-interception="off">
                                  <span>
                                    <img src={imageURL} />
                                  </span>
                                  {item.Title}
                                </a>
                              );
                            })}
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div> */}

                <div className='QuickDesk'>
                  <h2 className='ql-toggle' onClick={() => this.setState({ quickLinksOpen: !this.state.quickLinksOpen })}>
                    Quick Links
                    <span className='ql-chevron'>{this.state.quickLinksOpen ? '\u25B2' : '\u25BC'}</span>
                  </h2>

                  <div className='ql-content'>
                  <Accordion allowZeroExpanded={true}>
                    {Object.entries(quickLinks).map(
                      ([categoryName, subNodes]: [string, NavNode[]]) => (
                        <AccordionItem
                          key={categoryName}
                          uuid={categoryName.replace(/ & | /g, "-")}
                        >
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <h4 className='menu-section-title'>
                                <img
                                  className='menu-section-title-imgwhite'
                                  src={require("../assets/directorywhite.png")}
                                  alt={categoryName}
                                />
                                {categoryName}
                              </h4>
                            </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                            <div className='menu-section'>
                              {subNodes.map((subNode: NavNode) => (
                                <React.Fragment key={subNode.id}>
                                  {subNode.children.length > 0 ? (
                                    /* ✅ NESTED ACCORDION (Training → Courses/Classes) */
                                    <Accordion allowZeroExpanded={true}>
                                      <AccordionItem
                                        uuid={`${categoryName}-${subNode.title}`}
                                      >
                                        <AccordionItemHeading>
                                          <AccordionItemButton
                                            style={{ fontWeight: 600 }}
                                          >
                                            <h5 className='menu-section-subtitle'>
                                              {/* ✅ DYNAMIC ICON for SubCategory header */}
                                              <img
                                                className='menu-section-title-img'
                                                src={subNode.icon}
                                                alt={subNode.title}
                                                onError={(e) => {
                                                  e.currentTarget.src = require("../assets/directorywhite.png");
                                                }}
                                              />
                                              {subNode.title}
                                            </h5>
                                          </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                          <div className='menu-section'>
                                            {/* ✅ DYNAMIC ICONS for ITEMS */}
                                            {subNode.children.map(
                                              (item: NavNode) => (
                                                <a
                                                  key={item.id}
                                                  href={item.url}
                                                  target='_blank'
                                                  rel='noreferrer'
                                                  data-interception='off'
                                                >
                                                  <span>
                                                    <img
                                                      src={item.icon}
                                                      alt={item.title}
                                                      onError={(e) => {
                                                        e.currentTarget.src = require("../assets/directorywhite.png");
                                                      }}
                                                    />
                                                  </span>
                                                  {item.title}
                                                </a>
                                              ),
                                            )}
                                          </div>
                                        </AccordionItemPanel>
                                      </AccordionItem>
                                    </Accordion>
                                  ) : (
                                    /* ✅ DIRECT LINK (Directory, Timesheet) */
                                    <a
                                      href={subNode.url}
                                      target='_blank'
                                      rel='noreferrer'
                                      data-interception='off'
                                    >
                                      <span>
                                        {/* ✅ DYNAMIC ICON */}
                                        <img
                                          src={subNode.icon}
                                          alt={subNode.title}
                                          onError={(e) => {
                                            e.currentTarget.src = require("../assets/directorywhite.png");
                                          }}
                                        />
                                      </span>
                                      {subNode.title}
                                    </a>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                      ),
                    )}
                  </Accordion>
                  </div>
                </div>

                {/* <div className="QuickDesk">
                  <h2>Quick Links</h2>

                  {Object.keys(this.state.quickLinks).map((category) => (
                    <div className="menu-section" key={category}>
                      <h4>{category}</h4>

                      {this.state.quickLinks[category].map((item) => {
                        const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

                        return (
                          <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
                            <span>
                              <img src={imageURL} />
                            </span>
                            {item.Title}
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div> */}
              </aside>

              <main className='content'>
                <div className='Announcement'>
                  <div className='section-header'>
                    <h2>Announcements</h2>
                    <a
                      href='#/announcements'
                      onClick={(e) => {
                        e.preventDefault();
                        this.navigate("/announcements");
                      }}
                      className='view-all'
                    >
                      View All
                    </a>
                  </div>

                  <div className='card-row '>
                    {this.state.announcementData.length > 0 &&
                      this.state.announcementData
                        .slice(0, 3)
                        .map((ele, ind) => {
                          let imageURL =
                            ele.AttachmentFiles.length > 0
                              ? ele.AttachmentFiles[0].ServerRelativeUrl
                              : ele.Image
                                ? JSON.parse(ele.Image).serverRelativeUrl
                                : require(`../assets/Announcement.jpg`);
                          // Generate slug from title and append ID for uniqueness
                          const slug =
                            ele.Slug || `${generateSlug(ele.Title)}-${ele.ID}`;
                          return (
                            <a
                              href={`#/announcements/${slug}`}
                              className='card'
                              onClick={(e) => {
                                e.preventDefault();
                                // Save to localStorage for persistence on refresh
                                try {
                                  const annData = {
                                    id: ele.ID,
                                    slug: slug,
                                    title: ele.Title,
                                    description: ele.Description || "",
                                    category: ele.Category || "General",
                                    tag: ele.Category || "ANNOUNCEMENT",
                                    date: ele.Modified || ele.Created,
                                    time: ele.Time || "",
                                    heroImage: imageURL,
                                    content: {
                                      sections:
                                        ele.Detail || ele.Description
                                          ? [
                                              {
                                                type: "text",
                                                content:
                                                  ele.Detail || ele.Description,
                                              },
                                            ]
                                          : [],
                                    },
                                  };
                                  localStorage.setItem(
                                    "announcementDetail_" + slug,
                                    JSON.stringify(annData),
                                  );
                                } catch (e) {}
                                this.navigate("/announcements", slug);
                              }}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <div className='tag'>{ele.Category}</div>
                              <img src={imageURL} alt='' />
                              <h3>{ele.Title}</h3>
                              <p>{ele.Description}</p>
                              <span className='time'>{ele.Time}</span>
                            </a>
                          );
                        })}
                  </div>
                </div>

                <div className='Announcement'>
                  <div className='section-header'>
                    <h2>Events</h2>
                    <a
                      href='#/events'
                      onClick={(e) => {
                        e.preventDefault();
                        this.navigate("/events");
                      }}
                      className='view-all'
                    >
                      View All
                    </a>
                  </div>

                  <div className='card-row events-row'>
                    {this.state.companyevents.length > 0 &&
                      this.state.companyevents.map((el, ind) => {
                        const imageURL =
                          el.AttachmentFiles && el.AttachmentFiles.length > 0
                            ? el.AttachmentFiles[0].ServerRelativeUrl
                            : el.Image
                              ? JSON.parse(el.Image).serverRelativeUrl
                              : require(`../assets/Event.jpg`);
                        let badgeClass = "tag event-meeting";
                        const category = el.Category
                          ? el.Category.toLowerCase()
                          : "";
                        if (category.includes("holiday")) {
                          badgeClass = "tag event-holiday";
                        } else if (category.includes("event")) {
                          badgeClass = "tag event-event";
                        }

                        const eventSlug = `${generateSlug(el.Title)}-${el.ID}`;
                        return (
                          <a
                            href={`#/events/${eventSlug}`}
                            className='card'
                            onClick={(e) => {
                              e.preventDefault();
                              const eventData = {
                                id: el.ID,
                                slug: eventSlug,
                                title: el.Title,
                                description: el.Description || "",
                                category: el.Category || "General",
                                tag: el.Category || "EVENT",
                                date: el.Date || el.Created,
                                endDate: "",
                                time: el.Time || "",
                                location: "",
                                allDay: false,
                                heroImage: imageURL,
                                link: el.Link,
                                content:
                                  el.Details || el.Description
                                    ? [
                                        {
                                          type: "text" as const,
                                          content: el.Details || el.Description,
                                        },
                                      ]
                                    : [],
                              };
                              // Save to localStorage for persistence on refresh
                              try {
                                localStorage.setItem(
                                  "eventDetail_" + eventSlug,
                                  JSON.stringify(eventData),
                                );
                              } catch (e) {}
                              this.setState(
                                {
                                  eventDetail: eventData,
                                  eventDetailLoading: false,
                                  eventDetailError: null,
                                },
                                () => {
                                  this.navigate("/events", eventSlug);
                                },
                              );
                            }}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <img src={imageURL} alt='' />
                            <div className='event-card-info'>
                              <div className={badgeClass}>{el.Category}</div>
                              <h3>{el.Title}</h3>
                              <p>
                                {moment(el.Date || el.Created).format(
                                  "dddd MMMM DD, YYYY",
                                )}
                              </p>
                              <span className='time'>{el.Time || "All-day"}</span>
                            </div>
                          </a>
                        );
                      })}
                  </div>
                </div>
                <div className='dashboard'>
                  <div className='left-section'>
                    <div className='section-header'>
                      <h3>Learn More</h3>
                      {/* <a
                        href="https://www.mcalvain.com/"
                        // onClick={(e) => {
                        //                          this.setState({ activePivotKey: "THESOURCE" });
                        // }}
                        className="view-all"
                        target="_blank"
                        data-interception="off"
                      >
                        View All →
                      </a> */}
                    </div>

                    <div className='card-grid'>
                      {this.state.aboutUS.length > 0 &&
                        this.state.aboutUS.map((ele, ind) => {
                          const cardClass = "info-card orange-card";
                          let imageURL =
                            ele.AttachmentFiles.length > 0
                              ? ele.AttachmentFiles[0].ServerRelativeUrl
                              : ele.Image
                                ? JSON.parse(ele.Image).serverRelativeUrl
                                : require(`../assets/Event.jpg`);

                          return (
                            <a
                              href={ele.Link ? ele.Link.Url : "#"}
                              className={cardClass}
                              style={{ textDecoration: "none", color: "#fff" }}
                              target='_blank'
                              data-interception='off'
                            >
                              <img src={imageURL} />
                              {/* <span style={{ position: 'relative', zIndex: 2 }}>{ele.Title}</span> */}
                            </a>
                          );
                        })}
                    </div>
                  </div>

                  <div className='right-section'>
                    <div className='section-header'>
                      <h3>Birthdays and Work Anniversaries</h3>
                      <a
                        href='#/events'
                        onClick={(e) => {
                          e.preventDefault();
                          this.navigate("/events");
                        }}
                        className='view-all'
                      >
                        View All
                      </a>
                    </div>

                    {this.state.celebrationData.length > 0 &&
                      this.state.celebrationData.map((ele, ind) => {
                        return (
                          <div className='event'>
                            <div className='date-box'>
                              <div>{moment(ele.Date).format("ddd")}</div>
                              <div className='day'>
                                {moment(ele.Date).format("DD")}
                              </div>
                              <div>{moment(ele.Date).format("MMM")}</div>
                            </div>
                            <div className='event-info'>
                              <h4>{ele.Title}</h4>
                              <p>
                                {moment(ele.Date).format("dddd MMMM DD, YYYY")}
                              </p>
                              <a
                                href='#'
                                target='_blank'
                                data-interception='off'
                              >
                                {ele.CelebrationType}
                              </a>
                            </div>
                            <div className='tag'>{ele.CelebrationType}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className='videosectionbottom'>
                  <h5 style={{ color: "#ffffff" }}>#BELIONS</h5>
                  <p>
                    Exceeding expectations and ELEVATING everyday 🏗️ #BeLIONS.
                  </p>

                  <video
                    src={`${window.location.origin}/sites/TheSource/SiteAssets/belions.mp4`}
                    controls
                    style={{ width: "100%", borderRadius: "10px" }}
                    playsInline
                    muted
                    autoPlay
                    loop
                    className='homevideo'
                  />
                </div>
              </main>
            </div>
          </PivotItem>

          <PivotItem
            itemKey='ANNOUNCEMENTS'
            headerText={"ANNOUNCEMENTS"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  this.navigate("/announcements");
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontSize: "20px",
                  cursor: "pointer",
                  background:
                    this.state.activePivotKey === "ANNOUNCEMENTS"
                      ? "#FFFFFF33"
                      : "transparent",
                  padding: "0px 8px",
                }}
              >
                ANNOUNCEMENTS
              </div>
            )}
          >
            {this.state.currentItemId &&
            this.state.currentRoute === "/announcements" ? (
              // Announcement Detail View
              <div
                style={{
                  minHeight: "100vh",
                  background: "none",
                  marginTop: "2rem",
                }}
              >
                {this.state.announcementDetailLoading && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "400px",
                        padding: "3rem 1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          border: "4px solid #f0f0f0",
                          borderTopColor: "#ff6b35",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      ></div>
                      <p
                        style={{
                          marginTop: "1rem",
                          fontSize: "1rem",
                          color: "#666",
                        }}
                      >
                        Loading announcement...
                      </p>
                    </div>
                  </>
                )}

                {this.state.announcementDetailError && (
                  <div
                    style={{
                      maxWidth: "600px",
                      margin: "0 auto",
                      padding: "4rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "2rem",
                        color: "#1a1a1a",
                        margin: "0 0 1rem 0",
                      }}
                    >
                      Announcement Not Found
                    </h1>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        color: "#666",
                        margin: "0 0 2rem 0",
                        lineHeight: "1.6",
                      }}
                    >
                      The announcement you're looking for doesn't exist or has
                      been removed.
                    </p>
                    <button
                      onClick={() => this.navigate("/announcements")}
                      style={{
                        padding: "0.875rem 1.5rem",
                        background: "#ff6b35",
                        border: "none",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Back to Announcements
                    </button>
                  </div>
                )}

                {this.state.announcementDetail &&
                  !this.state.announcementDetailLoading && (
                    <article style={{ position: "relative" }}>
                      <img
                        src={require("../assets/logo.png")}
                        className='logo'
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                        }}
                      />
                      <div
                        style={{
                          marginBottom: "1.5rem",
                          maxWidth: "calc(100% - 160px)",
                          minHeight: "80px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            color: "#999",
                            margin: "0 0 0.5rem 0",
                            fontFamily:
                              "'Helvetica Neue LT Pro', 'Helvetica Neue', sans-serif",
                            fontWeight: 400,
                            lineHeight: "140%",
                            letterSpacing: "0%",
                            verticalAlign: "middle",
                          }}
                        >
                          <a
                            onClick={() => this.navigate("/announcements")}
                            style={{
                              color: "#999",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#fff")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#999")
                            }
                          >
                            Announcements
                          </a>{" "}
                          / {this.state.announcementDetail.title}
                        </p>
                      </div>

                      <div
                        style={{
                          marginLeft: "15%",
                          marginRight: "15%",
                          marginTop: "2rem",
                        }}
                      >
                        {/* Hero Image */}
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "500px",
                            overflow: "hidden",
                            borderRadius: "10px",
                          }}
                        >
                          <img
                            src={this.state.announcementDetail.heroImage}
                            alt={this.state.announcementDetail.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          {/* Badge - top left */}
                          <span
                            style={{
                              position: "absolute",
                              top: "1.5rem",
                              left: "1.5rem",
                              display: "inline-block",
                              padding: "0.375rem 1rem",
                              background: "#ff6b35",
                              color: "#fff",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              zIndex: 2,
                            }}
                          >
                            {this.state.announcementDetail.tag}
                          </span>
                        </div>

                        {/* Time / Date */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            fontSize: "0.875rem",
                            color: "#d0d0d0",
                            marginTop: "1.5rem",
                            marginBottom: "2rem",
                            padding: "0 1rem 1rem",
                          }}
                        >
                          {" "}
                          <span>
                            {new Date(
                              this.state.announcementDetail.date,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>{" "}
                          <span style={{ color: "rgba(255,255,255,0.4)" }}>
                            •
                          </span>
                          <span>{this.state.announcementDetail.time}</span>
                          {/* <span style={{ color: "rgba(255,255,255,0.4)" }}>
                            •
                          </span>
                          <span
                            style={{
                              fontWeight: 600,
                              color: "#ff6b35",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {this.state.announcementDetail.category}
                          </span> */}
                        </div>
                        {/* Page Header - Breadcrumb + Title */}
                        <h1
                          style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                            lineHeight: 1.1,
                            textTransform: "uppercase",
                            padding: "0 1rem 1rem",
                          }}
                        >
                          {this.state.announcementDetail &&
                            this.state.announcementDetail.title}
                        </h1>
                        {/* Content Section */}
                        <div style={{ background: "none" }}>
                          <div
                            style={{
                              // maxWidth: "800px",
                              margin: "0 auto",
                              padding: "0 1rem 4rem",
                            }}
                          >
                            {this.state.announcementDetail.content.sections.map(
                              (section, index) => {
                                if (section.type === "text") {
                                  return (
                                    <div
                                      key={index}
                                      className='announcement-detail-content'
                                      style={{ marginBottom: "2rem" }}
                                      dangerouslySetInnerHTML={{
                                        __html: section.content,
                                      }}
                                    />
                                  );
                                }
                                if (section.type === "quote") {
                                  return (
                                    <blockquote
                                      key={index}
                                      style={{
                                        position: "relative",
                                        margin: "3rem 0",
                                        padding: "2rem 2rem 2rem 4rem",
                                        background: "transparent",
                                        borderLeft: "4px solid #ff6b35",
                                        borderRadius: "8px",
                                        fontStyle: "italic",
                                      }}
                                    >
                                      <p
                                        style={{
                                          fontSize: "1.25rem",
                                          lineHeight: 1.6,
                                          color: "#d0d0d0",
                                          margin: "0 0 1rem 0",
                                        }}
                                      >
                                        {section.content}
                                      </p>
                                      {section.author && (
                                        <footer
                                          style={{
                                            fontSize: "1rem",
                                            color: "#888",
                                            fontStyle: "normal",
                                            fontWeight: 600,
                                          }}
                                        >
                                          — {section.author}
                                        </footer>
                                      )}
                                    </blockquote>
                                  );
                                }
                                return null;
                              },
                            )}

                            {/* Back Button */}
                            <div
                              style={{
                                marginTop: "4rem",
                                paddingTop: "2rem",
                                borderTop: "1px solid #3a3a3a",
                              }}
                            >
                              <button
                                onClick={() => window.history.back()}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  padding: "0.875rem 1.5rem",
                                  background: "transparent",
                                  border: "2px solid #ff6b35",
                                  borderRadius: "8px",
                                  color: "#ff6b35",
                                  fontSize: "1rem",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                }}
                              >
                                ← Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  )}
              </div>
            ) : (
              // Announcement List View
              <div>
                <div>
                  <div
                    className='Home-banner'
                    style={{ backgroundImage: "url(" + ImageLink + ")" }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))",
                        height: "300px",
                      }}
                    >
                      <div className='container Home-banner-wrapper'>
                        <div className='ms-Grid-row'>
                          <div
                            className='ms-Grid-col ms-sm12 ms-md12'
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <div className='text-center w-50'>
                              <h1 className='Home-banner-title'>
                                {this.props.announcementTitle}
                              </h1>
                              <p className='Home-banner-description'>
                                {this.props.announcementDescription}
                              </p>
                              <div
                                className='ms-Grid-row'
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div className='ms-Grid-col ms-sm8 ms-md4'>
                                  <SearchBox
                                    id='chatSearchbtn'
                                    placeholder='Search'
                                    iconProps={filterIcon}
                                    value={this.state.announcementSearchText}
                                    onChange={(event) => {
                                      this.searchUsers(event.target["value"]);
                                    }}
                                    onClear={() => {
                                      this.setState({
                                        announcementSearchText: "",
                                      });
                                      this.searchUsers("");
                                    }}
                                  />
                                </div>
                                <div className='ms-Grid-col ms-sm2 ms-md1'>
                                  <span>
                                    {" "}
                                    <button className='srchbutton'>
                                      Search
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className='homecontainer'>
                  <div className='container'>
                    <main className='content'>
                      <div className='Announcement'>
                        <div className='section-header'></div>

                        <div className='announcements-grid'>
                          {this.state.announcementDataall.length > 0 &&
                            this.state.announcementDataall.map((ele, ind) => {
                              let imageURL =
                                ele.AttachmentFiles.length > 0
                                  ? ele.AttachmentFiles[0].ServerRelativeUrl
                                  : ele.Image
                                    ? JSON.parse(ele.Image).serverRelativeUrl
                                    : require(`../assets/Announcement.jpg`);
                              const slug =
                                ele.Slug ||
                                `${generateSlug(ele.Title)}-${ele.ID}`;
                              return (
                                <a
                                  href={`#/announcements/${slug}`}
                                  className='card'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // Save to localStorage for persistence on refresh
                                    try {
                                      const annData = {
                                        id: ele.ID,
                                        slug: slug,
                                        title: ele.Title,
                                        description: ele.Description || "",
                                        category: ele.Category || "General",
                                        tag: ele.Category || "ANNOUNCEMENT",
                                        date: ele.Modified || ele.Created,
                                        time: ele.Time || "",
                                        heroImage: imageURL,
                                        content: {
                                          sections:
                                            ele.Detail || ele.Description
                                              ? [
                                                  {
                                                    type: "text",
                                                    content:
                                                      ele.Detail ||
                                                      ele.Description,
                                                  },
                                                ]
                                              : [],
                                        },
                                      };
                                      localStorage.setItem(
                                        "announcementDetail_" + slug,
                                        JSON.stringify(annData),
                                      );
                                    } catch (e) {}
                                    this.navigate("/announcements", slug);
                                  }}
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  <div className='tag'>{ele.Category}</div>
                                  <img src={imageURL} alt='' />
                                  <h3 className='newscardheader'>
                                    {ele.Title}
                                  </h3>
                                  <p>{ele.Description}</p>
                                  <span className='time'>{ele.Time}</span>
                                </a>
                              );
                            })}
                        </div>

                        {this.state.announcementItems.length > viewCount && (
                          <Pagination
                            currentPage={this.state.announcementCurrentPage}
                            totalPages={this.state.announcementTotalPages}
                            onChange={(page) => {
                              this.setState({ announcementCurrentPage: page });
                              var startCount = (page - 1) * viewCount;
                              var endCount = page * viewCount;
                              let pagedArr = this.state.announcementItems.slice(
                                startCount,
                                endCount,
                              );
                              this.mapPageData(pagedArr);
                            }}
                          />
                        )}
                      </div>
                    </main>
                  </div>
                </section>
              </div>
            )}
          </PivotItem>
          <PivotItem
            itemKey='COMPANYEVENTS'
            headerText={"EVENTS"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  this.navigate("/events");
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontSize: "20px",
                  cursor: "pointer",
                  background:
                    this.state.activePivotKey === "COMPANYEVENTS"
                      ? "#FFFFFF33"
                      : "transparent",
                  padding: "0px 8px",
                }}
              >
                EVENTS
              </div>
            )}
          >
            {this.state.currentItemId &&
            this.state.currentRoute === "/events" ? (
              // Event Detail View
              <div
                style={{
                  minHeight: "100vh",
                  background: "none",
                  marginTop: "2rem",
                }}
              >
                {this.state.eventDetailLoading && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "400px",
                      padding: "3rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        border: "4px solid #f0f0f0",
                        borderTopColor: "#ff6b35",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "#666",
                      }}
                    >
                      Loading event...
                    </p>
                  </div>
                )}

                {this.state.eventDetailError && (
                  <div
                    style={{
                      maxWidth: "600px",
                      margin: "0 auto",
                      padding: "4rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "2rem",
                        color: "#1a1a1a",
                        margin: "0 0 1rem 0",
                      }}
                    >
                      Event Not Found
                    </h1>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        color: "#666",
                        margin: "0 0 2rem 0",
                        lineHeight: "1.6",
                      }}
                    >
                      The event you're looking for doesn't exist or has been
                      removed.
                    </p>
                    <button
                      onClick={() => this.navigate("/events")}
                      style={{
                        padding: "0.875rem 1.5rem",
                        background: "#ff6b35",
                        border: "none",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Back to Events
                    </button>
                  </div>
                )}

                {this.state.eventDetail && !this.state.eventDetailLoading && (
                  <article style={{ position: "relative" }}>
                    <img
                      src={require("../assets/logo.png")}
                      className='logo'
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    />
                    <div
                      style={{
                        marginBottom: "1.5rem",
                        maxWidth: "calc(100% - 160px)",
                        minHeight: "80px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#999",
                          margin: "0 0 0.5rem 0",
                          fontFamily:
                            "'Helvetica Neue LT Pro', 'Helvetica Neue', sans-serif",
                          fontWeight: 400,
                          lineHeight: "140%",
                          letterSpacing: "0%",
                          verticalAlign: "middle",
                        }}
                      >
                        <a
                          onClick={() => this.navigate("/events")}
                          style={{
                            color: "#999",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#fff")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#999")
                          }
                        >
                          Events
                        </a>{" "}
                        / {this.state.eventDetail.title}
                      </p>
                    </div>
                    <div
                      style={{
                        marginLeft: "15%",
                        marginRight: "15%",
                        marginTop: "2rem",
                      }}
                    >
                      {/* Hero Image */}
                      {this.state.eventDetail.heroImage && (
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "500px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            marginBottom: "1.5rem",
                          }}
                        >
                          <img
                            src={this.state.eventDetail.heroImage}
                            alt={this.state.eventDetail.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          {this.state.eventDetail.category && (
                            <span
                              style={{
                                position: "absolute",
                                top: "1.5rem",
                                left: "1.5rem",
                                display: "inline-block",
                                padding: "0.375rem 1rem",
                                background: "#ff6b35",
                                color: "#fff",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                zIndex: 2,
                              }}
                            >
                              {this.state.eventDetail.category}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Category Badge (no image fallback) */}
                      {!this.state.eventDetail.heroImage &&
                        this.state.eventDetail.category && (
                          <span
                            style={{
                              display: "inline-block",
                              padding: "0.375rem 1rem",
                              background: "#ff6b35",
                              color: "#fff",
                              borderRadius: "4px",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              marginBottom: "1.5rem",
                            }}
                          >
                            {this.state.eventDetail.category}
                          </span>
                        )}

                      {/* Event Meta Info */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          fontSize: "0.875rem",
                          color: "#d0d0d0",
                          marginTop: "1rem",
                          marginBottom: "2rem",
                          flexWrap: "wrap",
                          padding: "0 1rem 1rem",
                        }}
                      >
                        <span>
                          {new Date(
                            this.state.eventDetail.date,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        {this.state.eventDetail.date &&
                          !this.state.eventDetail.allDay && (
                            <>
                              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                                •
                              </span>
                              <span>
                                {moment(this.state.eventDetail.date).format(
                                  "h:mm A",
                                )}
                                {this.state.eventDetail.endDate && (
                                  <>
                                    {" "}
                                    -{" "}
                                    {moment(
                                      this.state.eventDetail.endDate,
                                    ).format("h:mm A")}
                                  </>
                                )}
                              </span>
                            </>
                          )}
                        {this.state.eventDetail.allDay && (
                          <>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>
                              •
                            </span>
                            <span>All Day</span>
                          </>
                        )}
                        {this.state.eventDetail.location && (
                          <>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>
                              •
                            </span>
                            <span>{this.state.eventDetail.location}</span>
                          </>
                        )}
                      </div>
                      {/* Page Header - Title */}
                      <h1
                        style={{
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.1,
                          textTransform: "uppercase",
                          padding: "0 1rem 1rem",
                        }}
                      >
                        {this.state.eventDetail.title}
                      </h1>
                      {/* Content Section */}
                      <div style={{ background: "none" }}>
                        <div
                          style={{
                            // maxWidth: "800px",
                            margin: "0 auto",
                            padding: "0 1rem 4rem",
                          }}
                        >
                          {this.state.eventDetail.content.map(
                            (section: any, index: number) => (
                              <div
                                key={index}
                                className='announcement-detail-content'
                                style={{ marginBottom: "2rem" }}
                                dangerouslySetInnerHTML={{
                                  __html: section.content,
                                }}
                              />
                            ),
                          )}

                          {/* Back Button */}
                          <div
                            style={{
                              marginTop: "4rem",
                              paddingTop: "2rem",
                              borderTop: "1px solid #3a3a3a",
                            }}
                          >
                            <button
                              onClick={() => window.history.back()}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.875rem 1.5rem",
                                background: "transparent",
                                border: "2px solid #ff6b35",
                                borderRadius: "8px",
                                color: "#ff6b35",
                                fontSize: "1rem",
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              ← Back
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            ) : (
              <>
                <div>
                  <div
                    className='Home-banner'
                    style={{ backgroundImage: "url(" + ImageLink1 + ")" }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))",
                        height: "300px",
                      }}
                    >
                      <div className='container Home-banner-wrapper'>
                        <div className='ms-Grid-row'>
                          <div className='ms-Grid-col ms-sm12 ms-md12'>
                            <div className='text-center w-50'>
                              <h1 className='Home-banner-title'>
                                {this.props.companyEventTitle}
                              </h1>
                              <p className='Home-banner-description'>
                                {this.props.companyEventDescription}
                              </p>
                            </div>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='ms-Grid-col ms-sm12 ms-md8'>
                    {this.state.bigBirthdayShow ? (
                      <>
                        <section className='celebration-card'>
                          <div className='event-list'>
                            {this.state.celebrationDataSub.length > 0 &&
                              this.state.celebrationDataSub.map((ele, ind) => {
                                return (
                                  <div className='event-row'>
                                    <div className='event-left'>
                                      <div className='badge birthday'>
                                        {" "}
                                        {ele.CelebrationType === "Birthday" ? (
                                          <div className='bgicon'></div>
                                        ) : ele.CelebrationType ===
                                          "Employee Anniversary" ? (
                                          <div className='bgicon1'>
                                            {ele.IconText}
                                          </div>
                                        ) : (
                                          <div className='bgicon2'>
                                            {ele.IconText}
                                          </div>
                                        )}{" "}
                                      </div>
                                      <div className='event-text'>
                                        <h4>{ele.Title}</h4>
                                        <span>
                                          {moment(ele.Date).format(
                                            "dddd MMMM DD, YYYY",
                                          )}
                                        </span>
                                        <small>{ele.CelebrationType}</small>
                                      </div>
                                    </div>
                                    <span className='tag'>
                                      {ele.CelebrationType}
                                    </span>
                                  </div>
                                );
                              })}
                          </div>
                        </section>
                      </>
                    ) : (
                      <>
                        <div
                          className='calendar-container'
                          style={{
                            background: "#2c2c2c",
                            border: "1px solid hsla(0, 0%, 100%, .2)",
                            borderRadius: "8px",
                            padding: "20px",
                            color: "#fff",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <h2 style={{ margin: 0 }}>Events Calendar</h2>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <button
                                className='see-more'
                                onClick={() => this.handleViewChange("day")}
                                style={{
                                  padding: "8px 16px",
                                  opacity:
                                    this.state.calendarView === "day" ? 1 : 0.6,
                                }}
                              >
                                Day
                              </button>
                              <button
                                className='see-more'
                                onClick={() => this.handleViewChange("week")}
                                style={{
                                  padding: "8px 16px",
                                  opacity:
                                    this.state.calendarView === "week"
                                      ? 1
                                      : 0.6,
                                }}
                              >
                                Week
                              </button>
                              <button
                                className='see-more'
                                onClick={() => this.handleViewChange("month")}
                                style={{
                                  padding: "8px 16px",
                                  opacity:
                                    this.state.calendarView === "month"
                                      ? 1
                                      : 0.6,
                                }}
                              >
                                Month
                              </button>
                              <button
                                className='see-more'
                                onClick={() => this.handleViewChange("agenda")}
                                style={{
                                  padding: "8px 16px",
                                  opacity:
                                    this.state.calendarView === "agenda"
                                      ? 1
                                      : 0.6,
                                }}
                              >
                                Agenda
                              </button>
                            </div>
                          </div>
                          <MyCalendar
                            localizer={localizer}
                            events={this.state.allCalendarEvents}
                            startAccessor='start'
                            endAccessor='end'
                            style={{ height: 700 }}
                            date={this.state.calendarDate}
                            view={this.state.calendarView as any}
                            onNavigate={this.handleNavigate}
                            onView={this.handleViewChange}
                            onSelectEvent={this.handleSelectEvent}
                            views={["month", "week", "day", "agenda"]}
                            tooltipAccessor={(event: any) => {
                              const parts = [event.title];
                              if (event.category)
                                parts.push(`Category: ${event.category}`);
                              if (event.description)
                                parts.push(
                                  event.description
                                    .replace(/<[^>]*>/g, "")
                                    .substring(0, 150),
                                );
                              return parts.join("\n");
                            }}
                          />
                        </div>

                        {this.state.showEventDetail &&
                          this.state.selectedEvent && (
                            <div
                              style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0,0,0,0.5)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 1000,
                              }}
                              onClick={this.handleCloseEventDetail}
                            >
                              <div
                                style={{
                                  background: "#2c2c2c",
                                  border: "1px solid #444",
                                  padding: "30px",
                                  borderRadius: "8px",
                                  maxWidth: "600px",
                                  width: "90%",
                                  maxHeight: "80vh",
                                  overflow: "auto",
                                  color: "#fff",
                                }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "start",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <h2 style={{ margin: 0, color: "#fff" }}>
                                    {this.state.selectedEvent.title}
                                  </h2>
                                  <button
                                    onClick={this.handleCloseEventDetail}
                                    style={{
                                      border: "none",
                                      background: "transparent",
                                      fontSize: "24px",
                                      cursor: "pointer",
                                      padding: "0 10px",
                                      color: "#ccc",
                                    }}
                                  >
                                    ×
                                  </button>
                                </div>

                                <div
                                  style={{
                                    marginBottom: "15px",
                                    color: "#d0d0d0",
                                  }}
                                >
                                  <strong style={{ color: "#ff6b35" }}>
                                    Date:
                                  </strong>{" "}
                                  {moment(
                                    this.state.selectedEvent.start,
                                  ).format("MMMM DD, YYYY")}
                                </div>

                                {this.state.selectedEvent.time && (
                                  <div
                                    style={{
                                      marginBottom: "15px",
                                      color: "#d0d0d0",
                                    }}
                                  >
                                    <strong style={{ color: "#ff6b35" }}>
                                      Time:
                                    </strong>{" "}
                                    {this.state.selectedEvent.time}
                                  </div>
                                )}

                                {this.state.selectedEvent.location && (
                                  <div
                                    style={{
                                      marginBottom: "15px",
                                      color: "#d0d0d0",
                                    }}
                                  >
                                    <strong style={{ color: "#ff6b35" }}>
                                      Location:
                                    </strong>{" "}
                                    {this.state.selectedEvent.location}
                                  </div>
                                )}

                                {this.state.selectedEvent.category && (
                                  <div style={{ marginBottom: "15px" }}>
                                    <span
                                      style={{
                                        display: "inline-block",
                                        padding: "4px 12px",
                                        background: "#ff6b35",
                                        color: "#fff",
                                        borderRadius: "4px",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      {this.state.selectedEvent.category}
                                    </span>
                                  </div>
                                )}

                                {this.state.selectedEvent.description && (
                                  <div
                                    style={{
                                      marginBottom: "15px",
                                      borderTop: "1px solid #444",
                                      paddingTop: "15px",
                                    }}
                                  >
                                    <strong style={{ color: "#ff6b35" }}>
                                      Details:
                                    </strong>
                                    <div
                                      className='announcement-detail-content'
                                      style={{ marginTop: "8px" }}
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          this.state.selectedEvent.description,
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                      </>
                    )}
                  </div>
                  {/* <div className="ms-Grid-col ms-sm12 ms-md8">
                <div title="Documents" className="document">
                  <iframe
                    id="documents"
                    className="border-none w-full  events-calendar-container"
                    src={`${window.location.origin}/sites/TheSource/SitePages/Company-Events-Detail-Page.aspx`}
                    allowFullScreen={true}
                    style={{ width: "100%", marginTop: "20px", height: "835px", border: "none" }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div> */}
                  <div className='ms-Grid-col ms-sm12 ms-md4'>
                    {this.state.vivaEngageShow ? (
                      <>
                        <div title='Documents' className='document'>
                          {/* <div className="events-calendar-container"> */}
                          {/* second */}
                          <iframe
                            id='documents'
                            // onLoad={() => handleOnLoad()}
                            className='border-none w-full  events-calendar-container'
                            // src="https://87twts.sharepoint.com/sites/LearningApp/SitePages/Viva-Engage.aspx"
                            src={`${window.location.origin}/sites/TheSource/SitePages/Viva-Engage.aspx`}
                            allowFullScreen={true}
                            style={{
                              width: "100%",
                              marginTop: "20px",
                              height: "835px",
                              border: "none",
                            }}
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                          />
                          {/* </div> */}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='events-card'>
                          <div className='card-header'>
                            <span className='accent'></span>
                            <h3>Events</h3>
                          </div>
                          {this.getEventsForCurrentMonth().length > 0 ? (
                            this.getEventsForCurrentMonth().map((eve, ind) => {
                              const eventSlug = `${generateSlug(eve.title)}-${eve.id}`;
                              return (
                                <div
                                  className='event-item'
                                  key={eve.id || ind}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    const el = eve.resource || {};
                                    const eventData = {
                                      id: eve.id,
                                      slug: eventSlug,
                                      title: eve.title,
                                      description: eve.description || "",
                                      category: eve.category || "General",
                                      tag: eve.category || "EVENT",
                                      date: eve.start,
                                      endDate: "",
                                      time: eve.time || "",
                                      location: eve.location || "",
                                      allDay: eve.allDay || false,
                                      heroImage: eve.heroImage || "",
                                      link: el.Link || "",
                                      content: eve.description
                                        ? [
                                            {
                                              type: "text" as const,
                                              content: eve.description,
                                            },
                                          ]
                                        : [],
                                    };
                                    try {
                                      localStorage.setItem(
                                        "eventDetail_" + eventSlug,
                                        JSON.stringify(eventData),
                                      );
                                    } catch (e) {}
                                    this.setState(
                                      {
                                        eventDetail: eventData,
                                        eventDetailLoading: false,
                                        eventDetailError: null,
                                      },
                                      () => {
                                        this.navigate("/events", eventSlug);
                                      },
                                    );
                                  }}
                                >
                                  <h4>{eve.title}</h4>
                                  <p>
                                    {moment(eve.start).format(
                                      "dddd, MMMM DD, YYYY",
                                    )}
                                  </p>
                                </div>
                              );
                            })
                          ) : (
                            <div className='event-item'>
                              <p>
                                No events for{" "}
                                {moment(this.state.calendarDate).format(
                                  "MMMM YYYY",
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className='celebration-card'>
                          <div className='card-header'>
                            <span className='accent'></span>
                            <h3>Birthdays &amp; Anniversaries</h3>
                          </div>
                          {this.state.birthdayData.length > 0 &&
                            this.state.birthdayData.map((el, ind) => {
                              return (
                                <div className='item'>
                                  <div className='badge birthday'>
                                    {" "}
                                    {el.CelebrationType === "Birthday" ? (
                                      <div className='bgicon'></div>
                                    ) : el.CelebrationType ===
                                      "Employee Anniversary" ? (
                                      <div className='bgicon1'>
                                        {el.IconText}
                                      </div>
                                    ) : (
                                      <div className='bgicon2'>
                                        {el.IconText}
                                      </div>
                                    )}{" "}
                                  </div>
                                  <div className='content'>
                                    <h4>{el.Title}</h4>
                                    <p>
                                      {moment(el.Date).format(
                                        "dddd MMMM DD, YYYY",
                                      )}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          <div style={{ textAlign: "center" }}>
                            <button
                              className='see-more'
                              onClick={() => {
                                this.setState({
                                  bigBirthdayShow: true,
                                  vivaEngageShow: true,
                                });
                              }}
                            >
                              See More
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {/* <div className="events-card">
                  <div className="card-header">
                    <span className="accent"></span>
                    <h3>Events</h3>
                  </div>
                  {this.state.sAllEvents.length > 0 &&
                    this.state.sAllEvents.map((eve, ind) => {
                      return (
                        <div className="event-item">
                          <h4>{eve.Title}</h4>
                          <p>{moment(eve.startDate1).format("dddd MMMM DD, YYYY")}</p>
                        </div>
                      );
                    })}

                  <div className="event-item">
                    <h4>Beta Team Meeeting</h4>
                    <p>Friday, November 21, 2025</p>
                  </div>

                  <div className="event-item">
                    <h4>Beta Team Meeeting</h4>
                    <p>Friday, November 21, 2025</p>
                  </div>

                  <div className="event-item">
                    <h4>Beta Team Meeeting</h4>
                    <p>Friday, November 21, 2025</p>
                  </div>

                  <div className="event-item">
                    <h4>Beta Team Meeeting</h4>
                    <p>Friday, November 21, 2025</p>
                  </div>

                  <div className="event-item">
                    <h4>Beta Team Meeeting</h4>
                    <p>Friday, November 21, 2025</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button
                      className="see-more"
                      onClick={() => {
                        this.setState({ bigEventsShow: true, vivaEngageShow: true });
                      }}
                    >
                      See More
                    </button>
                  </div>
                </div>
                <div className="celebration-card">
                  <div className="card-header">
                    <span className="accent"></span>
                    <h3>Birthdays &amp; Anniversaries</h3>
                  </div>
                  {this.state.birthdayData.length > 0 &&
                    this.state.birthdayData.map((el, ind) => {
                      return (
                        <div className="item">
                          <div className="badge birthday"> {el.CelebrationType === "Birthday" ? <div className="bgicon"></div> : el.CelebrationType === "Employee Anniversary" ? <div className="bgicon1">{el.IconText}</div> : <div className="bgicon2">{el.IconText}</div>} </div>
                          <div className="content">
                            <h4>{el.Title}</h4>
                            <p>{moment(el.Date).format("dddd MMMM DD, YYYY")}</p>
                          </div>
                        </div>
                      );
                    })}
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="see-more"
                      onClick={() => {
                        this.setState({ bigBirthdayShow: true, vivaEngageShow: true });
                      }}
                    >
                      See More
                    </button>
                  </div>
                </div> */}
                  </div>
                </div>
              </>
            )}
          </PivotItem>
          <PivotItem
            itemKey='VIDEOS'
            headerText={"VIDEOS"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  this.navigate("/videos");
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontSize: "20px",
                  cursor: "pointer",
                  background:
                    this.state.activePivotKey === "VIDEOS"
                      ? "#FFFFFF33"
                      : "transparent",
                  padding: "0px 8px",
                }}
              >
                VIDEOS
              </div>
            )}
          >
            {this.state.currentItemId &&
            this.state.currentRoute === "/videos" ? (
              // Video Detail View
              <div
                style={{
                  minHeight: "100vh",
                  background: "none",
                  marginTop: "2rem",
                }}
              >
                {this.state.videoDetailLoading && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "400px",
                      padding: "3rem 1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        border: "4px solid #f0f0f0",
                        borderTopColor: "#ff6b35",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "1rem",
                        color: "#666",
                      }}
                    >
                      Loading video...
                    </p>
                  </div>
                )}

                {this.state.videoDetailError && (
                  <div
                    style={{
                      maxWidth: "600px",
                      margin: "0 auto",
                      padding: "4rem 1rem",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "2rem",
                        color: "#1a1a1a",
                        margin: "0 0 1rem 0",
                      }}
                    >
                      Video Not Found
                    </h1>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        color: "#666",
                        margin: "0 0 2rem 0",
                        lineHeight: "1.6",
                      }}
                    >
                      The video you're looking for doesn't exist or has been
                      removed.
                    </p>
                    <button
                      onClick={() => this.navigate("/videos")}
                      style={{
                        padding: "0.875rem 1.5rem",
                        background: "#ff6b35",
                        border: "none",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Back to Videos
                    </button>
                  </div>
                )}

                {this.state.videoDetail && !this.state.videoDetailLoading && (
                  <article style={{ position: "relative" }}>
                    <img
                      src={require("../assets/logo.png")}
                      className='logo'
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    />
                    <div
                      style={{
                        marginBottom: "1.5rem",
                        maxWidth: "calc(100% - 160px)",
                        minHeight: "80px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#999",
                          margin: "0 0 0.5rem 0",
                          fontFamily:
                            "'Helvetica Neue LT Pro', 'Helvetica Neue', sans-serif",
                          fontWeight: 400,
                          lineHeight: "140%",
                          letterSpacing: "0%",
                          verticalAlign: "middle",
                        }}
                      >
                        <a
                          onClick={() => this.navigate("/videos")}
                          style={{
                            color: "#999",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#fff")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#999")
                          }
                        >
                          Videos
                        </a>{" "}
                        / {this.state.videoDetail.title}
                      </p>
                    </div>
                    <div
                      style={{
                        marginLeft: "15%",
                        marginRight: "15%",
                        marginTop: "2rem",
                      }}
                    >
                      {/* Video Player */}
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <video
                          controls
                          width='100%'
                          style={{ borderRadius: "10px" }}
                        >
                          <source
                            src={`${this.props.siteUrl}/${this.state.videoDetail.fileRef}`}
                            type='video/mp4'
                          />
                          Your browser does not support HTML5 video.
                        </video>
                      </div>

                      {/* Time / Date */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          fontSize: "0.875rem",
                          color: "#d0d0d0",
                          marginTop: "1.5rem",
                          marginBottom: "2rem",
                          padding: "0 1rem 1rem",
                        }}
                      >
                        {this.state.videoDetail.modified && (
                          <span>
                            {new Date(
                              this.state.videoDetail.modified,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        )}
                        {this.state.videoDetail.time && (
                          <>
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>
                              •
                            </span>
                            <span>{this.state.videoDetail.time}</span>
                          </>
                        )}
                      </div>
                      {/* Page Header - Title */}
                      <h1
                        style={{
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.1,
                          textTransform: "uppercase",
                          padding: "0 1rem 1rem",
                        }}
                      >
                        {this.state.videoDetail.title}
                      </h1>
                      {/* Description */}
                      {this.state.videoDetail.description && (
                        <div style={{ background: "none" }}>
                          <div
                            style={{
                              margin: "0 auto",
                              padding: "0 1rem 2rem",
                            }}
                          >
                            <div
                              className='announcement-detail-content'
                              style={{ marginBottom: "1rem" }}
                              dangerouslySetInnerHTML={{
                                __html: this.state.videoDetail.description,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Details */}
                      {this.state.videoDetail.details && (
                        <div style={{ background: "none" }}>
                          <div
                            style={{
                              margin: "0 auto",
                              padding: "0 1rem 4rem",
                            }}
                          >
                            <div
                              className='announcement-detail-content'
                              style={{ marginBottom: "2rem" }}
                              dangerouslySetInnerHTML={{
                                __html: this.state.videoDetail.details,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Back Button */}
                      <div
                        style={{
                          marginTop: "4rem",
                          paddingTop: "2rem",
                          borderTop: "1px solid #3a3a3a",
                        }}
                      >
                        <button
                          onClick={() => window.history.back()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.875rem 1.5rem",
                            background: "transparent",
                            border: "2px solid #ff6b35",
                            borderRadius: "8px",
                            color: "#ff6b35",
                            fontSize: "1rem",
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          ← Back
                        </button>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            ) : (
              <>
                <div>
                  <div
                    className='Home-banner'
                    style={{ backgroundImage: "url(" + ImageLink2 + ")" }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))",
                        height: "300px",
                      }}
                    >
                      <div className='container Home-banner-wrapper'>
                        <div className='ms-Grid-row'>
                          <div
                            className='ms-Grid-col ms-sm12 ms-md12'
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <div className='text-center w-50'>
                              <h1 className='Home-banner-title'>
                                {this.props.videosTitle}
                              </h1>
                              <p className='Home-banner-description'>
                                {this.props.videosDescription}
                              </p>
                              {/* {this.props.search ? ( */}
                              <div
                                className='ms-Grid-row'
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div className='ms-Grid-col ms-sm8 ms-md4'>
                                  <SearchBox
                                    id='chatSearchbtn'
                                    placeholder='Search'
                                    iconProps={filterIcon}
                                    value={this.state.videosSearchText}
                                    onChange={(event) => {
                                      this.videosSearchUsers(
                                        event.target["value"],
                                      );
                                    }}
                                    onClear={() => {
                                      this.setState({ videosSearchText: "" });
                                      this.videosSearchUsers(""); // Clear search results
                                    }}
                                  />
                                </div>
                                <div className='ms-Grid-col ms-sm2 ms-md1'>
                                  <span>
                                    {" "}
                                    <button className='srchbutton'>
                                      Search
                                    </button>
                                  </span>
                                </div>
                              </div>
                              {/* ) : (
                            <></>
                          )} */}
                            </div>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className='homecontainer'>
                  <div className='container'>
                    <main className='content'>
                      <div className='Announcement'>
                        <div className='section-header'></div>

                        <div className='announcements-grid'>
                          {this.state.videosDetails.length > 0 &&
                            this.state.videosDetails.map((video, ind) => {
                              const videoSlug = generateSlug(
                                video.FileLeafRef.replace(/\.[^/.]+$/, ""),
                              );
                              return (
                                <a
                                  href={`#/videos/${videoSlug}`}
                                  className='card'
                                  key={video.FileLeafRef}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // Save video data to localStorage for persistence on refresh
                                    try {
                                      const videoData = {
                                        id: video.ID || video.FileLeafRef,
                                        slug: videoSlug,
                                        title: video.FileLeafRef.replace(
                                          /\.[^/.]+$/,
                                          "",
                                        ),
                                        description:
                                          video.VideoDescription || "",
                                        time: video.Time || "",
                                        fileRef: video.FileRef,
                                        fileName: video.FileLeafRef,
                                        modified: video.Modified,
                                      };
                                      localStorage.setItem(
                                        "videoDetail_" + videoSlug,
                                        JSON.stringify(videoData),
                                      );
                                    } catch (e) {}
                                    this.navigate("/videos", videoSlug);
                                  }}
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  <video controls width='100%' muted preload="none">
                                    <source
                                      src={`${this.props.siteUrl}/${video.FileRef}`}
                                      type='video/mp4'
                                    />
                                    Your browser does not support HTML5 video.
                                  </video>
                                  <h3 className='videoscardheader'>
                                    {video.FileLeafRef}
                                  </h3>
                                  <p>{video.VideoDescription}</p>
                                  <span className='time'>{video.Time}</span>
                                </a>
                              );
                            })}
                        </div>

                        {this.state.videosItems.length > viewCount && (
                          <Pagination
                            currentPage={this.state.videosCurrentPage}
                            totalPages={this.state.videosTotalPages}
                            onChange={(page) => {
                              this.setState({ videosCurrentPage: page });
                              var startCount = (page - 1) * viewCount;
                              var endCount = page * viewCount;
                              let pagedArr = this.state.videosItems.slice(
                                startCount,
                                endCount,
                              );
                              this.mapPageData2(pagedArr);
                            }}
                          />
                        )}
                      </div>
                    </main>
                  </div>
                </section>
              </>
            )}
          </PivotItem>
          {/* {Object.keys(this.state.news).map((category) => {
            const item = this.state.news[category];

            const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Image ? JSON.parse(item.Image).serverRelativeUrl : require("../assets/news.png");

            return (
              <PivotItem
                key={category}
                headerText={category}
                headerButtonProps={{
                  "data-title": category,
                }}
              >
                <video src="https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4" controls style={{ width: "100%", borderRadius: "10px" }} playsInline muted autoPlay className="homevideo"></video>
              </PivotItem>
            );
          })} */}
        </Pivot>

        {/* <div className="container">
          <aside className="sidebar">
            <div className="QuickMob">
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2>Quick Links</h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {Object.keys(this.state.quickLinks).map((category) => (
                      <div className="menu-section" key={category}>
                        <h4>{category}</h4>

                        {this.state.quickLinks[category].map((item) => {
                          const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

                          return (
                            <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
                              <span>
                                <img src={imageURL} />
                              </span>
                              {item.Title}
                            </a>
                          );
                        })}
                      </div>
                    ))}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="QuickDesk">
              <h2>Quick Links</h2>

              {Object.keys(this.state.quickLinks).map((category) => (
                <div className="menu-section" key={category}>
                  <h4>{category}</h4>

                  {this.state.quickLinks[category].map((item) => {
                    const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

                    return (
                      <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
                        <span>
                          <img src={imageURL} />
                        </span>
                        {item.Title}
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </aside>

          <main className="content">
            <div className="Announcement">
              <div className="section-header">
                <h2>Announcements</h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Stop default link behavior
                    window.location.href = `${window.location.origin}/sites/TheSource/SitePages/Announcement-Detail-Page.aspx`;
                  }}
                  className="view-all"
                >
                  View All →
                </a>
              </div>

              <div className="card-row ">
                {this.state.announcementData.length > 0 &&
                  this.state.announcementData.map((ele, ind) => {
                    let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Announcement.jpg`);
                    return (
                      <a href={ele.Link ? ele.Link.Url : "#"} className="card" target="_blank" data-interception="off" style={{ textDecoration: "none", color: "white" }}>
                        <div className="tag">{ele.Category}</div>
                        <img src={imageURL} alt="" />
                        <h3>{ele.Title}</h3>
                        <p>{ele.Description}</p>
                        <span className="time">{ele.Time}</span>
                      </a>
                    );
                  })}
              </div>
            </div>

            <div className="Announcement">
              <div className="section-header">
                <h2>Company Events</h2>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Stop default link behavior
                    window.location.href = `${window.location.origin}/sites/TheSource/SitePages/Company-Events-Detail-Page.aspx`;
                  }}
                  className="view-all"
                >
                  View All →
                </a>
              </div>

              <div className="card-row events-row">
                {this.state.companyevents.length > 0 &&
                  this.state.companyevents.map((el, ind) => {
                    let imageURL = el.AttachmentFiles.length > 0 ? el.AttachmentFiles[0].ServerRelativeUrl : el.Image ? JSON.parse(el.Image).serverRelativeUrl : require(`../assets/Event.jpg`);
                    const eventSlug = `${generateSlug(el.Title)}-${el.ID}`;
                    return (
                      <a
                        href={`#/events/${eventSlug}`}
                        className="card"
                        onClick={(e) => {
                          e.preventDefault();
                          const eventData = {
                            id: el.ID,
                            slug: eventSlug,
                            title: el.Title,
                            description: el.Description || "",
                            category: el.Category || "General",
                            tag: el.Category || "EVENT",
                            date: el.Date || el.Created,
                            endDate: "",
                            time: el.Time || "",
                            location: "",
                            allDay: false,
                            heroImage: imageURL,
                            link: el.Link,
                            content: (el.Details || el.Description)
                              ? [
                                  {
                                    type: "text" as const,
                                    content: el.Details || el.Description,
                                  },
                                ]
                              : [],
                          };
                          try { localStorage.setItem("eventDetail_" + eventSlug, JSON.stringify(eventData)); } catch (e) {}
                          this.setState(
                            {
                              eventDetail: eventData,
                              eventDetailLoading: false,
                              eventDetailError: null,
                            },
                            () => {
                              this.navigate("/events", eventSlug);
                            },
                          );
                        }}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <img src={imageURL} alt="" />
                        <div className="event-card-info">
                          <div className="tag event-holiday">{el.Category}</div>
                          <h3>{el.Title}</h3>
                          <p>{moment(el.Date || el.Created).format("dddd MMMM DD, YYYY")}</p>
                          <span className="time">{el.Time || "All-day"}</span>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
            <div className="dashboard">
              <div className="left-section">
                <div className="section-header">
                  <h3>Learn More About Us</h3>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Stop default link behavior
                      window.location.href = `${window.location.origin}/sites/TheSource/SitePages/Learn-More-About-Us-Detail-Page.aspx`;
                    }}
                    className="view-all"
                  >
                    View All →
                  </a>
                </div>

                <div className="card-grid">
                  {this.state.aboutUS.length > 0 &&
                    this.state.aboutUS.map((ele, ind) => {
                      const cardClass = ind === 1 ? "info-card orange-card" : "info-card dark-card";
                      let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Event.jpg`);

                      return (
                        <a href={ele.Link ? ele.Link.Url : "#"} className={cardClass} style={{ textDecoration: "none" }} target="_blank" data-interception="off">
                          <img src={imageURL} />
                        </a>
                      );
                    })}
                </div>
              </div>

              <div className="right-section">
                <div className="section-header">
                  <h3>Birthdays and Work Anniversaries</h3>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Stop default link behavior
                      window.location.href = `${window.location.origin}/sites/TheSource/SitePages/Birthday-Work-Anniversary-Detail-Page.aspx`;
                    }}
                    className="view-all"
                  >
                    View All →
                  </a>
                </div>

                {this.state.celebrationData.length > 0 &&
                  this.state.celebrationData.map((ele, ind) => {
                    return (
                      <div className="event">
                        <div className="date-box">
                          <div>{moment(ele.Date).format("ddd")}</div>
                          <div className="day">{moment(ele.Date).format("DD")}</div>
                          <div>{moment(ele.Date).format("MMM")}</div>
                        </div>
                        <div className="event-info">
                          <h4>{ele.Title}</h4>
                          <p>{moment(ele.Date).format("dddd MMMM DD, YYYY")}</p>
                          <a href="#" target="_blank" data-interception="off">
                            {ele.CelebrationType}
                          </a>
                        </div>
                        <div className="tag">{ele.CelebrationType}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </main>
        </div> */}
      </section>
    );

    // return (
    //   <section className="homecontainer">
    //     <header className="top-bar">
    //       <div className="left">
    //         <div className="date">{moment(new Date()).format("dddd MMMM DD, YYYY")}</div>
    //         <h1 className="greeting">
    //           {this.getGreeting()}, {this.props.userDisplayName.split(" ")[0]}
    //         </h1>

    //         {/* <nav className="nav">
    //             <a className="active">Dashboard</a>
    //             <a>News/Announcements</a>
    //             <a>Company Events</a>
    //         </nav> */}
    //       </div>

    //       <div className="right">
    //         <img src={require("../assets/logo.png")} className="logo" />
    //       </div>
    //     </header>

    //     <Pivot aria-label="Banner Pivot">
    //       <PivotItem
    //         key="DASHBOARD"
    //         headerText="DASHBOARD"
    //         onRenderItemLink={() => (
    //           <div
    //             // onClick={() => {
    //             //   window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource";
    //             // }}
    //             style={{
    //               textDecoration: "none",
    //               fontWeight: "unset",
    //               textTransform: "uppercase",
    //               color: "#ffffff82",
    //               fontSize: "20px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             DASHBOARD
    //           </div>
    //         )}
    //       >
    //         <video src="https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4" controls style={{ width: "100%", borderRadius: "10px" }} playsInline muted autoPlay className="homevideo" />
    //         <div className="container">
    //           <aside className="sidebar">
    //             <div className="QuickMob">
    //               <Accordion allowZeroExpanded>
    //                 <AccordionItem>
    //                   <AccordionItemHeading>
    //                     <AccordionItemButton>
    //                       <h2>Quick Links</h2>
    //                     </AccordionItemButton>
    //                   </AccordionItemHeading>
    //                   <AccordionItemPanel>
    //                     {Object.keys(this.state.quickLinks).map((category) => (
    //                       <div className="menu-section" key={category}>
    //                         <h4>{category}</h4>

    //                         {this.state.quickLinks[category].map((item) => {
    //                           const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

    //                           return (
    //                             <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
    //                               <span>
    //                                 <img src={imageURL} />
    //                               </span>
    //                               {item.Title}
    //                             </a>
    //                           );
    //                         })}
    //                       </div>
    //                     ))}
    //                   </AccordionItemPanel>
    //                 </AccordionItem>
    //               </Accordion>
    //             </div>

    //             <div className="QuickDesk">
    //               <h2>Quick Links</h2>

    //               {Object.keys(this.state.quickLinks).map((category) => (
    //                 <div className="menu-section" key={category}>
    //                   <h4>{category}</h4>

    //                   {this.state.quickLinks[category].map((item) => {
    //                     const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

    //                     return (
    //                       <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
    //                         <span>
    //                           <img src={imageURL} />
    //                         </span>
    //                         {item.Title}
    //                       </a>
    //                     );
    //                   })}
    //                 </div>
    //               ))}
    //             </div>
    //           </aside>

    //           <main className="content">
    //             <div className="Announcement">
    //               <div className="section-header">
    //                 <h2>Announcements</h2>
    //                 <a
    //                   href="#"
    //                   onClick={(e) => {
    //                     e.preventDefault(); // Stop default link behavior
    //                     window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Announcement-Detail-Page.aspx";
    //                   }}
    //                   className="view-all"
    //                 >
    //                   View All →
    //                 </a>
    //               </div>

    //               <div className="card-row ">
    //                 {this.state.announcementData.length > 0 &&
    //                   this.state.announcementData.map((ele, ind) => {
    //                     let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Announcement.jpg`);
    //                     return (
    //                       <a href={ele.Link ? ele.Link.Url : "#"} className="card" target="_blank" data-interception="off" style={{ textDecoration: "none", color: "white" }}>
    //                         <div className="tag">{ele.Category}</div>
    //                         <img src={imageURL} alt="" />
    //                         <h3>{ele.Title}</h3>
    //                         <p>{ele.Description}</p>
    //                         <span className="time">{ele.Time}</span>
    //                       </a>
    //                     );
    //                   })}

    //                 {/* <div className="card">
    //             <div className="tag">Announcement</div>
    //             <img src="https://images.pexels.com/photos/600197/pexels-photo-600197.jpeg" alt="" />
    //             <h3>Q4 Safety Performance</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
    //             <span className="time">6 hours ago</span>
    //           </div>

    //           <div className="card">
    //             <div className="tag">Announcement</div>
    //             <img src="https://images.pexels.com/photos/600197/pexels-photo-600197.jpeg" alt="" />
    //             <h3>Q4 Safety Performance</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
    //             <span className="time">6 hours ago</span>
    //           </div>

    //           <div className="card">
    //             <div className="tag">Announcement</div>
    //             <img src="https://images.pexels.com/photos/600197/pexels-photo-600197.jpeg" alt="" />
    //             <h3>Q4 Safety Performance</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
    //             <span className="time">6 hours ago</span>
    //           </div> */}
    //               </div>
    //             </div>

    //             <div className="Announcement">
    //               <div className="section-header">
    //                 <h2>Company Events</h2>
    //                 <a
    //                   href="#"
    //                   onClick={(e) => {
    //                     e.preventDefault(); // Stop default link behavior
    //                     window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Company-Events-Detail-Page.aspx";
    //                   }}
    //                   className="view-all"
    //                 >
    //                   View All →
    //                 </a>
    //               </div>

    //               <div className="card-row events-row">
    //                 {this.state.companyevents.length > 0 &&
    //                   this.state.companyevents.map((el, ind) => {
    //                     let imageURL = el.AttachmentFiles.length > 0 ? el.AttachmentFiles[0].ServerRelativeUrl : el.Image ? JSON.parse(el.Image).serverRelativeUrl : require(`../assets/Event.jpg`);
    //                     return (
    //                       <a href={el.Link ? el.Link.Url : "#"} target="_blank" data-interception="off" className="card" style={{ textDecoration: "none", color: "white" }}>
    //                         <div className="tag event-holiday">{el.Category}</div>
    //                         <img src={imageURL} alt="" />
    //                         <h3>{el.Title}</h3>
    //                         <p>{moment(el.Created).format("dddd MMMM DD, YYYY")}</p>
    //                         <span className="time">{el.Time}</span>
    //                       </a>
    //                     );
    //                   })}
    //                 {/* <div className="card">
    //             <div className="tag event-holiday">Holiday</div>
    //             <img src="https://images.pexels.com/photos/1094784/pexels-photo-1094784.jpeg" alt="" />
    //             <h3>Veterans Day</h3>
    //             <p>Friday November 21, 2025</p>
    //             <span className="time">All-day</span>
    //           </div>

    //           <div className="card">
    //             <div className="tag event-meeting">Meeting</div>
    //             <img src="https://images.pexels.com/photos/1094784/pexels-photo-1094784.jpeg" alt="" />
    //             <h3>Safety Committee Meeting I</h3>
    //             <p>Friday November 21, 2025</p>
    //             <span className="time">3:00 PM – 4:00 PM</span>
    //           </div>

    //           <div className="card">
    //             <div className="tag event-meeting">Meeting</div>
    //             <img src="https://images.pexels.com/photos/1094784/pexels-photo-1094784.jpeg" alt="" />
    //             <h3>Safety Committee Meeting II</h3>
    //             <p>Friday November 21, 2025</p>
    //             <span className="time">3:00 PM – 4:00 PM</span>
    //           </div> */}
    //               </div>
    //             </div>
    //             <div className="dashboard">
    //               <div className="left-section">
    //                 <div className="section-header">
    //                   <h3>Learn More About Us</h3>
    //                   <a
    //                     href="#"
    //                     onClick={(e) => {
    //                       e.preventDefault(); // Stop default link behavior
    //                       window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Learn-More-About-Us-Detail-Page.aspx";
    //                     }}
    //                     className="view-all"
    //                   >
    //                     View All →
    //                   </a>
    //                 </div>

    //                 <div className="card-grid">
    //                   {this.state.aboutUS.length > 0 &&
    //                     this.state.aboutUS.map((ele, ind) => {
    //                       const cardClass = ind === 1 ? "info-card orange-card" : "info-card dark-card";
    //                       let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Event.jpg`);

    //                       return (
    //                         <a href={ele.Link ? ele.Link.Url : "#"} className={cardClass} style={{ textDecoration: "none" }} target="_blank" data-interception="off">
    //                           {/* {ele.Title} */}
    //                           <img src={imageURL} />
    //                         </a>
    //                       );
    //                     })}
    //                   {/* <div className="info-card dark-card">Our Leadership</div>

    //               <div className="info-card orange-card">Our People</div>

    //               <div className="info-card dark-card">Our Vision</div>

    //               <div className="info-card dark-card">Our Culture</div> */}
    //                 </div>
    //               </div>

    //               <div className="right-section">
    //                 <div className="section-header">
    //                   <h3>Birthdays and Work Anniversaries</h3>
    //                   <a
    //                     href="#"
    //                     onClick={(e) => {
    //                       e.preventDefault(); // Stop default link behavior
    //                       window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Birthday-Work-Anniversary-Detail-Page.aspx";
    //                     }}
    //                     className="view-all"
    //                   >
    //                     View All →
    //                   </a>
    //                 </div>
    //                 {/* <div className="section-header">
    //               <h3>Quiz</h3>
    //               <span>View All →</span>
    //             </div>
    //             {this.state.quizData.length > 0 &&
    //               this.state.quizData.map((ele, ind) => {
    //                 const qId = ele.ID;
    //                 const alreadyAnswered = !!this.state.answers[qId];
    //                 return (
    //                   <>
    //                     <div className="quiz-question">{ele.Title}</div>

    //                     <div className="quiz-options">
    //                       {ele.Options.length > 0 &&
    //                         ele.Options.map((el, idx) => {
    //                           const isSelected = this.state.answers[qId] === el;

    //                           return (
    //                             <button key={idx} className={`option ${isSelected ? "option-selected" : "unselect"}`} disabled={alreadyAnswered} onClick={() => this.onSelectOption(ele, idx, el)}>
    //                               {labels[idx]}) {el}
    //                             </button>
    //                           );
    //                         })}
    //                     </div>
    //                   </>
    //                 );
    //               })} */}

    //                 {this.state.celebrationData.length > 0 &&
    //                   this.state.celebrationData.map((ele, ind) => {
    //                     return (
    //                       <div className="event">
    //                         <div className="date-box">
    //                           <div>{moment(ele.Date).format("ddd")}</div>
    //                           <div className="day">{moment(ele.Date).format("DD")}</div>
    //                           <div>{moment(ele.Date).format("MMM")}</div>
    //                         </div>
    //                         <div className="event-info">
    //                           <h4>{ele.Title}</h4>
    //                           <p>{moment(ele.Date).format("dddd MMMM DD, YYYY")}</p>
    //                           <a href="#" target="_blank" data-interception="off">
    //                             {ele.CelebrationType}
    //                           </a>
    //                         </div>
    //                         <div className="tag">{ele.CelebrationType}</div>
    //                       </div>
    //                     );
    //                   })}

    //                 {/* <div className="event">
    //               <div className="date-box">
    //                 <div>FRI</div>
    //                 <div className="day">21</div>
    //                 <div>NOV</div>
    //               </div>
    //               <div className="event-info">
    //                 <h4>John's Birthday</h4>
    //                 <p>Friday November 21, 2025</p>
    //                 <a href="#">Birthday</a>
    //               </div>
    //               <div className="tag">Birthday</div>
    //             </div>

    //             <div className="event">
    //               <div className="date-box">
    //                 <div>FRI</div>
    //                 <div className="day">21</div>
    //                 <div>NOV</div>
    //               </div>
    //               <div className="event-info">
    //                 <h4>10th Alpha Team Anniversary</h4>
    //                 <p>Friday November 21, 2025</p>
    //                 <a href="#">Anniversary</a>
    //               </div>
    //               <div className="tag">Anniversary</div>
    //             </div>

    //             <div className="event">
    //               <div className="date-box">
    //                 <div>FRI</div>
    //                 <div className="day">21</div>
    //                 <div>NOV</div>
    //               </div>
    //               <div className="event-info">
    //                 <h4>Sarah's Birthday</h4>
    //                 <p>Friday November 21, 2025</p>
    //                 <a href="#">Birthday</a>
    //               </div>
    //               <div className="tag">Birthday</div>
    //             </div> */}
    //               </div>
    //             </div>
    //           </main>
    //         </div>
    //       </PivotItem>

    //       <PivotItem
    //         key={"NEWS/ANNOUNCEMENTS"}
    //         headerText={"NEWS/ANNOUNCEMENTS"}
    //         onRenderItemLink={() => (
    //           <div
    //             // onClick={() => {
    //             //   window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Announcement-Detail-Page.aspx";
    //             // }}
    //             style={{
    //               textDecoration: "none",
    //               fontWeight: "unset",
    //               textTransform: "uppercase",
    //               color: "#ffffff82",
    //               fontSize: "20px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             NEWS/ANNOUNCEMENTS
    //           </div>
    //         )}
    //       >
    //         <div>
    //           <div className="Home-banner" style={{ backgroundImage: "url(" + ImageLink + ")" }}>
    //             <div style={{ background: "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))", height: "400px" }}>
    //               <div className="container Home-banner-wrapper">
    //                 <div className="ms-Grid-row">
    //                   <div className="ms-Grid-col ms-sm12 ms-md12">
    //                     <div className="text-center w-50">
    //                       <h1 className="Home-banner-title">{this.props.announcementTitle}</h1>
    //                       <p className="Home-banner-description">{this.props.announcementDescription}</p>
    //                       {/* {this.props.search ? ( */}
    //                       <div className="ms-Grid-row" style={{ display: "flex", justifyContent: "center" }}>
    //                         <div className="ms-Grid-col ms-sm12 ms-md4">
    //                           <SearchBox
    //                             id="chatSearchbtn"
    //                             placeholder="Search"
    //                             iconProps={filterIcon}
    //                             value={this.state.searchText}
    //                             onChange={(event) => {
    //                               this.searchUsers(event.target["value"]);
    //                             }}
    //                           />
    //                         </div>
    //                         <div className="ms-Grid-col ms-sm2 ms-md1">
    //                           <span>
    //                             {" "}
    //                             <button className="srchbutton">Search</button>
    //                           </span>
    //                         </div>
    //                       </div>
    //                       {/* ) : (
    //                         <></>
    //                       )} */}
    //                     </div>
    //                     <br />
    //                     <br />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <section className="homecontainer">
    //           <div className="container">
    //             <main className="content">
    //               <div className="Announcement">
    //                 <div className="section-header"></div>

    //                 <div className="card-row ">
    //                   {this.state.announcementDataall.length > 0 &&
    //                     this.state.announcementDataall.map((ele, ind) => {
    //                       let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Announcement.jpg`);
    //                       return (
    //                         <a href={ele.Link ? ele.Link.Url : "#"} className="card" target="_blank" data-interception="off" style={{ textDecoration: "none", color: "white" }}>
    //                           <div className="tag">{ele.Category}</div>
    //                           <img src={imageURL} alt="" />
    //                           <h3>{ele.Title}</h3>
    //                           <p>{ele.Description}</p>
    //                           <span className="time">{ele.Time}</span>
    //                         </a>
    //                       );
    //                     })}
    //                 </div>
    //               </div>
    //             </main>
    //           </div>
    //           {this.state.announcementDataall.length > 0 ? (
    //             <div className="ms-Grid-col ms-sm12 list-paging">
    //               <Pagination
    //                 currentPage={this.state.currentPage}
    //                 totalPages={this.state.totalPages}
    //                 onChange={(page) => this.pagination(page, this.state.items)}
    //                 limiter={3} // Optional - default value 3
    //               />
    //             </div>
    //           ) : (
    //             <div></div>
    //           )}
    //         </section>
    //       </PivotItem>
    //       <PivotItem
    //         key={"COMPANY EVENTS"}
    //         headerText={"COMPANY EVENTS"}
    //         onRenderItemLink={() => (
    //           <div
    //             // onClick={() => {
    //             //   window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Company-Events-Detail-Page.aspx";
    //             // }}
    //             style={{
    //               textDecoration: "none",
    //               fontWeight: "unset",
    //               textTransform: "uppercase",
    //               color: "#ffffff82",
    //               fontSize: "20px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             COMPANY EVENTS
    //           </div>
    //         )}
    //       >
    //         <div>
    //           <div className="Home-banner" style={{ backgroundImage: "url(" + ImageLink1 + ")" }}>
    //             <div style={{ background: "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))", height: "400px" }}>
    //               <div className="container Home-banner-wrapper">
    //                 <div className="ms-Grid-row">
    //                   <div className="ms-Grid-col ms-sm12 ms-md12">
    //                     <div className="text-center w-50">
    //                       <h1 className="Home-banner-title">{this.props.companyEventTitle}</h1>
    //                       <p className="Home-banner-description">{this.props.companyEventDescription}</p>
    //                     </div>
    //                     <br />
    //                     <br />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="ms-Grid-col ms-sm8 ms-md8"></div>
    //           <div className="ms-Grid-col ms-sm4 ms-md4">
    //             <div className="events-card">
    //               <div className="card-header">
    //                 <span className="accent"></span>
    //                 <h3>Events</h3>
    //               </div>
    //               {this.state.sAllEvents.length > 0 &&
    //                 this.state.sAllEvents.map((eve, ind) => {
    //                   return (
    //                     <div className="event-item">
    //                       <h4>{eve.Title}</h4>
    //                       <p>{moment(eve.startDate1).format("dddd MMMM DD, YYYY")}</p>
    //                     </div>
    //                   );
    //                 })}

    //               <div className="event-item">
    //                 <h4>Beta Team Meeeting</h4>
    //                 <p>Friday, November 21, 2025</p>
    //               </div>

    //               <div className="event-item">
    //                 <h4>Beta Team Meeeting</h4>
    //                 <p>Friday, November 21, 2025</p>
    //               </div>

    //               <div className="event-item">
    //                 <h4>Beta Team Meeeting</h4>
    //                 <p>Friday, November 21, 2025</p>
    //               </div>

    //               <div className="event-item">
    //                 <h4>Beta Team Meeeting</h4>
    //                 <p>Friday, November 21, 2025</p>
    //               </div>

    //               <div className="event-item">
    //                 <h4>Beta Team Meeeting</h4>
    //                 <p>Friday, November 21, 2025</p>
    //               </div>

    //               <div style={{ textAlign: "center" }}>
    //                 <button className="see-more">See More</button>
    //               </div>
    //             </div>
    //             <div className="celebration-card">
    //               <div className="card-header">
    //                 <span className="accent"></span>
    //                 <h3>Birthdays &amp; Anniversaries</h3>
    //               </div>
    //               {this.state.birthdayData.length > 0 &&
    //                 this.state.birthdayData.map((el, ind) => {
    //                   return (
    //                     <div className="item">
    //                       <div className="badge birthday"> {el.CelebrationType === "Birthday" ? <div className="bgicon"></div> : el.CelebrationType === "Employee Anniversary" ? <div className="bgicon1">{el.IconText}</div> : <div className="bgicon2">{el.IconText}</div>} </div>
    //                       <div className="content">
    //                         <h4>{el.Title}</h4>
    //                         <p>{moment(el.Date).format("dddd MMMM DD, YYYY")}</p>
    //                       </div>
    //                     </div>
    //                   );
    //                 })}
    //               <div style={{ textAlign: "center" }}>
    //                 <button className="see-more" onClick={() => (window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Birthday-Work-Anniversary-Detail-Page.aspx")}>
    //                   See More
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </PivotItem>
    //       {/* {Object.keys(this.state.news).map((category) => {
    //         const item = this.state.news[category];

    //         const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Image ? JSON.parse(item.Image).serverRelativeUrl : require("../assets/news.png");

    //         return (
    //           <PivotItem
    //             key={category}
    //             headerText={category}
    //             headerButtonProps={{
    //               "data-title": category,
    //             }}
    //           >
    //             <video src="https://cms.big-d.com/wp-content/uploads/2024/02/Projects.mp4" controls style={{ width: "100%", borderRadius: "10px" }} playsInline muted autoPlay className="homevideo"></video>
    //           </PivotItem>
    //         );
    //       })} */}
    //     </Pivot>

    //     {/* <div className="container">
    //       <aside className="sidebar">
    //         <div className="QuickMob">
    //           <Accordion allowZeroExpanded>
    //             <AccordionItem>
    //               <AccordionItemHeading>
    //                 <AccordionItemButton>
    //                   <h2>Quick Links</h2>
    //                 </AccordionItemButton>
    //               </AccordionItemHeading>
    //               <AccordionItemPanel>
    //                 {Object.keys(this.state.quickLinks).map((category) => (
    //                   <div className="menu-section" key={category}>
    //                     <h4>{category}</h4>

    //                     {this.state.quickLinks[category].map((item) => {
    //                       const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

    //                       return (
    //                         <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
    //                           <span>
    //                             <img src={imageURL} />
    //                           </span>
    //                           {item.Title}
    //                         </a>
    //                       );
    //                     })}
    //                   </div>
    //                 ))}
    //               </AccordionItemPanel>
    //             </AccordionItem>
    //           </Accordion>
    //         </div>

    //         <div className="QuickDesk">
    //           <h2>Quick Links</h2>

    //           {Object.keys(this.state.quickLinks).map((category) => (
    //             <div className="menu-section" key={category}>
    //               <h4>{category}</h4>

    //               {this.state.quickLinks[category].map((item) => {
    //                 const imageURL = item.AttachmentFiles && item.AttachmentFiles.length > 0 ? item.AttachmentFiles[0].ServerRelativeUrl : item.Icon ? JSON.parse(item.Icon).serverRelativeUrl : require("../assets/directorywhite.png");

    //                 return (
    //                   <a href={item.Link ? item.Link.Url : "#"} key={item.ID} target="_blank" data-interception="off">
    //                     <span>
    //                       <img src={imageURL} />
    //                     </span>
    //                     {item.Title}
    //                   </a>
    //                 );
    //               })}
    //             </div>
    //           ))}
    //         </div>
    //       </aside>

    //       <main className="content">
    //         <div className="Announcement">
    //           <div className="section-header">
    //             <h2>Announcements</h2>
    //             <a
    //               href="#"
    //               onClick={(e) => {
    //                 e.preventDefault(); // Stop default link behavior
    //                 window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Announcement-Detail-Page.aspx";
    //               }}
    //               className="view-all"
    //             >
    //               View All →
    //             </a>
    //           </div>

    //           <div className="card-row ">
    //             {this.state.announcementData.length > 0 &&
    //               this.state.announcementData.map((ele, ind) => {
    //                 let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Announcement.jpg`);
    //                 return (
    //                   <a href={ele.Link ? ele.Link.Url : "#"} className="card" target="_blank" data-interception="off" style={{ textDecoration: "none", color: "white" }}>
    //                     <div className="tag">{ele.Category}</div>
    //                     <img src={imageURL} alt="" />
    //                     <h3>{ele.Title}</h3>
    //                     <p>{ele.Description}</p>
    //                     <span className="time">{ele.Time}</span>
    //                   </a>
    //                 );
    //               })}
    //           </div>
    //         </div>

    //         <div className="Announcement">
    //           <div className="section-header">
    //             <h2>Company Events</h2>
    //             <a
    //               href="#"
    //               onClick={(e) => {
    //                 e.preventDefault(); // Stop default link behavior
    //                 window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Company-Events-Detail-Page.aspx";
    //               }}
    //               className="view-all"
    //             >
    //               View All →
    //             </a>
    //           </div>

    //           <div className="card-row events-row">
    //             {this.state.companyevents.length > 0 &&
    //               this.state.companyevents.map((el, ind) => {
    //                 let imageURL = el.AttachmentFiles.length > 0 ? el.AttachmentFiles[0].ServerRelativeUrl : el.Image ? JSON.parse(el.Image).serverRelativeUrl : require(`../assets/Event.jpg`);
    //                 return (
    //                   <a href={el.Link ? el.Link.Url : "#"} target="_blank" data-interception="off" className="card" style={{ textDecoration: "none", color: "white" }}>
    //                     <div className="tag event-holiday">{el.Category}</div>
    //                     <img src={imageURL} alt="" />
    //                     <h3>{el.Title}</h3>
    //                     <p>{moment(el.Created).format("dddd MMMM DD, YYYY")}</p>
    //                     <span className="time">{el.Time}</span>
    //                   </a>
    //                 );
    //               })}
    //           </div>
    //         </div>
    //         <div className="dashboard">
    //           <div className="left-section">
    //             <div className="section-header">
    //               <h3>Learn More About Us</h3>
    //               <a
    //                 href="#"
    //                 onClick={(e) => {
    //                   e.preventDefault(); // Stop default link behavior
    //                   window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Learn-More-About-Us-Detail-Page.aspx";
    //                 }}
    //                 className="view-all"
    //               >
    //                 View All →
    //               </a>
    //             </div>

    //             <div className="card-grid">
    //               {this.state.aboutUS.length > 0 &&
    //                 this.state.aboutUS.map((ele, ind) => {
    //                   const cardClass = ind === 1 ? "info-card orange-card" : "info-card dark-card";
    //                   let imageURL = ele.AttachmentFiles.length > 0 ? ele.AttachmentFiles[0].ServerRelativeUrl : ele.Image ? JSON.parse(ele.Image).serverRelativeUrl : require(`../assets/Event.jpg`);

    //                   return (
    //                     <a href={ele.Link ? ele.Link.Url : "#"} className={cardClass} style={{ textDecoration: "none" }} target="_blank" data-interception="off">
    //                       <img src={imageURL} />
    //                     </a>
    //                   );
    //                 })}
    //             </div>
    //           </div>

    //           <div className="right-section">
    //             <div className="section-header">
    //               <h3>Birthdays and Work Anniversaries</h3>
    //               <a
    //                 href="#"
    //                 onClick={(e) => {
    //                   e.preventDefault(); // Stop default link behavior
    //                   window.location.href = "https://mcalvain.sharepoint.com/sites/TheSource/SitePages/Birthday-Work-Anniversary-Detail-Page.aspx";
    //                 }}
    //                 className="view-all"
    //               >
    //                 View All →
    //               </a>
    //             </div>

    //             {this.state.celebrationData.length > 0 &&
    //               this.state.celebrationData.map((ele, ind) => {
    //                 return (
    //                   <div className="event">
    //                     <div className="date-box">
    //                       <div>{moment(ele.Date).format("ddd")}</div>
    //                       <div className="day">{moment(ele.Date).format("DD")}</div>
    //                       <div>{moment(ele.Date).format("MMM")}</div>
    //                     </div>
    //                     <div className="event-info">
    //                       <h4>{ele.Title}</h4>
    //                       <p>{moment(ele.Date).format("dddd MMMM DD, YYYY")}</p>
    //                       <a href="#" target="_blank" data-interception="off">
    //                         {ele.CelebrationType}
    //                       </a>
    //                     </div>
    //                     <div className="tag">{ele.CelebrationType}</div>
    //                   </div>
    //                 );
    //               })}
    //           </div>
    //         </div>
    //       </main>
    //     </div> */}
    //   </section>
    // );
  }

  // public componentDidMount = async () => {
  //   await this.getQuickLinksDetails();
  //   await this.getAnnouncements();
  //   await this.getCompanyEvents();
  //   await this.getAboutUsDetails();
  //   await this.getBannerNews();
  //   await this.getCelebrationData();
  //   await this.getQuizDetails();
  //   await this.loadExistingAnswers();
  //   await this.getAnnouncementsall();
  //   await this.getUpcomingEvents();
  //   await this.getBirthdayData();
  // };

  // Routing methods
  private parseRouteFromURL(): { route: string; itemId: string | null } {
    const hash = window.location.hash.substring(1); // Remove the # symbol

    if (!hash || hash === "/") {
      return { route: "/", itemId: null };
    }

    const parts = hash.split("/").filter((p) => p);

    if (parts.length === 0) {
      return { route: "/", itemId: null };
    }

    const route = "/" + parts[0];
    const itemId = parts.length > 1 ? parts[1] : null;

    return { route, itemId };
  }

  private navigate(route: string, itemId: string | null = null): void {
    const url = itemId ? `#${route}/${itemId}` : `#${route}`;

    // Update browser URL without reload
    window.history.pushState({ route, itemId }, "", url);

    // Update component state
    this.setState({ currentRoute: route, currentItemId: itemId }, () => {
      this.handleRouteChange();
    });
  }

  private handlePopState(event: PopStateEvent): void {
    const { route, itemId } = this.parseRouteFromURL();

    // Handle calendar back button
    if (route !== "/events" && this.state.calendarShow) {
      this.setState({ calendarShow: false });
    }

    this.setState({ currentRoute: route, currentItemId: itemId }, () => {
      this.handleRouteChange();
    });
  }

  private handleRouteChange(): void {
    const { currentRoute, currentItemId } = this.state;

    // Map routes to pivot keys
    switch (currentRoute) {
      case "/":
        this.setState({ activePivotKey: "THESOURCE", calendarShow: false });
        break;
      case "/announcements":
        this.setState({ activePivotKey: "ANNOUNCEMENTS" });
        if (currentItemId) {
          this.loadAnnouncementDetail(currentItemId);
        } else {
          this.setState({
            announcementDetail: null,
            announcementDetailLoading: false,
            announcementDetailError: null,
          });
        }
        break;
      case "/events":
        this.setState({
          activePivotKey: "COMPANYEVENTS",
          bigBirthdayShow: false,
          bigEventsShow: false,
          vivaEngageShow: false,
          calendarShow: false,
        });
        if (currentItemId) {
          // Only fetch from API if eventDetail isn't already set (e.g. direct URL access)
          if (
            !this.state.eventDetail ||
            this.state.eventDetail.slug !== currentItemId
          ) {
            this.loadEventDetail(currentItemId);
          }
        } else {
          this.setState({
            eventDetail: null,
            eventDetailLoading: false,
            eventDetailError: null,
          });
        }
        break;
      case "/videos":
        this.setState({ activePivotKey: "VIDEOS" });
        if (currentItemId) {
          this.loadVideoDetail(currentItemId);
        } else {
          this.setState({
            videoDetail: null,
            videoDetailLoading: false,
            videoDetailError: null,
          });
        }
        break;
      default:
        this.setState({ activePivotKey: "THESOURCE", calendarShow: false });
    }
  }

  private async loadAnnouncementDetail(slug: string): Promise<void> {
    this.setState({
      announcementDetailLoading: true,
      announcementDetailError: null,
      announcementDetail: null,
    });

    try {
      // Extract ID from slug (e.g., "my-title-123" -> 123)
      const idMatch = slug.match(/-(\d+)$/);
      const id = idMatch ? parseInt(idMatch[1], 10) : null;
      let spItem = null;

      // Try by ID first (most reliable)
      if (id) {
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
              "Time",
              "Image",
              "Link",
              "Modified",
              "Created",
            )
            .expand("AttachmentFiles")();

        } catch (err) {
          console.warn("Item not found by ID");
        }
      }

      // Fallback: try title match from slug
      if (!spItem) {
        const titleFromSlug = slug.replace(/-(\d+)$/, "").replace(/-/g, " ");
        try {
          const items = await sp.web.lists
            .getByTitle("Announcements")
            .items.select(
              "ID",
              "Title",
              "Description",
              "Detail",
              "Category",
              "Time",
              "Image",
              "Link",
              "Modified",
              "Created",
            )
            .expand("AttachmentFiles")
            .filter(`substringof('${titleFromSlug}', Title)`)
            .top(1)();

          if (items && items.length > 0) {
            spItem = items[0];
          }
        } catch (err) {
          console.warn("Item not found by title match");
        }
      }

      if (spItem) {
        // Transform using available fields (no Slug, Content, Tag, Date in this list)
        let heroImage = "";
        if (spItem.AttachmentFiles && spItem.AttachmentFiles.length > 0) {
          heroImage = spItem.AttachmentFiles[0].ServerRelativeUrl;
        } else if (spItem.Image) {
          try {
            heroImage = JSON.parse(spItem.Image).serverRelativeUrl || "";
          } catch {
            heroImage = "";
          }
        }

        const transformed: IAnnouncement = {
          id: spItem.ID,
          slug: generateSlug(spItem.Title) + "-" + spItem.ID,
          title: spItem.Title,
          description: spItem.Description || "",
          category: spItem.Category || "General",
          tag: spItem.Category || "ANNOUNCEMENT",
          date: spItem.Modified || spItem.Created,
          time: spItem.Time || "",
          heroImage: heroImage,
          content: {
            sections:
              spItem.Detail || spItem.Description
                ? [
                    {
                      type: "text" as const,
                      content: spItem.Detail || spItem.Description,
                    },
                  ]
                : [],
          },
        };
        // Save to localStorage for persistence
        try {
          localStorage.setItem(
            "announcementDetail_" + slug,
            JSON.stringify(transformed),
          );
        } catch (e) {}
        this.setState({
          announcementDetail: transformed,
          announcementDetailLoading: false,
        });
      } else {
        // Fallback: try localStorage
        let fromStorage = null;
        try {
          const stored = localStorage.getItem("announcementDetail_" + slug);
          if (stored) fromStorage = JSON.parse(stored);
        } catch (e) {}

        if (fromStorage) {
          this.setState({
            announcementDetail: fromStorage,
            announcementDetailLoading: false,
          });
        } else {
          this.setState({
            announcementDetailError: "Announcement not found",
            announcementDetailLoading: false,
          });
        }
      }
    } catch (err) {
      console.error("Error loading announcement:", err);
      // Fallback: try localStorage on error
      let fromStorage = null;
      try {
        const stored = localStorage.getItem("announcementDetail_" + slug);
        if (stored) fromStorage = JSON.parse(stored);
      } catch (e) {}

      if (fromStorage) {
        this.setState({
          announcementDetail: fromStorage,
          announcementDetailLoading: false,
        });
      } else {
        this.setState({
          announcementDetailError: "Failed to load announcement",
          announcementDetailLoading: false,
        });
      }
    }
  }

  private async loadEventDetail(slug: string): Promise<void> {
    this.setState({
      eventDetailLoading: true,
      eventDetailError: null,
      eventDetail: null,
    });

    try {
      const idMatch = slug.match(/-(\d+)$/);
      const id = idMatch ? parseInt(idMatch[1], 10) : null;
      let spItem = null;

      if (id) {
        try {
          spItem = await sp.web.lists
            .getByTitle("Events")
            .items.getById(id)
            .select(
              "ID",
              "Title",
              "Description",
              "Category",
              "Image",
              "EventDate",
              "EndDate",
              "Location",
              "fAllDayEvent",
              "Modified",
              "Created",
            )
            .expand("AttachmentFiles")();

          // Try fetching Details separately (try both casings)
          try {
            const detailItem = await sp.web.lists
              .getByTitle("Events")
              .items.getById(id)
              .select("Details")();

            spItem.Details = detailItem.Details || "";
          } catch (e) {
            try {
              const detailItem = await sp.web.lists
                .getByTitle("Events")
                .items.getById(id)
                .select("details")();

              spItem.Details = detailItem.details || "";
            } catch (e2) {
              console.warn(
                "Details/details column not found for event, skipping",
              );
            }
          }
        } catch (err) {
          console.warn("Event not found by ID");
        }
      }

      if (!spItem) {
        const titleFromSlug = slug.replace(/-(\d+)$/, "").replace(/-/g, " ");
        try {
          const items = await sp.web.lists
            .getByTitle("Events")
            .items.select(
              "ID",
              "Title",
              "Description",
              "Category",
              "Image",
              "EventDate",
              "EndDate",
              "Location",
              "fAllDayEvent",
              "Modified",
              "Created",
            )
            .expand("AttachmentFiles")
            .filter(`substringof('${titleFromSlug}', Title)`)
            .top(1)();

          if (items && items.length > 0) {
            spItem = items[0];
            // Try fetching Details separately (try both casings)
            try {
              const detailItem = await sp.web.lists
                .getByTitle("Events")
                .items.getById(spItem.ID)
                .select("Details")();

              spItem.Details = detailItem.Details || "";
            } catch (e) {
              try {
                const detailItem = await sp.web.lists
                  .getByTitle("Events")
                  .items.getById(spItem.ID)
                  .select("details")();

                spItem.Details = detailItem.details || "";
              } catch (e2) {
                console.warn(
                  "Details/details column not found for event, skipping",
                );
              }
            }
          }
        } catch (err) {
          console.warn("Event not found by title match");
        }
      }

      // If not found in "Events" list, try "Company Events" list
      if (!spItem && id) {
        try {
          spItem = await sp.web.lists
            .getByTitle("Company Events")
            .items.getById(id)
            .select(
              "ID",
              "Title",
              "Date",
              "Time",
              "Category",
              "Image",
              "Created",
              "Link",
            )
            .expand("AttachmentFiles")();

          // Try fetching Details separately (try both casings)
          try {
            const detailItem = await sp.web.lists
              .getByTitle("Company Events")
              .items.getById(id)
              .select("Details")();

            spItem.Details = detailItem.Details || "";
          } catch (e) {
            try {
              const detailItem = await sp.web.lists
                .getByTitle("Company Events")
                .items.getById(id)
                .select("details")();

              spItem.Details = detailItem.details || "";
            } catch (e2) {
              console.warn(
                "Details/details column not found for Company Events, skipping",
              );
            }
          }
        } catch (err) {
          console.warn("Event not found in Company Events by ID");
        }
      }

      if (spItem) {
        let heroImage = "";
        try {
          heroImage =
            spItem.AttachmentFiles && spItem.AttachmentFiles.length > 0
              ? spItem.AttachmentFiles[0].ServerRelativeUrl
              : spItem.Image
                ? JSON.parse(spItem.Image).serverRelativeUrl
                : "";
        } catch (e) {
          heroImage = "";
        }

        const transformed = {
          id: spItem.ID,
          slug: generateSlug(spItem.Title) + "-" + spItem.ID,
          title: spItem.Title,
          description: spItem.Description || "",
          category: spItem.Category || "General",
          tag: spItem.Category || "EVENT",
          date:
            spItem.EventDate ||
            spItem.Date ||
            spItem.Modified ||
            spItem.Created,
          endDate: spItem.EndDate || "",
          location: spItem.Location || "",
          allDay: spItem.fAllDayEvent || false,
          heroImage: heroImage,
          link: spItem.Link || "",
          time: spItem.Time || "",
          content:
            spItem.Details || spItem.Description
              ? [
                  {
                    type: "text" as const,
                    content: spItem.Details || spItem.Description,
                  },
                ]
              : [],
        };
        // Save to localStorage for persistence
        try {
          localStorage.setItem(
            "eventDetail_" + slug,
            JSON.stringify(transformed),
          );
        } catch (e) {}
        this.setState({
          eventDetail: transformed,
          eventDetailLoading: false,
        });
      } else {
        // Fallback: try localStorage
        let fromStorage = null;
        try {
          const stored = localStorage.getItem("eventDetail_" + slug);
          if (stored) fromStorage = JSON.parse(stored);
        } catch (e) {}

        if (fromStorage) {
          this.setState({
            eventDetail: fromStorage,
            eventDetailLoading: false,
          });
        } else {
          this.setState({
            eventDetailError: "Event not found",
            eventDetailLoading: false,
          });
        }
      }
    } catch (err) {
      console.error("Error loading event:", err);
      // Fallback: try localStorage on error
      let fromStorage = null;
      try {
        const stored = localStorage.getItem("eventDetail_" + slug);
        if (stored) fromStorage = JSON.parse(stored);
      } catch (e) {}

      if (fromStorage) {
        this.setState({
          eventDetail: fromStorage,
          eventDetailLoading: false,
        });
      } else {
        this.setState({
          eventDetailError: "Failed to load event",
          eventDetailLoading: false,
        });
      }
    }
  }

  private async loadVideoDetail(slug: string): Promise<void> {
    this.setState({
      videoDetailLoading: true,
      videoDetailError: null,
      videoDetail: null,
    });

    try {
      // Videos are from a document library, match by file name from slug
      let allVideos = this.state.videosSearchArray;

      // If videosSearchArray is empty (page refresh), fetch from SharePoint directly
      if (!allVideos || allVideos.length === 0) {
        try {
          allVideos = await sp.web.lists
            .getByTitle("Videos")
            .items.select(
              "ID",
              "FileRef",
              "FileLeafRef",
              "VideoDescription",
              "Time",
              "Modified",
            )
            .orderBy("Modified", false)
            .top(4999)();

        } catch (e) {
          console.warn("Failed to fetch videos directly");
          allVideos = [];
        }
      }

      // Try to find video by matching slug
      const titleFromSlug = slug.replace(/-/g, " ").toLowerCase();
      let matchedVideo = allVideos.find((v: any) => {
        const fileName = v.FileLeafRef.replace(/\.[^/.]+$/, "").toLowerCase();
        return (
          generateSlug(fileName) === slug || fileName.includes(titleFromSlug)
        );
      });

      if (!matchedVideo) {
        // Try partial match
        const slugParts = titleFromSlug.split(" ");
        matchedVideo = allVideos.find((v: any) => {
          const fileName = v.FileLeafRef.toLowerCase();
          return slugParts.every((part: string) => fileName.includes(part));
        });
      }

      if (matchedVideo) {
        // Try to fetch Details field separately (may not exist on all sites)
        let detailsContent = "";
        if (matchedVideo.ID) {
          // Try uppercase Details first (Videos library uses capital D)
          try {
            const detailItem = await sp.web.lists
              .getByTitle("Videos")
              .items.getById(matchedVideo.ID)
              .select("Details")();

            detailsContent = detailItem.Details || "";
          } catch (e) {
            // Fallback: try lowercase details
            try {
              const detailItem = await sp.web.lists
                .getByTitle("Videos")
                .items.getById(matchedVideo.ID)
                .select("details")();

              detailsContent = detailItem.details || "";
            } catch (e2) {
              console.warn(
                "Details/details column not found for video, skipping",
              );
            }
          }
        }

        const transformed = {
          id: matchedVideo.ID || matchedVideo.FileLeafRef,
          slug: slug,
          title: matchedVideo.FileLeafRef.replace(/\.[^/.]+$/, ""),
          description: matchedVideo.VideoDescription || "",
          details: detailsContent,
          time: matchedVideo.Time || "",
          fileRef: matchedVideo.FileRef,
          fileName: matchedVideo.FileLeafRef,
          modified: matchedVideo.Modified,
        };
        // Save to localStorage for persistence
        try {
          localStorage.setItem(
            "videoDetail_" + slug,
            JSON.stringify(transformed),
          );
        } catch (e) {}
        this.setState({
          videoDetail: transformed,
          videoDetailLoading: false,
        });
      } else {
        // Fallback: try localStorage
        let fromStorage = null;
        try {
          const stored = localStorage.getItem("videoDetail_" + slug);
          if (stored) fromStorage = JSON.parse(stored);
        } catch (e) {}

        if (fromStorage) {
          this.setState({
            videoDetail: fromStorage,
            videoDetailLoading: false,
          });
        } else {
          this.setState({
            videoDetailError: "Video not found",
            videoDetailLoading: false,
          });
        }
      }
    } catch (err) {
      console.error("Error loading video:", err);
      // Fallback: try localStorage on error
      let fromStorage = null;
      try {
        const stored = localStorage.getItem("videoDetail_" + slug);
        if (stored) fromStorage = JSON.parse(stored);
      } catch (e) {}

      if (fromStorage) {
        this.setState({
          videoDetail: fromStorage,
          videoDetailLoading: false,
        });
      } else {
        this.setState({
          videoDetailError: "Failed to load video",
          videoDetailLoading: false,
        });
      }
    }
  }

  public async componentDidMount() {
    try {
      // Initialize routing immediately so the correct tab shows
      const { route, itemId } = this.parseRouteFromURL();
      const pivotMap: Record<string, string> = {
        "/": "THESOURCE",
        "/announcements": "ANNOUNCEMENTS",
        "/events": "COMPANYEVENTS",
        "/videos": "VIDEOS",
      };
      this.setState({
        currentRoute: route,
        currentItemId: itemId,
        activePivotKey: pivotMap[route] || "THESOURCE",
      });

      // Listen for browser back/forward button
      window.addEventListener("popstate", this.handlePopState);

      // Load all data in parallel without delay
      await Promise.all([
        this.loadQuickLinks(),
        this.getAnnouncements(),
        this.getCompanyEvents(),
        this.getAboutUsDetails(),
        this.getBannerNews(),
        this.getCelebrationData(),
        this.getCelebrationSubData(),
        this.getQuizDetails(),
        this.loadExistingAnswers(),
        this.getAnnouncementsall(),
        this.loadVideos(),
        this.loadHomeVideos(),
        this.getUpcomingEvents(),
        this.getBirthdayData(),
        this.getAllCalendarEvents(),
      ]);

      // Handle route change AFTER data is loaded (for detail pages, etc.)
      this.handleRouteChange();
    } catch (err) {
      console.error(err);
    }
  }

  public componentWillUnmount(): void {
    // Clean up event listener
    window.removeEventListener("popstate", this.handlePopState);
    if (this.heroSlideTimeoutId !== null) {
      window.clearTimeout(this.heroSlideTimeoutId);
      this.heroSlideTimeoutId = null;
    }
  }

  private async loadQuickLinks() {
    const items: any[] = await sp.web.lists
      .getByTitle("Quick Links")
      .items.select(
        "Id",
        "Title",
        "Level",
        "Parent/Id",
        "Parent/Title",
        "Url",
        "Icon",
        "Order",
      )
      .expand("Parent,AttachmentFiles")
      .orderBy("Order")();


    const hierarchy = this.build3LevelHierarchy(items);
    this.setState({ quickLinks: hierarchy });
  }

  private build3LevelHierarchy(items: any[]): Record<string, NavNode[]> {
    // 1. Typed nodes array
    const nodes: NavNode[] = items.map(
      (item: any): NavNode => ({
        id: item.Id,
        title: item.Title,
        level: item.Level,
        parentId: item["Parent/Id"] || item.Parent?.Id,
        parentTitle: item["Parent/Title"] || item.Parent?.Title,
        url: item["Url/Url"] || item.Url?.Url || "#",
        icon:
          item.AttachmentFiles.length > 0
            ? item.AttachmentFiles[0].ServerRelativeUrl
            : item.Icon
              ? JSON.parse(item.Icon).serverRelativeUrl
              : require(`../assets/directorywhite.png`),
        order: item.Order || 999,
        children: [] as NavNode[],
      }),
    );

    // 2. Typed ID map
    const idMap: Map<number, NavNode> = new Map(
      nodes.map((node): [number, NavNode] => [node.id, node]),
    );

    // 3. Link hierarchy (fully typed)
    nodes.forEach((node: NavNode) => {
      if (node.parentId && idMap.has(node.parentId)) {
        const parent: NavNode | undefined = idMap.get(node.parentId);
        if (parent) {
          parent.children.push(node);
        }
      }
    });

    // 4. Title fallback (fully typed)
    const titleToId: Map<string, number> = new Map();
    nodes.forEach((node: NavNode) => {
      titleToId.set(node.title.toLowerCase(), node.id);
    });

    nodes.forEach((node: NavNode) => {
      if (!node.parentId && node.parentTitle) {
        const parentId: number | undefined = titleToId.get(
          node.parentTitle.toLowerCase(),
        );
        if (parentId && idMap.has(parentId)) {
          const parent: NavNode | undefined = idMap.get(parentId);
          if (
            parent &&
            !parent.children.some((child) => child.id === node.id)
          ) {
            parent.children.push(node);
          }
        }
      }
    });

    // 5. Sort (fully typed)
    nodes.forEach((node: NavNode) => {
      node.children.sort((a: NavNode, b: NavNode) => a.order - b.order);
    });

    // 6. Top-level categories (fully typed)
    const categories: Record<string, NavNode[]> = {};
    const topCategories: NavNode[] = nodes
      .filter((node: NavNode) => node.level === "Category" && !node.parentId)
      .sort((a: NavNode, b: NavNode) => a.order - b.order);

    topCategories.forEach((category: NavNode) => {
      categories[category.title] = category.children;
    });

    return categories;
  }

  // 🔧 Universal Parent Extractor
  private extractParentId(item: any): number | undefined {
    return (
      item["Parent/Id"] ||
      item["ParentId"] ||
      item.ParentId ||
      item.Parent?.Id ||
      (typeof item.Parent === "number" ? item.Parent : undefined)
    );
  }

  private onSelectOption = async (
    question,
    optionIndex: number,
    optionText: string,
  ) => {
    const qId = question.ID; // ensure ID is in your select from quiz list
    // const email = this.state.userEmail;
    const user = await sp.web.currentUser();

    // If already answered, do nothing (UI should already disable)
    if (this.state.answers[qId]) {
      return;
    }

    // Save to SharePoint list
    await sp.web.lists.getByTitle("QuizResponses").items.add({
      Title: qId.toString(), // store question ID in Title
      UserId: user.Id,
      SelectedOption: optionText, // or labels[optionIndex]
    });
    // Update local state
    this.setState(
      (prev) => ({
        answers: {
          ...prev.answers,
          [qId]: optionText,
        },
      }),
      () => {
        this.loadExistingAnswers();
      },
    );
  };

  private async loadExistingAnswers() {
    // const email = this.state.userEmail;
    const user = await sp.web.currentUser();

    const items = await sp.web.lists
      .getByTitle("QuizResponses")
      .items.select("Id", "Title", "User/Id", "User/Title", "SelectedOption")
      .expand("User")
      .filter(`UserId eq '${user.Id}'`)
      .top(5000)();


    const answers: { [id: number]: string } = {};
    items.forEach((i) => {
      const qId = parseInt(i.Title, 10); // assuming Title = question ID
      answers[qId] = i.SelectedOption;
    });

    this.setState({ answers });
  }

  private getQuickLinksDetails = async () => {
    try {
      const QuickLinksDetails = await sp.web.lists
        .getByTitle("Quick Links")
        .items.select("Title,Link,Icon,ID,Category")
        .expand("AttachmentFiles")
        .top(4999)();


      if (QuickLinksDetails.length > 0) {
        // group by Category
        const grouped = QuickLinksDetails.reduce(
          (acc, item) => {
            const cat = item.Category || "Other";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
          },
          {} as { [category: string]: any[] },
        );

        this.setState({ quickLinks: grouped });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getAnnouncements = async () => {
    try {
      const CompanyNewsDetails = await sp.web.lists
        .getByTitle("Announcements")
        .items.select("ID,Title,Time,Description,Category,Image,Link")
        .expand("AttachmentFiles")
        .orderBy("Modified", false)
        .top(5)();


      if (CompanyNewsDetails.length > 0) {
        this.setState({ announcementData: CompanyNewsDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getCompanyEvents = async () => {
    try {
      const CompanyEventsDetails = await sp.web.lists
        .getByTitle("Company Events")
        .items.select("ID,Title,Time,Category,Image,Created,Link,Date")
        .expand("AttachmentFiles")
        .orderBy("Date", false)
        .top(5)();


      if (CompanyEventsDetails.length > 0) {
        // Try to fetch Description and Details for each event separately (columns may not exist)
        for (let i = 0; i < CompanyEventsDetails.length; i++) {
          try {
            const descItem = await sp.web.lists
              .getByTitle("Company Events")
              .items.getById(CompanyEventsDetails[i].ID)
              .select("Description")();

            CompanyEventsDetails[i].Description = descItem.Description || "";
          } catch (e) {
            CompanyEventsDetails[i].Description = "";
          }
          try {
            const detailItem = await sp.web.lists
              .getByTitle("Company Events")
              .items.getById(CompanyEventsDetails[i].ID)
              .select("Details")();

            CompanyEventsDetails[i].Details = detailItem.Details || "";
          } catch (e) {
            try {
              const detailItem = await sp.web.lists
                .getByTitle("Company Events")
                .items.getById(CompanyEventsDetails[i].ID)
                .select("details")();

              CompanyEventsDetails[i].Details = detailItem.details || "";
            } catch (e2) {
              CompanyEventsDetails[i].Details = "";
            }
          }
        }
        this.setState({ companyevents: CompanyEventsDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getAllCalendarEvents = async () => {
    try {
      // Fetch ALL events from Company Events list
      const eventsItems = await sp.web.lists
        .getByTitle("Company Events")
        .items.select(
          "ID,Title,Date,Time,Category,Image,Created,Link,details,Details",
        )
        .expand("AttachmentFiles")
        .orderBy("Date", false)
        .top(4999)();


      if (eventsItems.length > 0) {
        // Transform events to calendar format
        const calendarEvents = eventsItems.map((event: any) => {
          const startDate = event.Date || event.Created;
          const endDate = startDate; // Company Events doesn't have EndDate

          let imageURL = "";
          try {
            imageURL =
              event.AttachmentFiles && event.AttachmentFiles.length > 0
                ? event.AttachmentFiles[0].ServerRelativeUrl
                : event.Image
                  ? JSON.parse(event.Image).serverRelativeUrl
                  : "";
          } catch (e) {
            imageURL = "";
          }

          return {
            id: event.ID,
            title: event.Title,
            start: new Date(startDate),
            end: new Date(endDate),
            category: event.Category || "",
            time: event.Time || "",
            location: "",
            description: event.details || event.Details || "",
            heroImage: imageURL,
            allDay: true,
            resource: event,
          };
        });

        this.setState({ allCalendarEvents: calendarEvents });
      }
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    }
  };

  private getAboutUsDetails = async () => {
    try {
      const AboutUsDetails = await sp.web.lists
        .getByTitle("Learn More About Us")
        .items.select("ID,Title,Link,Image")
        .expand("AttachmentFiles")
        .top(4999)();


      if (AboutUsDetails.length > 0) {
        this.setState({ aboutUS: AboutUsDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getBannerNews = async () => {
    try {
      const items = await sp.web.lists
        .getByTitle("Banner News")
        .items.select(
          "ID,Title,Description,ReadMoreLink,Category,Image,Modified",
        )
        .expand("AttachmentFiles")
        .top(4999)();


      if (!items.length) return;

      // sort by Modified desc
      const sorted = items.sort(
        (a, b) =>
          new Date(b.Modified).getTime() - new Date(a.Modified).getTime(),
      );

      // take latest per Category
      const latestByCategory: { [cat: string]: any } = {};
      sorted.forEach((it) => {
        const cat = it.Category || "Dashboard";
        if (!latestByCategory[cat]) {
          latestByCategory[cat] = it; // first in sorted list = latest
        }
      });

      this.setState({ news: latestByCategory });
    } catch (error) {
      console.log(error);
    }
  };

  private getCelebrationData = async () => {
    try {
      const CelebrationDetails = await sp.web.lists
        .getByTitle("BirthdayWorkAnniversary")
        .items.select("ID,Title,Date,CelebrationType,IconText")
        .orderBy("Date", false)
        .top(4)();


      if (CelebrationDetails.length > 0) {
        this.setState({ celebrationData: CelebrationDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getCelebrationSubData = async () => {
    try {
      const CelebrationSubDetails = await sp.web.lists
        .getByTitle("BirthdayWorkAnniversary")
        .items.select("ID,Title,Date,CelebrationType,IconText")
        .orderBy("Date", false)
        .top(4999)();


      if (CelebrationSubDetails.length > 0) {
        this.setState({ celebrationDataSub: CelebrationSubDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getQuizDetails = async () => {
    try {
      const QuiznDetails = await sp.web.lists
        .getByTitle("Quiz")
        .items.select("ID,Title,Options")
        .top(1)();


      if (QuiznDetails.length > 0) {
        this.setState({ quizData: QuiznDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  private getAnnouncementsall = async () => {
    try {
      const CompanyNewsDetails = await sp.web.lists
        .getByTitle("Announcements")
        .items.select("ID,Title,Time,Description,Category,Image,Link")
        .expand("AttachmentFiles")
        .orderBy("Modified", false)
        .top(4999)();


      if (CompanyNewsDetails.length > 0) {
        this.setState({
          announcementSearchArray: CompanyNewsDetails,
        });
        this.pagination(1, CompanyNewsDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // function to set pagination
  public pagination(crntPage, libraryData) {
    var startCount = (crntPage - 1) * viewCount;
    var endCount = crntPage * viewCount;
    let pagedArr = libraryData.slice(startCount, endCount);
    this.setState({
      announcementCurrentPage: 1,
      announcementItems: libraryData,
      announcementTotalPages: Math.ceil(libraryData.length / viewCount),
    });
    this.mapPageData(pagedArr);
  }

  // function to set or map data to pages
  public async mapPageData(pageData: any[]) {
    this.setState({ announcementDataall: pageData });
  }

  // function to search users
  public searchUsers = (text) => {
    this.setState({ announcementSearchText: text });
    let SearchUser = this.state.announcementSearchArray.filter((value) => {
      let val = value.Title.toLowerCase();
      let val1 = value.Description.toLowerCase();
      if (
        val.includes(text.toLowerCase()) ||
        val1.includes(text.toLowerCase())
      ) {
        return value;
      }
    });
    this.pagination(1, SearchUser);
  };

  private getUpcomingEvents = async () => {
    let lAllEventsData = [],
      lAllOptions = [],
      NewArray = [],
      array = [];
    let index = 0;
    try {
      let aadTokenProvider =
        await this.props.spfxContext.aadTokenProviderFactory.getTokenProvider();
      let token = await aadTokenProvider.getToken(
        "https://graph.microsoft.com",
      );
      console.log(token);

      await this.props.spfxContext.msGraphClientFactory
        .getClient()
        .then(async (client: MSGraphClient) => {
          let groupId = "2e58377d-bda5-466d-bb25-3394dfc1083d";

          await client
            .api(`/groups/${groupId}/calendar/events`)
            .version("v1.0")
            .filter(`start/dateTime ge '${new Date().toISOString()}'`)
            .orderby("start/dateTime")
            .top(5)
            .get((err, res?: any) => {
              console.log("Events", res);

              res.value.forEach(async (element, i) => {
                index = i;
                // let StartString = (element.body.content).indexOf('https');
                // let EndString = element.subject.startsWith('Task_') ? (element.body.content).indexOf('">Open') : (element.body.content).indexOf('" style');
                // let AuditUrl = ((element.body.content).slice(StartString, EndString));

                // let StartDate = element.subject.startsWith('Task_') ? moment(element.start.dateTime).format('YYYY-MM-DD') + 'T00:01:00' : moment(element.end.dateTime).format('YYYY-MM-DD') + 'T00:01:00';

                let StartDate = Moment.tz(element.start.dateTime, "UTC")
                  .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
                  .format("YYYY-MM-DDTHH:mm:ss"); // Preserve selected time
                // let StartDate = moment(element.end.dateTime).format('YYYY-MM-DD') + 'T00:01:00';
                // let EndDate = moment(element.end.dateTime).format('YYYY-MM-DD') + 'T23:59:00';
                let EndDate = Moment.tz(element.end.dateTime, "UTC")
                  .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
                  .format("YYYY-MM-DDTHH:mm:ss");

                if (this.state.sIsDropdownSelected == true) {
                  if (
                    element.categories[0] == this.state.sSingleValueDropdown
                  ) {
                    lAllEventsData.push({
                      id: element.id,
                      Title: element.subject,
                      // "EventDate1": new Date(StartDate),
                      // "EndDate1": new Date(EndDate),
                      // "EventDate": new Date(element.end.dateTime),
                      // "EndDate": new Date(element.end.dateTime),
                      isAllDay: element.isAllDay,
                      attendees: element.attendees,
                      categories: element.categories,
                      recurrence: element.recurrence,
                      type: element.type,
                      iCalUId: element.iCalUId,
                      ownerName: element.organizer.emailAddress.name,
                      location: element.location.displayName,
                      // "AuditUrl": AuditUrl,
                      EventDateDay: StartDate ? moment(StartDate).date() : "",
                      EventDateMonth: StartDate
                        ? moment(StartDate).format("MMMM")
                        : "",
                      EventDate: StartDate
                        ? moment(StartDate).format("DD MMMM YYYY")
                        : "",
                      EndDateDay: EndDate ? moment(EndDate).date() : "",
                      EndDate: EndDate,
                      StartDate: StartDate,
                      startDate1:
                        moment(StartDate).format("YYYY-MM-DD") +
                        "T" +
                        moment(StartDate).format("HH:mm:ss"),
                      endDate1:
                        moment(EndDate).format("YYYY-MM-DD") +
                        "T" +
                        moment(EndDate).format("HH:mm:ss"),
                    });
                  }
                } else {
                  lAllEventsData.push({
                    id: element.id,
                    Title: element.subject,
                    // "EventDate1": new Date(StartDate),
                    // "EndDate1": new Date(EndDate),
                    // "EventDate": new Date(element.end.dateTime),
                    // "EndDate": new Date(element.end.dateTime),
                    isAllDay: element.isAllDay,
                    attendees: element.attendees,
                    categories: element.categories,
                    recurrence: element.recurrence,
                    type: element.type,
                    iCalUId: element.iCalUId,
                    ownerName: element.organizer.emailAddress.name,
                    location: element.location.displayName,
                    // "AuditUrl": AuditUrl,
                    EventDateDay: StartDate ? moment(StartDate).date() : "",
                    EventDateMonth: StartDate
                      ? moment(StartDate).format("MMMM")
                      : "",
                    EventDate: StartDate
                      ? moment(StartDate).format("DD MMMM YYYY")
                      : "",
                    EndDateDay: EndDate ? moment(EndDate).date() : "",
                    EndDate: EndDate,
                    StartDate: StartDate,
                    startDate1:
                      moment(StartDate).format("YYYY-MM-DD") +
                      "T" +
                      moment(StartDate).format("HH:mm:ss"),
                    endDate1:
                      moment(EndDate).format("YYYY-MM-DD") +
                      "T" +
                      moment(EndDate).format("HH:mm:ss"),
                  });
                }
              });
              this.setState({ sAllEvents: lAllEventsData });
            });
        });
    } catch (err) {
      console.error("Error fetching group events:", err);
    }
  };

  private getBirthdayData = async () => {
    try {
      const CelebrationDetails = await sp.web.lists
        .getByTitle("BirthdayWorkAnniversary")
        .items.select("ID,Title,Date,CelebrationType,IconText")
        .orderBy("Date", false)
        .top(5)();


      if (CelebrationDetails.length > 0) {
        this.setState({ birthdayData: CelebrationDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Calendar event handlers
  private handleSelectEvent = (event: any) => {
    this.setState({
      selectedEvent: event,
      showEventDetail: true,
    });
  };

  private handleCloseEventDetail = () => {
    this.setState({
      selectedEvent: null,
      showEventDetail: false,
    });
  };

  private handleViewChange = (view: string) => {
    this.setState({ calendarView: view });
  };

  private handleNavigate = (date: Date) => {
    this.setState({ calendarDate: date });
  };

  private getEventsForCurrentMonth = (): any[] => {
    const { allCalendarEvents, calendarDate } = this.state;
    const monthStart = moment(calendarDate).startOf("month");
    const monthEnd = moment(calendarDate).endOf("month");
    return allCalendarEvents.filter((event: any) => {
      const eventStart = moment(event.start);
      return eventStart.isBetween(monthStart, monthEnd, undefined, "[]");
    });
  };

  private loadVideos = async () => {
    try {
      const items = await sp.web.lists
        .getByTitle("Videos")
        .items.select(
          "ID",
          "FileRef",
          "FileLeafRef",
          "VideoDescription",
          "Details",
          "Time",
          "Modified",
        )
        .orderBy("Modified", false) // Latest first (descending)
        () // Use () instead of .then()
        .then((res) => {
          const videoExts = [
            "mp4",
            "avi",
            "mov",
            "wmv",
            "flv",
            "webm",
            "mkv",
            "m4v",
            "3gp",
            "ogv",
            "mpeg",
            "mpg",
          ];

          return res.filter((i) => {
            const fileName = i.FileLeafRef.toLowerCase();
            return videoExts.some(
              (ext) =>
                fileName.endsWith(`.${ext}`) ||
                fileName.endsWith(`.${ext.toUpperCase()}`),
            );
          });
        });

      this.setState({ videosSearchArray: items });
      this.pagination2(1, items);
      console.log("Latest videos first:", items);
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  };

  private loadHomeVideos = async () => {
    try {
      const videoExts = /\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv|mpeg|mpg)(\?|#|$)/i;
      const looksLikeUrl = (s: string) => /^https?:\/\//i.test(s.trim());

      // Fetch URL-based list items and uploaded library files in parallel
      const [listItems, libraryItems] = await Promise.all([
        sp.web.lists.getByTitle("HomeVideos").items(),
        sp.web.lists
          .getByTitle("HomeVideo")
          .items.select("ID", "FileRef", "FileLeafRef", "DisplayOrder")()
          .catch(() => [] as any[]),
      ]);

      const extractUrl = (i: any): string => {
        let videoMatch = "";
        let anyMatch = "";
        for (const k of Object.keys(i)) {
          if (k.startsWith("odata.")) continue;
          if (k === "ServerRedirectedEmbedUri" || k === "ServerRedirectedEmbedUrl") continue;
          const v = i[k];
          let candidate = "";
          if (typeof v === "string" && looksLikeUrl(v)) candidate = v.trim();
          else if (v && typeof v === "object" && typeof v.Url === "string" && looksLikeUrl(v.Url)) candidate = v.Url.trim();
          if (!candidate) continue;
          if (videoExts.test(candidate)) { videoMatch = candidate; break; }
          if (!anyMatch) anyMatch = candidate;
        }
        return videoMatch || anyMatch;
      };

      const fromList = listItems
        .map((i: any) => ({ ...i, _videoUrl: extractUrl(i) }))
        .filter((i: any) => i._videoUrl.length > 0);

      const tenantRoot = this.props.siteUrl;
      const fromLibrary = (libraryItems as any[])
        .filter((i: any) => i.FileLeafRef && videoExts.test(i.FileLeafRef))
        .map((i: any) => ({ ...i, _videoUrl: `${tenantRoot}${i.FileRef}` }));

      const filtered = [...fromList, ...fromLibrary]
        .sort((a: any, b: any) => (a.DisplayOrder || 0) - (b.DisplayOrder || 0));

      console.log("[HomeVideos] merged+sorted:", filtered);
      const firstUrl = (filtered[0] && filtered[0]._videoUrl) || '';
      const secondUrl = filtered.length > 1 ? (filtered[1]._videoUrl || '') : '';
      this.setState({
        homeVideos: filtered,
        currentHeroVideoIndex: 0,
        slotAUrl: firstUrl,
        slotBUrl: secondUrl,
        slotAClass: 'is-active',
        slotBClass: 'is-staged',
        activeSlot: 'A',
      });
    } catch (err) {
      console.error("[HomeVideos] Error loading:", err);
    }
  };

  private handleHeroVideoEnded = (): void => {
    const { homeVideos, activeSlot, currentHeroVideoIndex } = this.state;
    if (homeVideos.length <= 1) return;

    const nextIdx = (currentHeroVideoIndex + 1) % homeVideos.length;
    const afterNextIdx = (nextIdx + 1) % homeVideos.length;
    const wasActiveSlot = activeSlot;

    const stagedRef = wasActiveSlot === 'A' ? this.slotBRef : this.slotARef;
    if (stagedRef.current) {
      const p = stagedRef.current.play();
      if (p && typeof p.catch === 'function') p.catch(() => { /* autoplay blocked */ });
    }

    if (wasActiveSlot === 'A') {
      this.setState({
        slotAClass: 'is-leaving',
        slotBClass: 'is-active',
        activeSlot: 'B',
        currentHeroVideoIndex: nextIdx,
      });
    } else {
      this.setState({
        slotAClass: 'is-active',
        slotBClass: 'is-leaving',
        activeSlot: 'A',
        currentHeroVideoIndex: nextIdx,
      });
    }

    if (this.heroSlideTimeoutId !== null) window.clearTimeout(this.heroSlideTimeoutId);
    this.heroSlideTimeoutId = window.setTimeout(() => {
      const nextNextUrl = (homeVideos[afterNextIdx] && homeVideos[afterNextIdx]._videoUrl) || '';
      if (wasActiveSlot === 'A') {
        this.setState({ slotAClass: 'is-staged', slotAUrl: nextNextUrl });
      } else {
        this.setState({ slotBClass: 'is-staged', slotBUrl: nextNextUrl });
      }
      this.heroSlideTimeoutId = null;
    }, this.SLIDE_SETTLE_MS);
  };

  private hidePlayOverlay = (e: React.SyntheticEvent<HTMLVideoElement>): void => {
    const wrapper = (e.currentTarget as HTMLElement).closest('.hero-video-wrapper');
    const overlay = wrapper ? (wrapper.querySelector('.play-button-overlay') as HTMLElement | null) : null;
    if (overlay) overlay.style.display = 'none';
  };

  private handlePlayOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const activeRef = this.state.activeSlot === 'A' ? this.slotARef : this.slotBRef;
    const video = activeRef.current;
    if (video && video.paused) {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
      (e.currentTarget as HTMLElement).style.display = 'none';
    }
  };

  // function to set pagination
  public pagination2(crntPage, libraryData) {
    var startCount = (crntPage - 1) * viewCount;
    var endCount = crntPage * viewCount;
    let pagedArr = libraryData.slice(startCount, endCount);
    this.setState({
      videosCurrentPage: 1,
      videosItems: libraryData,
      videosTotalPages: Math.ceil(libraryData.length / viewCount),
    });
    this.mapPageData2(pagedArr);
  }

  // function to set or map data to pages
  public async mapPageData2(pageData: any[]) {
    this.setState({ videosDetails: pageData });
  }

  // function to search users
  public videosSearchUsers = (text) => {
    this.setState({ videosSearchText: text });
    let SearchUser = this.state.videosSearchArray.filter((value) => {
      let val = value.FileLeafRef.toLowerCase();
      let val1 = value.VideoDescription.toLowerCase();
      if (
        val.includes(text.toLowerCase()) ||
        val1.includes(text.toLowerCase())
      ) {
        return value;
      }
    });
    this.pagination2(1, SearchUser);
  };
}
