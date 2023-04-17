import React, { Component } from "react"
import Comment from "./Comment"

export default class Post extends Component {
    render() {
        // map data to an array of jsx components
        const commentComponents = this.props.comments.map((comment, index) => {
            return (
                <Comment 
                // passing in the data we want to render in each component as props
                    key={`comment-${index}`}
                    text={comment}
                />
            )
        })
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>by: {this.props.author}</p>
                <p>{this.props.body}</p>
                {/* rendering an array of components */}
                {commentComponents}
            </div>
        )
    }
}