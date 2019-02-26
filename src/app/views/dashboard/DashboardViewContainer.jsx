import { compose, withProps } from "recompose";
import { connectSiteContext } from "../../../utils/siteContext";
import { accessIfAuthenticated } from "../../../utils/siteAuth";
import * as ROUTES from "../../../utils/siteRoutes";
import DashboardViewComponent from "./DashboardViewComponent";

import MapTileBG from "../../../static/img/dashboard/tiles/map.png";
import CalendarTileBG from "../../../static/img/dashboard/tiles/schedule.png";
import ApplicationTileBG from "../../../static/img/dashboard/tiles/application.png";

const dashboardTiles = {
  schedule: {
    label: "Event Schedule",
    linkTo: ROUTES.SCHEDULE,
    gridArea: "leftTop",
    backgroundImg: CalendarTileBG,
    disabled: true
  },
  map: {
    label: "Event Map",
    linkTo: ROUTES.MAP,
    gridArea: "leftBot",
    backgroundImg: MapTileBG,
    color: "black",
    disabled: true
  },
  application: {
    label: "My Application",
    linkTo: ROUTES.APPLICATION,
    gridArea: "centerTop",
    backgroundImg: ApplicationTileBG
  },
  app_review: {
    label: "Application Review",
    linkTo: ROUTES.APP_REVIEW,
    gridArea: "centerTop",
    backgroundColor: "#e3a368",
    disabled: true
  },
  attendee_list_volunteer: {
    label: "Check In Tool",
    linkTo: ROUTES.ATTENDEE_LIST_VOLUNTEER,
    gridArea: "rightTop",
    backgroundColor: "#66ADEF",
    disabled: true
  },
  attendee_list_organizer: {
    label: "Attendee List",
    linkTo: ROUTES.ATTENDEE_LIST_ORGANIZER,
    gridArea: "rightTop",
    backgroundColor: "#bb7cc1",
    disabled: true
  },
  profile: {
    label: "My Profile",
    linkTo: ROUTES.PROFILE,
    gridArea: "rightBot",
    backgroundColor: "#1ec77a"
  }
};

const userDashboards = {
  HACKER: [
    dashboardTiles.application,
    dashboardTiles.map,
    dashboardTiles.schedule,
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.profile
  ],
  ORGANIZER: [
    dashboardTiles.app_review,
    dashboardTiles.map,
    dashboardTiles.schedule,
    dashboardTiles.attendee_list_organizer,
    dashboardTiles.profile
  ],
  VOLUNTEER: [
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.map,
    dashboardTiles.schedule,
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.profile
  ],
  JUDGE: [
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.map,
    dashboardTiles.schedule,
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.profile
  ],
  GENERAL: [
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.map,
    dashboardTiles.schedule,
    dashboardTiles.attendee_list_volunteer,
    dashboardTiles.profile
  ]
};

const mapContextStateToProps = ({ state: { firebase, dashboardInfo } }) => ({
  logOut: firebase.signOutUser,
  greetingInfo: dashboardInfo.greetingInfo,
  toastInfo: dashboardInfo.toastInfo
});

const enhance = compose(
  accessIfAuthenticated,
  connectSiteContext(mapContextStateToProps),
  withProps({
    userDashboards
  })
);

export default enhance(DashboardViewComponent);
