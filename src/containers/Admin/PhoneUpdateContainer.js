import React from "react";
import { connect } from "react-redux";
import PhoneDetailForm from "../../components/Admin/PhoneDetail/PhoneDetailForm";
import { fetchFormData } from "../../actions/formActions";
import Api from "../../utils/Api";
import { SubmissionError } from "redux-form";
import { brandsSelector, tokenSelector, resolutionsSelector, osSelector  } from "../../selectors/FormSelectors";

class PhoneUpdateContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { initialState: {} };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, dispatch) {
        return submit(values, dispatch, this.props.token);
    }

    componentDidMount() {
        Api.getDetailsById(this.props.match.params.phoneId)
            .then(response => {
                this.setState({ initialState: response });
            });

        this.props.getFormData();
    }
    render() {
        let { brands, os, resolutions } = this.props;
        return (
            <PhoneDetailForm enableReinitialize={true} onSubmit={this.onSubmit} brands={brands} os={os} resolutions={resolutions}
                initialValues={this.state.initialState} />
        );
    }
}

function submit(values, dispatch, token) {
    return Api.updatePhone(values, token).then(response => console.log(response, "Response"))
        .catch(error => {
            throw new SubmissionError({
                ...error.response.data,
                _error: error.response.data.Message
            });
        });
}

const mapStateToProps = (state) => {
    return {
        brands: brandsSelector(state),
        os: osSelector(state),
        resolutions: resolutionsSelector(state),
        token: tokenSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFormData: () => {
            dispatch(fetchFormData());
        },
        onSubmit: submit,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneUpdateContainer);