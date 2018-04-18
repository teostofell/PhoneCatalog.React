import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhonesList from "./containers/PhonesListContainer";
import { NavLink, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./containers/HeaderContainer";
import Registration from "./containers/RegistrationContainer";
import LogIn from "./containers/LogInContainer";
import Search from "./containers/SearchContainer";
import { AnimatedSwitch, spring } from "react-router-transition";
import AuthorizedRoute from './containers/AuthorizedRoute';
import { registration } from './utils/usersMethods';
import PhonesDetailContainer from "./containers/PhoneDetailContainer";
import Profile from "./containers/ProfileContainer";
import Cart from "./containers/CartContainer";
import AdminPhonesList from "./containers/Admin/PhonesListContainer";
import AdminUsersList from "./containers/Admin/UsersListContainer";
import Sidebar from './components/Admin/Sidebar/Sidebar';
import PhoneCreateContainer from "./containers/Admin/PhoneCreateContainer";
import PhoneUpdateContainer from "./containers/Admin/PhoneUpdateContainer";
import AdminHeader from "./components/Admin/Header/Header";
import PhoneImagesContainer from './containers/Admin/PhoneImagesContainer';
import AboutUsContainer from './containers/AboutUsContainer';
import Footer from './components/Footer/Footer';

//#region TODO: Do something with this

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
//#endregion

class App extends Component {
  render() {
    return (
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper">
        <Route exact path="/(search)" component={SearchPage} />
        <AuthorizedRoute exact path="/admin(.*)" component={AdminPage} />
        <Route component={DefaultPage} />
      </AnimatedSwitch>
    )
  }
}

class DefaultPage extends Component {
  render() {
    let { history } = this.props;
    return (
      <React.Fragment>
        <Header path={this.props.location.pathname}/>
        <LogIn />
        <main>
          <Switch>            
            <Route path="/" exact component={AboutUsContainer} />
            <Route path="/phones" exact component={PhonesList} />            
            <Route path="/phones/:phoneSlug" exact component={PhonesDetailContainer} />
            <Route path="/registration" component={Registration} />
            <AuthorizedRoute path="/profile" component={Profile} />
            <AuthorizedRoute path="/cart" component={Cart} history={history} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const SearchPage = () => (
  <div className="container">
    <Route path="/search" component={Search} />
  </div>
)

const AdminPage = () => (
  <React.Fragment>
    <AdminHeader />
    <div className="container py-4">
      <Switch>
        <Route exact path="/admin" component={AdminPhonesList} />
        <Route exact path="/admin/phones" component={AdminPhonesList} />
        <Route path="/admin/phones/create" component={PhoneCreateContainer} />
        <Route exact path="/admin/phones/:phoneId" component={PhoneUpdateContainer} />
        <Route exact path="/admin/photos/:phoneId" component={PhoneImagesContainer} />
        <Route path="/admin/users" component={AdminUsersList} />
      </Switch>
    </div>
  </React.Fragment>
);

export default App;
