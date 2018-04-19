import React from "react";
import { ListGroupItem } from "reactstrap";
import RoleSelector from "./RoleSelector";
import "./User.css";

class User extends React.Component {
    render() {
        let { roles, onChange } = this.props;
        let { Name, Role, Id, Avatar } = this.props.user;
        return (
            <ListGroupItem className="mb-3">
                <div className="media">
                    <img className="d-flex mr-3 rounded-circle user-avatar" src={Avatar} alt="avatar" />
                    <div className="media-body">
                        <h5 className="mt-0">{Name}</h5>
                        <RoleSelector roles={roles} defaultValue={Role} userId={Id} onChange={onChange} />
                    </div>
                </div>
            </ListGroupItem>
        );
    }
}

export default User;