import * as React from "react";
import styles from "./AnnouncementDetailPage.module.scss";
import { IAnnouncementDetailPageProps } from "./IAnnouncementDetailPageProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "../../../services/pnpClient";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Pagination } from "./Pagination";
require("../assets/style.css");

const viewCount = 9;

export interface IAnnouncementDetailPageState {
  announcementData: any;
  currentPage: number;
  totalPages: number;
  items: any;
}

export default class AnnouncementDetailPage extends React.Component<
  IAnnouncementDetailPageProps,
  IAnnouncementDetailPageState
> {
  constructor(
    props: IAnnouncementDetailPageProps,
    state: IAnnouncementDetailPageState,
  ) {
    super(props);
    this.state = {
      announcementData: [],
      currentPage: 1,
      totalPages: 5,
      items: [],
    };
  }
  public render(): React.ReactElement<IAnnouncementDetailPageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <section className='homecontainer'>
        <div className='container'>
          <main className='content'>
            <div className='Announcement'>
              <div className='section-header'></div>

              <div className='card-row '>
                {this.state.announcementData.length > 0 &&
                  this.state.announcementData.map((ele, ind) => {
                    let imageURL = '';
                    try {
                      if (ele.AttachmentFiles && ele.AttachmentFiles.length > 0) {
                        imageURL = ele.AttachmentFiles[0].ServerRelativeUrl;
                      } else if (ele.Image) {
                        imageURL = JSON.parse(ele.Image).serverRelativeUrl || '';
                      }
                    } catch (e) {
                      imageURL = '';
                    }
                    return (
                      <a
                        href={ele.Link ? ele.Link.Url : "#"}
                        className='card'
                        target='_blank'
                        data-interception='off'
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <div className='tag'>{ele.Category}</div>
                        <img src={imageURL} alt='' />
                        {/* <h3>{ele.Title}</h3>
                        <p>{ele.Description}</p> */}
                        <span className='time'>{ele.Time}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </main>
        </div>
        {this.state.announcementData.length > 0 ? (
          <div className='ms-Grid-col ms-sm12 list-paging'>
            <Pagination
              currentPage={this.state.currentPage}
              totalPages={this.state.totalPages}
              onChange={(page) => this.pagination(page, this.state.items)}
              limiter={3} // Optional - default value 3
            />
          </div>
        ) : (
          <div></div>
        )}
      </section>
    );
  }

  public componentDidMount = async () => {
    await this.getAnnouncements();
  };

  private getAnnouncements = async () => {
    try {
      const CompanyNewsDetails = await sp.web.lists
        .getByTitle("Announcements")
        .items.select("ID,Title,Time,Description,Category,Image,Link")
        .expand("AttachmentFiles")
        .orderBy("Modified", false)
        .top(4999)();


      if (CompanyNewsDetails.length > 0) {
        this.setState({ announcementData: CompanyNewsDetails });
        this.pagination(this.state.currentPage, CompanyNewsDetails);
      }
    } catch (error) {
    }
  };

  // function to set pagination
  public pagination(crntPage, libraryData) {
    if (!libraryData || !Array.isArray(libraryData)) return;
    var startCount = (crntPage - 1) * viewCount;
    var endCount = crntPage * viewCount;
    let pagedArr = libraryData.slice(startCount, endCount);
    this.setState({
      currentPage: 1,
      items: libraryData,
      totalPages: Math.ceil(libraryData.length / viewCount),
    });
    this.mapPageData(pagedArr);
  }

  // function to set or map data to pages
  public async mapPageData(pageData: any[]) {
    this.setState({ announcementData: pageData });
  }
}
