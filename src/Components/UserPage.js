import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(" https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>{this.props.users}</h1>

          {this.state.users.map(user => (
            <div>
              {" "}
              <li id={user.id}>{user.name}</li>{" "}
              <Link to={`/posts/${user.id}`}>
                <button type="button">Posts</button>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    a: 1,
    b: 2,
    users: state.users
  };
};
export default connect(mapStateToProps)(UserPage);
