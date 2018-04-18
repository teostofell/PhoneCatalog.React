import React from "react";
import { connect } from "react-redux";
import Checkbox from "./Checkbox";


class CheckboxFilter extends React.Component {
	render(){
		let values = this.props.values;
		let { field, label, onChecked, onUnchecked } = this.props;
		console.log(this.props, "fltr");

		if(values === undefined) return null;

		return(
			<div className="filter_block border-bottom py-3">
				<h5 className="filter_header">{ label }</h5>
				<div className="filter_items py-2">
					{
						Object.keys(values).map((item) =>
							<div className="filter_item" key={item}>                            
								<Checkbox filter={field} value={values[item]} label={item} onChecked={onChecked} onUnchecked={onUnchecked}/>
							</div>                    
						)
					}
				</div>
			</div>
		);
	}
}

export default CheckboxFilter;