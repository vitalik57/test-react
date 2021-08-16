import axios from "axios";
import React, { Component } from "react";
class PostPage extends Component {
  state = {
    commets: []
  };
  componentDidMount() {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.postId}`).then(response => {
        this.setState({
          commets: response.data
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleClick = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
      .then(response => console.log(response.data));
  };
  render() {
    console.log(this.props);
    return (
      <>
        {this.state.commets.map(user => (
          <div>
            <li id={user.id}>{user.email}</li>
            <li id={user.id}>{user.name}</li>
            <button type="button" onClick={this.handleClick}>
              all comments
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default PostPage;
