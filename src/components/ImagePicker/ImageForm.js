import React from "react";
import { Field, reduxForm } from "redux-form";
import FileInput from "./FileInput";

class ImageForm extends React.Component {
    handleChange(e) {
        e.preventDefault();
    }

    render() {
        let { onSubmit, handleSubmit, submitSucceeded, toggle } = this.props;

        if (submitSucceeded)
        {
            toggle();
        }            

        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <Field name="Photo" type="file" component={FileInput} />
                </div>
                <button type="submit">Submit</button>
            </form >
        );
    }
}

export default reduxForm({ form: "imageForm" })(ImageForm);