import React from "react"
import { Field, reduxForm } from 'redux-form'
import Spinner from "../Spinner/Spinner";
import { Redirect } from "react-router-dom";
import FileInput from "../ImagePicker/FileInput";
import "./RegistrationForm.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field-block">
    <label>{label}</label>
    <div>
      <input className={"form-control " + (touched && (error ? "is-invalid" : "is-valid"))} {...input} placeholder={label} type={type} />
      {touched && error && <div class="invalid-feedback">{error}</div>}
    </div>
  </div>
)

const SelectField = (props) => (
  <div className="field-block">
      <label>{props.label}</label>
      <div>
          <Field className="form-control" name={props.name} component="select">
              <option value={1}></option>
              {props.items.map((i =>
                  <option value={i.Id}>{i.Name}</option>
              ))}
          </Field>
      </div>
  </div>
);

class RegistrationForm extends React.Component {
  render() {
    const { error, handleSubmit, submitting, data, submitSucceeded, cities } = this.props;

    if (submitSucceeded)
      return <Redirect to="/" />;

    return (
      <form onSubmit={handleSubmit} className="registration-form">
        <Field name="Name" component={renderField} type="text" label="Username" />
        <Field name="Email" component={renderField} type="email" label="Email Address" />
        <Field name="Password" component={renderField} type="password" label="Password" />
        <Field name="ConfirmPassword" component={renderField} type="password" label="Confirm Password" />
        <SelectField label="City" name="CityId" items={cities}/>
        <Field name="Avatar" type="file" component={FileInput} />
        {error && <strong>{error}</strong>}
        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: "registration" })(RegistrationForm)