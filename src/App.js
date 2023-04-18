import React, { Component } from "react"
import Post from "./Post"
import { starterPosts } from "./copy"

// export defualt and define a class on the same line
export default class App extends Component {
  state = {
    posts: starterPosts,
    author: '',
    title: '',
    body: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit the form!')
    this.setState(prevState => {
      return {
        posts: [...prevState.posts, {
          author: prevState.author,
          title: prevState.title,
          body: prevState.body,
          comments: []
        }],
        author: '',
        title: '',
        body: ''
      }
    })
  }

  handleFormInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const postComponents = this.state.posts.map((post, i) => {
      return (
        <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
          key={`post ${i}`}
        />
      )
    })

    return (
      <div>
        <h1>React Dino Blog 🦖</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="author">Author:</label>
            <input 
              type="text"
              id="author"
              placeholder="your name..."
              onChange={this.handleFormInput}
              value={this.state.author}
            />
          </div>

          <div>
            <label htmlFor="title">Post Title:</label>
            <input 
              type="text"
              id="title"
              placeholder="Post Title...."
              onChange={this.handleFormInput}
              value={this.state.title}
            />
          </div>

          <div>
            <label htmlFor="body">Post Body:</label>
            <input 
              type="text"
              id="body"
              placeholder="Enter Your Post"
              onChange={this.handleFormInput}
              value={this.state.body}
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
        {postComponents}
      </div>
    )
  }
}