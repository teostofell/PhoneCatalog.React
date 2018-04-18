import React from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ImageForm from "./ImageForm";

class ImagePicker extends React.Component {
    render() {
        let { isOpen, toggle, onSubmit } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Upload image</ModalHeader>
                <ModalBody>
                    <ImageForm toggle={toggle} onSubmit={onSubmit}/>
                </ModalBody>
            </Modal>
        );
    }
}

export default reduxForm({ form: "imagePicker" })(ImagePicker);