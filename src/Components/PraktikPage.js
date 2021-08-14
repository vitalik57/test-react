import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PraktikPage extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then(response =>
      // console.log(response.data)
      {
        this.setState({
          users: response.data
        });
      }
    );
  }

  render() {
    return (
      <>
        <h1>PostPage</h1>
        {this.state.users.map(user => (
          <div>
            <li id={user.id}>{user.title}</li>
            <Link to="/post">
              <button type="button">Post</button>
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default PraktikPage;
