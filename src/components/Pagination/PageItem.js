import React from "react";
import { Link } from "react-router-dom";

class PageItem extends React.Component {
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        let { number, changePage } = this.props;
        changePage(number);
	}


	render(){
		let { number } = this.props;

		return (
            <li className="page-item" onClick={this.onClick}><a className="page-link" href="#">{number}</a></li>
		);
	}
}

export default PageItem;