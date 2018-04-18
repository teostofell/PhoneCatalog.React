import React from "react";
import { connect } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Api from "../utils/Api";
import { SubmissionError } from "redux-form";
import { fetchFormData } from "../actions/formActions";
import Spinner from "../components/Spinner/Spinner";

class RegistrationContainer extends React.Component {
	componentDidMount() {
		this.props.getFormData();
	}

	render() {
		let { cities, onSubmit } = this.props;

		if(cities == null)
			return <Spinner isSpinning={true} />

		return (
			<div className="wrapper-center">
				<div className="container">
					<div className="row">
						<div className="welcome-block col-sm-6">
							<h1>Welcome</h1>
						</div>
						<div className="col-sm-6">
							<RegistrationForm onSubmit={onSubmit} cities={cities} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function submit(values, dispatch) {
	console.log(values, "FORM");
	if (values.Password !== values.ConfirmPassword) {
	}
	return Api.registration(values).then(response => console.log(response, "Response"))
		.catch(error => {
			console.log(error.response.data.Message, "Error")
			throw new SubmissionError({
				...error.response.data,
				_error: error.response.data.Message
			});
		});
}

const mapStateToProps = state => {
	return {
		cities: state.formData.cities,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: submit,
		getFormData: () => {
			dispatch(fetchFormData());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)