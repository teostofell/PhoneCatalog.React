import React from "react";
import { connect } from "react-redux";
import Api from "../../utils/Api";
import ImagesList from "../../components/Admin/ImagesList/ImagesList";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { Button } from "reactstrap";

class PhoneImagesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { images: [], isPickerOpen: false };

        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    handleClick(e) {
        this.setState({ isPickerOpen: !this.state.isPickerOpen });
    }

    onClick(id) {
        Api.removePhonePhoto(id).then(response => {
            this.setState({ images: null });

            Api.getPhonePhotos(this.props.match.params.phoneId)
                .then((response) => this.setState({ images: response }));
        });
    }

    onSubmit(values) {
        Api.addPhonePhoto(this.props.match.params.phoneId, values).then((response) => {
            this.setState({ images: null });

            Api.getPhonePhotos(this.props.match.params.phoneId)
                .then((response) => this.setState({ images: response }));
        })
    }

    componentDidMount() {
        Api.getPhonePhotos(this.props.match.params.phoneId)
            .then((response) => this.setState({ images: response }));
    }
    render() {
        return (
            <React.Fragment>
                <ImagePicker isOpen={this.state.isPickerOpen} toggle={this.handleClick} onSubmit={this.onSubmit} />
                <div>
                    <ImagesList onSubmit={this.onSubmit} images={this.state.images} onClick={this.onClick} />
                </div>
                <Button onClick={this.handleClick}>Add new</Button>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PhoneImagesContainer);