import * as React from "react";
import styles from "./SubpageTemplate.module.scss";
import { ISubpageTemplateProps } from "./ISubpageTemplateProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Pivot, PivotItem } from "@fluentui/react/lib/Pivot";
import * as $ from "jquery";
import { sp } from "../../../services/pnpClient";
import * as moment from "moment";
require("../assets/style.css");
// fabric.min.css is loaded once via SPComponentLoader.loadCss in
// SubpageTemplateWebPart.onInit instead of being inlined here (260 KB).

export interface ISubpageTemplateState {
  isLoading: boolean;
}

export default class SubpageTemplate extends React.Component<ISubpageTemplateProps, ISubpageTemplateState> {
  constructor(props: ISubpageTemplateProps, state: ISubpageTemplateState) {
    super(props);
    this.state = {
      isLoading: true,
    };
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
  public render(): React.ReactElement<ISubpageTemplateProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    return (
      <section className="homecontainer">
        <header className="top-bar">
          <div className="left">
            <div className="date">{moment(new Date()).format("dddd MMMM DD, YYYY")}</div>
            <h1 className="greeting">
              {this.getGreeting()}, {(this.props.userDisplayName || "").split(" ")[0] || "User"}
            </h1>
          </div>

          <div className="right">
            <img src={require("../assets/logo.png")} className="logo" />
          </div>
        </header>

        <Pivot aria-label="Banner Pivot">
          <PivotItem
            itemKey="THESOURCE"
            headerText="THE SOURCE"
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  // this.setState({ activePivotKey: "THESOURCE" });
                  window.location.replace(`${window.location.origin}/sites/TheSource`); // Dynamic URL
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff82",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                THE SOURCE
              </div>
            )}
          ></PivotItem>

          <PivotItem
            itemKey="ANNOUNCEMENTS"
            headerText={"ANNOUNCEMENTS"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  // this.setState({ activePivotKey: "ANNOUNCEMENTS" });
                  window.location.replace(`${window.location.origin}/sites/TheSource`);
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff82",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ANNOUNCEMENTS
              </div>
            )}
          ></PivotItem>
          <PivotItem
            itemKey="COMPANYEVENTS"
            headerText={"Events"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  // this.setState({ activePivotKey: "COMPANYEVENTS", bigBirthdayShow: false, bigEventsShow: false, vivaEngageShow: false });
                  window.location.replace(`${window.location.origin}/sites/TheSource`);
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff82",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Events
              </div>
            )}
          ></PivotItem>
          <PivotItem
            itemKey="VIDEOS"
            headerText={"VIDEOS"}
            onRenderItemLink={() => (
              <div
                onClick={() => {
                  // this.setState({ activePivotKey: "VIDEOS" });
                  window.location.replace(`${window.location.origin}/sites/TheSource`);
                }}
                style={{
                  textDecoration: "none",
                  fontWeight: "unset",
                  textTransform: "uppercase",
                  color: "#ffffff82",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                VIDEOS
              </div>
            )}
          ></PivotItem>
        </Pivot>
      </section>
    );
  }

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      await Promise.all([this.CheckLoginUserPermission()]);

      this.setState({ isLoading: false });
      const preLoader = document.getElementById("preLoader");
      if (preLoader) {
        preLoader.remove();
      }
    } catch (err) {
      this.setState({ isLoading: false });
      const preLoader = document.getElementById("preLoader");
      if (preLoader) {
        preLoader.remove();
      }
      // stop loader even on error
    }
  }

  public CheckLoginUserPermission() {
    $.ajax({
      url: this.props.siteUrl + "/_api/web/currentUser/issiteadmin",
      method: "GET",
      async: true,
      headers: {
        Accept: "application/json;odata=verbose",
      },
      success: function (data) {
        if (data.d.IsSiteAdmin == true) {
          // Site admin: Normal display
          $("#spCommandBar, #spCommandBarNoRibbon, .ms-CommandBar-root, [data-automationid='commandBar']").show().attr("style", "display: block !important;");
        } else {
          // Non-admin: Hide with CSS (invisible but takes no space)
          $("#spCommandBar, #spCommandBarNoRibbon, .ms-CommandBar-root, [data-automationid='commandBar']").hide().attr("style", "display: none !important; visibility: hidden !important;");
        }
      },
      error: function (data) {
      },
    });
  }
}
