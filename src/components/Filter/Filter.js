import React, { Component } from "react";
import CheckboxFilter from "./CheckboxFilter/CheckboxFilter";
import "./Filter.css";
import Spinner from "../Spinner/Spinner";
import RangeFilter from "./RangeFilter/RangeFilter";

class Filter extends Component {
	render() {
		if(this.props.data === null)
			return <Spinner isSpinning={true}/>

		let {total} = this.props;	
		let { Brand, Os } = this.props.data;
		let { onChecked, onUnchecked, onChanged } = this.props.handlers;
		return (
			<div className="filter">
				<h4>Filter</h4>
				<div className="border-bottom py-3">
					<span>Showing <strong>{total}</strong> products</span>
				</div>
				<CheckboxFilter label="Brand" values={ Brand } field="Brand" onChecked={onChecked} onUnchecked={onUnchecked}/>
				<CheckboxFilter label="OS" values={ Os } field="Os" onChecked={onChecked} onUnchecked={onUnchecked}/>
				<RangeFilter group="Price" onChanged={onChanged}/>
				<RangeFilter group="Storage" onChanged={onChanged}/>
			</div>
		);
	}
}
  
export default Filter;