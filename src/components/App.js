import "../styles/styles.scss";
import "./styles.scss";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header";

import { AuthProvider } from "../providers/Auth";
import history from "../history";

import AboutUs from "./../components/pages/aboutUs";

import Home from "./../components/pages/home";

import Donate from "./../components/pages/donate";

import Events from "./../components/pages/events";
import EventDetails from "./../components/pages/eventDetails";


import LeaveNoTrace from "./../components/pages/burningMan/leaveNoTrace";
import TipsAndTricks from "./../components/pages/burningMan/tipsAndTricks";
import CampWithUs from "./../components/pages/burningMan/campWithUs";

import Crew from "./../components/pages/crew";

import Blog from "./../components/pages/blog";
import PostDetails from "./../components/pages/postDetails";

import Contact from "./../components/pages/contact";

import Admins from "./../components/pages/admins";
import NewEvent from "./pages/newEvent";
import EditEvent from "./../components/pages/editEvent";
import NewPost from "./pages/newPost";
import EditPost from "./pages/editPost";
import CampApplications from "./pages/campApplications";

import UpdateProfile from "./popups/updateProfile";
import Application from "./popups/application";
import SignUp from "./popups/signUp";
import LogIn from "./popups/login";

const App = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <div className="app">

          <Application />
          <LogIn />
          <SignUp />
          <UpdateProfile />

          <Header />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about-us" exact component={AboutUs} />

            <Route path="/donate" exact component={Donate} />

            <Route path="/events" exact component={Events} />
            <Route path="/event/:id" exact component={EventDetails} />

            <Route
              path="/burning-man/leave-no-trace"
              exact
              component={LeaveNoTrace}
            />
            <Route
              path="/burning-man/tips-and-tricks"
              exact
              component={TipsAndTricks}
            />
            <Route
              path="/burning-man/camp-with-us"
              exact
              component={CampWithUs}
            />

            <Route path="/crew" exact component={Crew} />

            <Route path="/blog" exact component={Blog} />
            <Route path="/post/:id" exact component={PostDetails} />

            <Route path="/contact" exact component={Contact} />

            <Route path="/admins" exact component={Admins} />
            <Route path="/new-event" exact component={NewEvent} />
            <Route path="/edit-event/:id" exact component={EditEvent} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/edit-post/:id" exact component={EditPost} />
            <Route path="/camp-applications" exact component={CampApplications} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
