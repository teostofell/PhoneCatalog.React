import React from "react"
import { Field, reduxForm } from "redux-form";
import "./LogInForm.css";
import { Alert } from "reactstrap";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field-block">
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
)

class LogInForm extends React.Component {
  render() {
    const { error, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className="login-form">
        <Field name="Email" component={renderField} type="email" label="Email Address" />
        <Field name="Password" component={renderField} type="password" label="Password" />
        {error && <Alert color="danger">{error}</Alert>}
        <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: "logIn" })(LogInForm)