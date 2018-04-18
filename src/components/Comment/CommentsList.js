import React from "react";
import Comment from "./Comment";
import Spinner from "../Spinner/Spinner";

class CommentsList extends React.Component {
    render() {
        let { comments } = this.props;

        if (comments == null)
            return <Spinner isSpinning={true} />

        return (
            <div className="py-3">
                {comments.map((c) => (
                    <Comment text={c.Content} username={c.User.Name} avatar={c.User.Avatar} grade={c.Grade} />
                ))}
            </div>
        );
    }
}

export default CommentsList;