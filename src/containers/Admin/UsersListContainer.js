import React from "react";
import { connect } from "react-redux";
import { fetchUsersList } from "../../actions/adminActions";
import UserList from "../../components/Admin/UserList/UserList";
import { fetchFormData } from "../../actions/formActions";
import Api from "../../utils/Api";

class UsersListContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.getFormData();
        this.props.getUsers();
    }

    onChange(userId, roleId){
        Api.changeRole(userId, roleId).then(response => response.data);
    }

    render() {
        let { users, roles } = this.props;
        return (
            <UserList users={users} roles={roles} onChange={this.onChange} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.admin.usersList,
        roles: state.formData.roles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch(fetchUsersList()) },
        getFormData: () => {
            dispatch(fetchFormData());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
