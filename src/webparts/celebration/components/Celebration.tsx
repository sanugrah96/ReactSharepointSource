import * as React from "react";
import styles from "./Celebration.module.scss";
import { ICelebrationProps } from "./ICelebrationProps";
import { escape } from "@microsoft/sp-lodash-subset";
import * as moment from "moment";
import { sp } from "../../../services/pnpClient";

require("../assets/style.css");
export interface ICelebrationState {
  celebrationData: any;
}
export default class Celebration extends React.Component<ICelebrationProps, ICelebrationState> {
  constructor(props: ICelebrationProps, state: ICelebrationState) {
    super(props);
    this.state = {
      celebrationData: [],
    };
  }
  public render(): React.ReactElement<ICelebrationProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    return (
      <section className="celebration">
        <div className="event-list">
          {this.state.celebrationData.length > 0 &&
            this.state.celebrationData.map((ele, ind) => {
              return (
                <div className="event-row">
                  <div className="event-left">
                    <div className="badge birthday"> {ele.CelebrationType === "Birthday" ? <div className="bgicon"></div> : ele.CelebrationType === "Employee Anniversary" ? <div className="bgicon1">{ele.IconText}</div> : <div className="bgicon2">{ele.IconText}</div>} </div>
                    <div className="event-text">
                      <h4>{ele.Title}</h4>
                      <span>{moment(ele.Date).format("dddd MMMM DD, YYYY")}</span>
                      <small>{ele.CelebrationType}</small>
                    </div>
                  </div>
                  <span className="tag">{ele.CelebrationType}</span>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
  public componentDidMount = async () => {
    if (this.props.topitem) {
      await this.getCelebrationData(this.props.topitem);
    }
  };

  public async componentWillReceiveProps(nextProps: Readonly<ICelebrationProps>, nextContext: any): Promise<void> {
    if (nextProps.topitem) {
      await this.getCelebrationData(nextProps.topitem);
    }
  }

  private getCelebrationData = async (item) => {
    try {
      const CelebrationDetails = await sp.web.lists.getByTitle("BirthdayWorkAnniversary").items.select("ID,Title,Date,CelebrationType,IconText").top(parseInt(item, 10))();

      if (CelebrationDetails.length > 0) {
        this.setState({ celebrationData: CelebrationDetails });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
