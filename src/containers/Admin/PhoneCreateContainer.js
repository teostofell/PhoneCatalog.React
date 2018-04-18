import React from "react";
import { connect } from "react-redux";
import PhoneDetailForm from "../../components/Admin/PhoneDetail/PhoneDetailForm";
import { fetchFormData } from "../../actions/formActions";
import Api from "../../utils/Api";
import { SubmissionError } from "redux-form";

class PhoneCreateContainer extends React.Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, dispatch){
        return submit(values, dispatch, this.props.token);
    }

    componentDidMount(){
        this.props.getFormData();
    }
    render(){
        let { brands, os, resolutions, onSubmit } = this.props;
        return (
            <PhoneDetailForm onSubmit={this.onSubmit} brands={brands} os={os} resolutions={resolutions} />
        );
    }
}

function submit(values, dispatch, token) {
	return Api.createPhone(values, token).then(response => console.log(response, "Response"))
		.catch(error => {
			throw new SubmissionError({
				...error.response.data,
				_error: error.response.data.Message
			});
		});
}

const mapStateToProps = (state) => {
    return {
        brands: state.formData.brands,
        os: state.formData.os,
        resolutions: state.formData.resolutions,
        token: state.login.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFormData: () => {
			dispatch(fetchFormData());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneCreateContainer);