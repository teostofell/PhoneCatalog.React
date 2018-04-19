import React from "react";
import { ListGroup } from "reactstrap";
import User from "../User/User";
import Spinner from "../../Spinner/Spinner";

class UserList extends React.Component {
    render() {
        let { users, roles, onChange } = this.props;

        if (users == null)
            return <Spinner isSpinning={true} />;

        return (
            <ListGroup>
                {
                    users.map((u) => (
                        <User user={u} roles={roles} onChange={onChange} />
                    ))
                }
            </ListGroup>
        );
    }
}

export default UserList;