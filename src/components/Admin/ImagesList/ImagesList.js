import React from "react";
import "./ImagesList.css";
import Phone from "../Phone/Phone";
import Spinner from "../../Spinner/Spinner";
import { CardDeck, CardGroup, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Image from "./Image";
import FileInput from "../../ImagePicker/FileInput";
import ImageForm from "../../ImagePicker/ImageForm";

class ImagesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { images, onClick, onSubmit } = this.props;

        if (images == null)
            return <Spinner isSpinning={true} />

        return (
            <React.Fragment>
                <div className="image-container d-flex">
                    {images.map((item) =>
                        <Image image={item} onClick={onClick} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default ImagesList;