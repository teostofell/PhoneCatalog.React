import React from "react";
import { Input } from "reactstrap";

class RoleSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = { role: this.props.defaultValue };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let { onChange, userId } = this.props;

        this.setState({ role: e.target.value });

        onChange(userId, e.target.value);
    }

    render() {
        let { roles } = this.props;

        if(roles == null)
            return null;

        return (
            <Input type="select" name="select" id="exampleSelect" defaultValue={this.state.role} onChange={this.handleChange}>
                {
                    roles.map((r) => (
                        <option value={r.Id}>{r.Name}</option>
                    ))
                }
            </Input>
        );
    }
}

export default RoleSelector;