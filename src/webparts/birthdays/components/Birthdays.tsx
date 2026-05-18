import * as React from "react";
import styles from "./Birthdays.module.scss";
import { IBirthdaysProps } from "./IBirthdaysProps";
import { escape } from "@microsoft/sp-lodash-subset";
import * as moment from "moment";
import { sp } from "../../../services/pnpClient";

require("../assets/style.css");
export interface IBirthdaysState {
  celebrationData: any;
}
export default class Birthdays extends React.Component<IBirthdaysProps, IBirthdaysState> {
  constructor(props: IBirthdaysProps, state: IBirthdaysState) {
    super(props);
    this.state = {
      celebrationData: [],
    };
  }
  public render(): React.ReactElement<IBirthdaysProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    return (
      <section>
        <div className="celebration-card">
          <div className="card-header">
            <span className="accent"></span>
            <h3>Birthdays &amp; Anniversaries</h3>
          </div>
          {this.state.celebrationData.length > 0 &&
            this.state.celebrationData.map((el, ind) => {
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

          {/* <div className="item">
            <div className="icon birthday">🎂</div>
            <div className="content">
              <h4>John’s Birthday</h4>
              <p>Friday November 21, 2025</p>
            </div>
          </div>

          <div className="item">
            <div className="icon anniversary orange">
              <span>50</span>
              <small>yrs</small>
            </div>
            <div className="content">
              <h4>McAlvain 50 year Anniversary</h4>
              <p>Friday November 21, 2025</p>
            </div>
          </div>

          <div className="item">
            <div className="icon anniversary purple">
              <span>20</span>
            </div>
            <div className="content">
              <h4>Sarah’s 20 Year Work-A-Versary</h4>
              <p>Friday November 21, 2025</p>
            </div>
          </div>

          <div className="item">
            <div className="icon birthday">🎂</div>
            <div className="content">
              <h4>John’s Birthday</h4>
              <p>Friday November 21, 2025</p>
            </div>
          </div>

          <div className="item no-border">
            <div className="icon anniversary orange">
              <span>50</span>
              <small>yrs</small>
            </div>
            <div className="content">
              <h4>McAlvain 50 year Anniversary</h4>
              <p>Friday November 21, 2025</p>
            </div>
          </div> */}

          <div style={{ textAlign: "center" }}>
            <button className="see-more" onClick={() => (window.location.href = `${window.location.origin}/sites/TheSource/SitePages/Birthday-Work-Anniversary-Detail-Page.aspx`)}>
              See More
            </button>
          </div>
        </div>
      </section>
    );
  }

  public componentDidMount = async () => {
    await this.getCelebrationData();
  }

  private getCelebrationData = async () => {
    try {
      const CelebrationDetails = await sp.web.lists.getByTitle("BirthdayWorkAnniversary").items.select("ID,Title,Date,CelebrationType,IconText").orderBy("Modified", false).top(5)();

      if (CelebrationDetails.length > 0) {
        this.setState({ celebrationData: CelebrationDetails });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
