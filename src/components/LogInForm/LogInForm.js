import React from "react"
import { Field, reduxForm } from 'redux-form'
import Spinner from "../Spinner/Spinner";
import { Redirect } from "react-router-dom";
import "./LogInForm.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="field-block">
      <label>{label}</label>
      <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
        {touched && error && <div class="invalid-feedback">{error}</div>}
      </div>
    </div>
)

class LogInForm extends React.Component {
    render(){
      const { error, handleSubmit, submitting, data, submitSucceeded } = this.props;

        return (
            <form onSubmit={handleSubmit} className="login-form">
              <Field name="Email" component={renderField} type="email" label="Email Address" />
              <Field name="Password" component={renderField} type="password" label="Password" />
              {error && <strong>{error}</strong>}
				      <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
          </form>
        )
    }
}

export default reduxForm({form: "logIn"})(LogInForm)