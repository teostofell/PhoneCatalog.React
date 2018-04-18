import React from "react";
import { Input } from "reactstrap";

class RangeInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let { group, field } = this.props;

        this.setState({ value: event.target.value });

        this.props.onChanged(group, field, event.target.value);
    }

    render() {
        let { field } = this.props;
        return (
            <Input type="number" placeholder={field} onChange={this.handleChange} />
        )
    }
}

export default RangeInput;