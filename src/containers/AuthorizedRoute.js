import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";



class AuthorizedRoute extends React.Component {
    render() {
      const { component: Component, isLogged, ...rest } = this.props
      console.log(this.props, "InRoute");
      return (
        <Route {...rest} render={props => {
          return isLogged
            ? <Component {...this.props} />
            : <Redirect to="/" />
        }} />
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
      isLogged: state.login.isLogged,
    };
  };
  
  export default connect(mapStateToProps)(AuthorizedRoute)