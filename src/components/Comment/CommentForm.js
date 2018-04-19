import React from "react";
import { FormGroup, Input, Button, Card, CardHeader, CardBody } from "reactstrap";
import StarRating from 'react-star-rating-component';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { grade: 1, content: "" };

        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChange(next, prev, name) {
        this.setState({ grade: next });
    }

    handleChange(e) {
        this.setState({ content: e.target.value });
    }

    handleClick() {
        let comment = {
            Grade: this.state.grade,
            Content: this.state.content,
        };

        this.props.onSubmit(comment);

        this.setState({ grade: 1, content: "" });
    }

    render() {
        return (
            <Card className="my-4">
                <CardHeader><h5>Leave a Comment:</h5></CardHeader>
                <CardBody>
                    <FormGroup>
                        <Input type="textarea" id="commentContent" value={this.state.content} onChange={this.handleChange} />
                        <StarRating value={this.state.grade} onStarClick={this.onChange} />
                    </FormGroup>
                    <Button onClick={this.handleClick}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

export default CommentForm;