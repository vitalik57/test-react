import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PraktikPage extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.postId}`).then(response =>
      // console.log(response.data)
      {
        this.setState({
          users: response.data
        });
      }
    );
  }
  addNewAdv = newPost => {
    this.setState(prevState => ({
      users: [...prevState, newPost]
    }));
  };
  render() {
    console.log(this.state);
    return (
      <>
        <h1>PostPage</h1>
        {this.state.users.map(user => (
          <div>
            <li id={user.id}>{user.title}</li>
            <Link to={`/post/${user.userId}`}>
              <button type="button">Details</button>
            </Link>
          </div>
        ))}
        <Link to="/newPost">
          {" "}
          <button type="submite">Add new</button>
        </Link>
      </>
    );
  }
}

export default PraktikPage;
