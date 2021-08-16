import axios from "axios";
import React, { Component } from "react";

class NewPostPage extends Component {
  state = {
    inputValue: ""
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments?postId=1").then(response => console.log(response.data));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  addNew = async () => {
    await axios.post("https://jsonplaceholder.typicode.com/posts?userId=1", { title: this.state.inputValue });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          {" "}
          <input name="inputValue" type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button type="submit" onClick={this.addNew}>
            Add new
          </button>
        </div>
      </>
    );
  }
}

export default NewPostPage;
