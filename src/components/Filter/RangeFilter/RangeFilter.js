import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import RangeInput from "./RangeInput";

class RangeFilter extends React.Component {
    render() {
        let { group, onChanged } = this.props;
        return (
            <div className="filter_block border-bottom py-3">
                <h5 className="filter_header">{group}</h5>
                <InputGroup>
                    <InputGroupAddon addonType="append">
                        <RangeInput onChanged={onChanged} group={group} field="From" />
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append">
                        <RangeInput onChanged={onChanged} group={group} field="To" />
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default RangeFilter;