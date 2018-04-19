import React from "react"
import { Field, reduxForm } from 'redux-form'
import Spinner from "../../Spinner/Spinner";
import { Redirect } from "react-router-dom";
import FileInput from "../../ImagePicker/FileInput";
import { FormGroup, Label } from 'reactstrap';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="field-block">
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched && error && <div className="invalid-feedback">{error}</div>}
        </div>
    </div>
);

const SelectField = (props) => (
    <div className="field-block">
        <label>{props.label}</label>
        <div>
            <Field className="form-control" name={props.name} component="select">
                <option></option>
                {props.items.map((i =>
                    <option value={i.Id}>{i.Name}</option>
                ))}
            </Field>
        </div>
    </div>
);

class PhoneDetailForm extends React.Component {
    render() {
        const { error, handleSubmit, submitting, submitSucceeded, brands, os, resolutions } = this.props;

        if (brands == null)
            return <Spinner isSpinning={true} />

        if (submitSucceeded)
            return <Redirect to="/admin" />;

        return (
            <form onSubmit={handleSubmit} className="phone-form">
                <SelectField items={brands} name="BrandId" label="Brand" />
                <Field name="Model" component={renderField} type="text" label="Model" />
                <Field name="Slug" component={renderField} type="text" label="Slug" />
                <FormGroup>
                    <Label for="descriptionText">Description</Label>
                    <Field className="form-control" component="textarea" type="textarea" name="Description" id="descriptionText" />
                </FormGroup>
                <Field name="ReleaseYear" component={renderField} type="number" label="Release Year" />
                <Field name="Price" component={renderField} type="number" label="Price" />
                <Field name="Storage" component={renderField} type="number" label="Storage" />
                <Field name="Battery" component={renderField} type="number" label="Battery" />
                <Field name="Fingerprint" component={renderField} type="checkbox" label="Fingerprint" />
                <SelectField items={os} name="OSId" label="OS" />
                <SelectField items={resolutions} name="ScreenResolutionId" label="Screen Resolution" />
                <Field name="Photo" type="file" component={FileInput} />
                {error && <strong>{error}</strong>}
                <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
            </form>
        )
    }
}

export default reduxForm({ form: "phoneUpdate" })(PhoneDetailForm)