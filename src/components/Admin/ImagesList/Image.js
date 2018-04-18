import React from "react";
import Phone from "../Phone/Phone";
import Spinner from "../../Spinner/Spinner";
import { CardDeck, CardGroup, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Image extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onClick(this.props.image.Id);
    }

    render() {
        let { Path, Id } = this.props.image;
        let { onClick } = this.props;

        return (
            <div className="gallery-image m-2">
                <button onClick={this.handleClick} type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src={Path} />
            </div>
        );
    }
}

export default Image;