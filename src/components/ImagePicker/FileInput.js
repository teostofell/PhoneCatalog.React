import React from "react";
import "./ImagePicker.css";

class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { file: null, imageSrc: "" }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        let { input: { onChange } } = this.props;

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.setState({
                file: file,
                imageSrc: reader.result
            });
            onChange(reader.result.split(',')[1]);
        }
    }

    render() {
        return (
            <div className="my-2">
                <img className="image-preview" alt="preview" src={this.state.imageSrc} />
                <input
                    type="file"
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default FileInput;