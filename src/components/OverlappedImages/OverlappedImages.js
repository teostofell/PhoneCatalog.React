import React from "react";
import "./OverlappedImages.css";


class OverlappedImages extends React.Component {
    render() {
        let { images } = this.props;

        return (
            <div className="overlapping-block">
                {
                    images.map(p => (
                        <img src={p} />
                    ))
                }
            </div>
        )
    }
}

export default OverlappedImages;