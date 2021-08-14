import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(" https://jsonplaceholder.typicode.com/users").then(response =>
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
        <div>
          <h1>UserPage</h1>
          {this.state.users.map(user => (
            <div>
              {" "}
              <li id={user.id}>{user.name}</li>{" "}
              <Link to={`/posts`}>
                <button type="button">Posts</button>
              </Link>
              {/* <Link to={`/posts/${user.id}`}>
                <button type="button">Posts</button>
              </Link> */}
              {/* <button
                type="button"
                onClick={() => {
                  console.log(this.state.users);
                }}
              >
                Posts
              </button> */}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default UserPage;
