import React, { Component } from "react"
import Post from "./Post"

// export defualt and define a class on the same line
export default class App extends Component {
  render() {
    // define some starter post data
    const post = {
      title: "Dinos are Cool",
      author: "Stealth Stegosaurus",
      body: "I like dinos, because they are neat.",
      comments: ["🔥", "So brave 👏", "100% agree"]
    }

    return (
      <div>
        <h1>React Dino Blog 🦖</h1>

        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
        />
      </div>
    )
  }
}