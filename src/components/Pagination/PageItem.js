import React from "react";

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
            <li className="page-item" onClick={this.onClick}><button className="page-link" href="#">{number}</button></li>
		);
	}
}

export default PageItem;