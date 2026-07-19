import * as React from "react";
import styles from "./Events.module.scss";
import { IEventsProps } from "./IEventsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { MSGraphClient, SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import { sp } from "../../../services/pnpClient";
import * as moment from "moment";

require("../assets/style.css");
const localizer = momentLocalizer(moment);
export interface IEventsState {
  upcomingEvents: any;
  sSingleValueDropdown: string;
  sIsDropdownSelected: boolean;
  sAllEvents: any[];
}
export default class Events extends React.Component<IEventsProps, IEventsState> {
  private graphClient: MSGraphClient = null;
  constructor(props: IEventsProps, state: IEventsState) {
    super(props);
    this.state = {
      upcomingEvents: [],
      sSingleValueDropdown: "",
      sIsDropdownSelected: false,
      sAllEvents: [],
    };
  }
  public render(): React.ReactElement<IEventsProps> {
    const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

    return (
      <section>
        <div className="events-card">
          <div className="card-header">
            <span className="accent"></span>
            <h3>Events</h3>
          </div>
          {this.state.sAllEvents.length > 0 ? (
            this.state.sAllEvents.map((eve, ind) => {
              return (
                <div className="event-item" key={eve.id || ind}>
                  <h4>{eve.Title}</h4>
                  <p>{eve.startDate1 ? moment(eve.startDate1).format("dddd, MMMM DD, YYYY") : "Date not available"}</p>
                </div>
              );
            })
          ) : (
            <div className="event-item">
              <p>No upcoming events</p>
            </div>
          )}
        </div>
      </section>
    );
  }

  public componentDidMount = async () => {
    await this.getUpcomingEvents();
  }

  private getUpcomingEvents = async () => {
    let lAllEventsData = [],
      lAllOptions = [],
      NewArray = [],
      array = [];
    let index = 0;
    try {
      await this.props.spfxContext.msGraphClientFactory.getClient().then(async (client: MSGraphClient) => {
        let groupId = "2e58377d-bda5-466d-bb25-3394dfc1083d";

        try {
          await client
            .api(`/groups/${groupId}/calendar/events`)
            .version("v1.0")
            .filter(`start/dateTime ge '${new Date().toISOString()}'`)
            .orderby("start/dateTime")
            .top(5)
            .get((err, res?: any) => {

              if (err) {
                return;
              }
              if (!res || !res.value) {
                return;
              }

              res.value.forEach(async (element, i) => {
                index = i;

                let StartDate = "";
                let EndDate = "";
                try {
                  // Graph returns UTC; render in the browser's local zone.
                  // (moment.utc(x).local() ≡ the old moment-timezone
                  // Moment.tz(x,"UTC").tz(browserTz) without the ~500 KB tz db.)
                  StartDate = element.start?.dateTime ? moment.utc(element.start.dateTime).local().format("YYYY-MM-DDTHH:mm:ss") : "";
                  EndDate = element.end?.dateTime ? moment.utc(element.end.dateTime).local().format("YYYY-MM-DDTHH:mm:ss") : "";
                } catch (e) {
                  StartDate = element.start?.dateTime ? moment.utc(element.start.dateTime).format("YYYY-MM-DDTHH:mm:ss") : "";
                  EndDate = element.end?.dateTime ? moment.utc(element.end.dateTime).format("YYYY-MM-DDTHH:mm:ss") : "";
                }

                let categoryMatch = false;
                if (this.state.sIsDropdownSelected == true) {
                  if (element.categories && element.categories.length > 0 && element.categories[0] == this.state.sSingleValueDropdown) {
                    categoryMatch = true;
                  }
                } else {
                  categoryMatch = true;
                }

                if (categoryMatch) {
                  lAllEventsData.push({
                    id: element.id,
                    Title: element.subject || "",
                    isAllDay: element.isAllDay || false,
                    attendees: element.attendees || [],
                    categories: element.categories || [],
                    recurrence: element.recurrence || null,
                    type: element.type || "",
                    iCalUId: element.iCalUId || "",
                    ownerName: element.organizer?.emailAddress?.name || "",
                    location: element.location?.displayName || "",
                    EventDateDay: StartDate ? moment(StartDate).date() : "",
                    EventDateMonth: StartDate ? moment(StartDate).format("MMMM") : "",
                    EventDate: StartDate ? moment(StartDate).format("DD MMMM YYYY") : "",
                    EndDateDay: EndDate ? moment(EndDate).date() : "",
                    EndDate: EndDate,
                    StartDate: StartDate,
                    startDate1: StartDate ? moment(StartDate).format("YYYY-MM-DD") + "T" + moment(StartDate).format("HH:mm:ss") : "",
                    endDate1: EndDate ? moment(EndDate).format("YYYY-MM-DD") + "T" + moment(EndDate).format("HH:mm:ss") : "",
                  });
                }
              });
              this.setState({ sAllEvents: lAllEventsData });
            });
        } catch (graphErr) {
        }
      });
    } catch (err) {
    }
  }
}
