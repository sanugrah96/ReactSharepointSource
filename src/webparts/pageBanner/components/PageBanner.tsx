import * as React from "react";
import styles from "./PageBanner.module.scss";
import { IPageBannerProps } from "./IPageBannerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
require("../assets/css/style.css");
// fabric.min.css is loaded once via SPComponentLoader.loadCss in
// PageBannerWebPart.onInit instead of being inlined here (260 KB).

const filterIcon: IIconProps = { iconName: "search" };

export default class PageBanner extends React.Component<IPageBannerProps, {}> {
  public render(): React.ReactElement<IPageBannerProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    const ImageLink = this.props.HomeBannerFilePicker?.fileAbsoluteUrl || require("../assets/Images/Anno.jpg");

    return (
      <div>
        <div className="Home-banner" style={{ backgroundImage: "url(" + ImageLink + ")" }}>
          <div style={{ background: "linear-gradient(90deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 65%))", height: "100%" }}>
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
    if (input) {
      input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          window.open(mythis.props.siteUrl + "/_layouts/15/search.aspx/siteall?q=" + event.currentTarget["value"]);
        }
      });
    }
  }
}
