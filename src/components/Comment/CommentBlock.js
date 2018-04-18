import React from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import "./Comment.css";

class CommentBlock extends React.Component {
    render() {
        let { comments, onSubmit, isLogged } = this.props;

        return (
            <div className="comment-block container">
                {isLogged ? <CommentForm onSubmit={onSubmit} /> : null}                
                <CommentsList comments={comments} />
            </div>
        );
    }
}

export default CommentBlock;