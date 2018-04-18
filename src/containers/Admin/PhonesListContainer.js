import React from "react";
import { connect } from "react-redux";
import { fetchPhonesList, fetchMorePhones } from "../../actions/adminActions";
import PhonesList from "../../components/Admin/PhonesList/PhonesList";
import Api from "../../utils/Api";

class PhonesListContainer extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchPhones();
    }

    onClick(id){
        Api.deletePhone(id, this.props.token)
            .then(response => {
                this.forceUpdate()
            });
    }

    render() {
        let { phones, incrementPhonesList } = this.props;
        return (
            <section className="admin-phone-section">
                <PhonesList onClick={this.onClick} phones={ phones }  incrementPhonesList={incrementPhonesList}/>
            </section>            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        phones: state.admin.phonesList.items,
        total: state.admin.phonesList.total,
        token: state.login.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhones: () => {
            dispatch(fetchPhonesList());
        },
        incrementPhonesList: () => {
            dispatch(fetchMorePhones());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesListContainer);
