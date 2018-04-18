import React from "react";
import { Button } from "reactstrap";

class UserInfo extends React.Component {
    render() {
        let { onClick, signOut } = this.props;
        let { Avatar, Name, Email } = this.props.user;
        return (
            <div className="card sticky-top text-center">
                <div className="user-avatar" onClick={onClick}>
                    <img src={Avatar} />
                </div>
                <div class="card-body">
                    <h4 class="card-title">{Name}</h4>
                    <p class="card-text">{Email}</p>
                    <Button onClick={signOut}>Sign Out</Button>
                </div>
            </div>
        );
    }
}

export default UserInfo;