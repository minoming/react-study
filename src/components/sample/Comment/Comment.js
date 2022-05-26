import React from "react";

function Commnet(props) {
    return(
        <div className="comment">
            <div>
                <img className="comment-image" src="./assets/component/comment/commentImage.png"></img>
            </div>
            <div className="comment-container">
                <span className="name-text">{props.name}</span>
                <span className="comment-text ">{props.comment}</span>
            </div>
        </div>
    );
}

export default Commnet;
