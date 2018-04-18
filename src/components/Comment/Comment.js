import React from "react";
import StarRating from 'react-star-rating-component';

class Comment extends React.Component {
    render() {
        let { text, username, avatar, grade } = this.props;

        return (
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle user-avatar" src={avatar} alt="avatar" />
                <div className="media-body">
                    <div className="d-flex">
                        <h5 className="mt-0">{username}</h5>
                        <StarRating value={grade} editing={false}/>
                    </div>
                    {text}
                </div>
            </div>
        );
    }
}

export default Comment;