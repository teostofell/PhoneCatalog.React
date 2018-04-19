import React from "react";
import "./ImagesList.css";
import Spinner from "../../Spinner/Spinner";
import Image from "./Image";

class ImagesList extends React.Component {
    render() {
        let { images, onClick } = this.props;

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