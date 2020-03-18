import { combineReducers } from "redux";
import EventsReducer from "./EventsReducer";
import BlogPostsReducer from "./BlogPostsReducer";
import CrewMembersReducer from "./CrewMembersReducer";
import CampApplicationsReducer from "./CampApplicationsReducer";
import ApplicationsCommentsReducer from "./ApplicationsCommentsReducer";
import ApplicationsRepliesReducer from "./ApplicationsRepliesReducer";
import PageReducer from "./PageReducer";

export default combineReducers({
  events: EventsReducer,
  blogPosts: BlogPostsReducer,
  crewMembers: CrewMembersReducer,
  campApplications: CampApplicationsReducer,
  applicationsComments: ApplicationsCommentsReducer,
  applicationReplies : ApplicationsRepliesReducer,
  page: PageReducer
});
