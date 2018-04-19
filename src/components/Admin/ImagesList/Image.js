import React from "react";

class Image extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onClick(this.props.image.Id);
    }

    render() {
        let { Path } = this.props.image;

        return (
            <div className="gallery-image m-2">
                <button onClick={this.handleClick} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src={Path} />
            </div>
        );
    }
}

export default Image;