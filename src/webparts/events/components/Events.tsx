import * as React from "react";
import styles from "./Events.module.scss";
import { IEventsProps } from "./IEventsProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { MSGraphClient, SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import { sp } from "../../../services/pnpClient";
import * as moment from "moment";
import * as Moment from "moment-timezone";

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
                  <p>{moment(eve.startDate1).format("dddd, MMMM DD, YYYY")}</p>
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
      let aadTokenProvider = await this.props.spfxContext.aadTokenProviderFactory.getTokenProvider();
      let token = await aadTokenProvider.getToken("https://graph.microsoft.com");
      console.log(token);

      await this.props.spfxContext.msGraphClientFactory.getClient().then(async (client: MSGraphClient) => {
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

              let StartDate = Moment.tz(element.start.dateTime, "UTC").tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("YYYY-MM-DDTHH:mm:ss"); // Preserve selected time
              // let StartDate = moment(element.end.dateTime).format('YYYY-MM-DD') + 'T00:01:00';
              // let EndDate = moment(element.end.dateTime).format('YYYY-MM-DD') + 'T23:59:00';
              let EndDate = Moment.tz(element.end.dateTime, "UTC").tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("YYYY-MM-DDTHH:mm:ss");

              if (this.state.sIsDropdownSelected == true) {
                if (element.categories[0] == this.state.sSingleValueDropdown) {
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
                    EventDateMonth: StartDate ? moment(StartDate).format("MMMM") : "",
                    EventDate: StartDate ? moment(StartDate).format("DD MMMM YYYY") : "",
                    EndDateDay: EndDate ? moment(EndDate).date() : "",
                    EndDate: EndDate,
                    StartDate: StartDate,
                    startDate1: moment(StartDate).format("YYYY-MM-DD") + "T" + moment(StartDate).format("HH:mm:ss"),
                    endDate1: moment(EndDate).format("YYYY-MM-DD") + "T" + moment(EndDate).format("HH:mm:ss"),
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
                  EventDateMonth: StartDate ? moment(StartDate).format("MMMM") : "",
                  EventDate: StartDate ? moment(StartDate).format("DD MMMM YYYY") : "",
                  EndDateDay: EndDate ? moment(EndDate).date() : "",
                  EndDate: EndDate,
                  StartDate: StartDate,
                  startDate1: moment(StartDate).format("YYYY-MM-DD") + "T" + moment(StartDate).format("HH:mm:ss"),
                  endDate1: moment(EndDate).format("YYYY-MM-DD") + "T" + moment(EndDate).format("HH:mm:ss"),
                });
              }
            });
            this.setState({ sAllEvents: lAllEventsData });
          });
      });
    } catch (err) {
      console.error("Error fetching group events:", err);
    }
  }
}
