import * as React from "react";
import styles from "./PageBanner.module.scss";
import { IPageBannerProps } from "./IPageBannerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Label, Pivot, PivotItem } from "@fluentui/react";
import { IIconProps, SearchBox } from "@fluentui/react";
require("../assets/css/style.css");
require("../assets/css/fabric.min.css");

const filterIcon: IIconProps = { iconName: "search" };

export default class PageBanner extends React.Component<IPageBannerProps, {}> {
  public render(): React.ReactElement<IPageBannerProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    const ImageLink = this.props.HomeBannerFilePicker == undefined ? require("../assets/Images/Anno.jpg") : this.props.HomeBannerFilePicker.fileAbsoluteUrl;

    return (
      <div>
        <div className="Home-banner" style={{ backgroundImage: "url(" + ImageLink + ")" }}>
          <div style={{ background: "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))", height: "400px" }}>
            <div className="container Home-banner-wrapper">
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12">
                  <div className="text-center w-50">
                    <h1 className="Home-banner-title">{this.props.Title}</h1>
                    <p className="Home-banner-description">{this.props.Description}</p>
                    {this.props.search ? (
                      <div className="ms-Grid-row" style={{display:'flex',justifyContent:'center'}}>
                        <div className="ms-Grid-col ms-sm12 ms-md4">
                          <SearchBox
                            id="chatSearchbtn"
                            placeholder="Search"
                            iconProps={filterIcon}
                            onChange={(e) => {
                              this.triggerEventChatSearch();
                            }}
                          />
                        </div>
                        <div className="ms-Grid-col ms-sm2 ms-md1">
                          <span>
                            {" "}
                            <button className="srchbutton">Search</button>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // function to trigger event on enter key for Chat Search
  public triggerEventChatSearch = () => {
    let mythis = this;
    var input = document.getElementById("chatSearchbtn");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        window.open(mythis.props.siteUrl + "/_layouts/15/search.aspx/siteall?q=" + event.currentTarget["value"]);
      }
    });
  }
}
