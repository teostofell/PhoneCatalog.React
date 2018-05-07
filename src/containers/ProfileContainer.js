import React from "react";
import { connect } from "react-redux";
import UserInfo from "../components/UserInfo/UserInfo";
import ImagePicker from "../components/ImagePicker/ImagePicker";
import { changeAvatar, signOut, fetchOrders } from "../actions/loginActions";
import OrdersList from "../components/OrdersList/OrdersList";
import { ordersSelector, userSelector } from "../selectors/ProfileSelectors";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isPickerOpen: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ isPickerOpen: !this.state.isPickerOpen });
    }

    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        let { user, onSubmit, signOut, orders } = this.props;
        return (
            <React.Fragment>
                <ImagePicker isOpen={this.state.isPickerOpen} toggle={this.handleClick} onSubmit={onSubmit} />
                <div className="container py-3">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-4">
                            <UserInfo user={user} onClick={this.handleClick} signOut={signOut} />
                        </div>
                        <div className="col-md-8">
                            <OrdersList orders={orders} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: userSelector(state),
        orders: ordersSelector(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (file) => { dispatch(changeAvatar(file)) },
        signOut: () => dispatch(signOut()),
        getOrders: () => dispatch(fetchOrders()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);