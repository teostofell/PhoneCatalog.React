import React from "react";



class Checkbox extends React.Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		let { filter, label } = this.props;

		if(event.target.checked)
			this.props.onChecked(filter, label);
		else
			this.props.onUnchecked(filter, label);
	}

	render(){
		return (
			<React.Fragment>
				<input type="checkbox" defaultChecked={ false } onChange={this.handleChange} />
				<label>{ this.props.label }</label>
			</React.Fragment>
		);
	}
}

export default Checkbox;