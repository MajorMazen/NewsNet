import React, { Component } from "react";
import PostsOfLink from "./PostsOfLink";
import PostGet from "../network/PostGet";
import UserNavBar from "./UserNavBar";
import AuthService from "../network/AuthService";
import { Redirect } from "react-router-dom";
import { Domain } from "../domain";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.PostGet = new PostGet();
    this.AuthService = new AuthService();
    this.domain = Domain;
    this.id = this.AuthService.getUserInfo().id;

    this.state = {
      name_error: false,
      name_errormsg: "", //error fetching user name
      username: ""
    };
  }

  componentDidMount = async () => {
    if (this.id === this.props.match.params.id) {
      return;
    }

    try {
      //get user name
      const username = await this.PostGet.safeGet(
        this.domain + "/users/name/" + this.props.match.params.id
      ); //get user name
      this.setState({
        name_error: false,
        username: username.name
      });
    } catch (e) {
      this.setState({
        name_error: true,
        name_errormsg: "Profile fetch error"
      });
    }
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    //needed if user types in the link to user profile instead of press on user name (passing username as a given value)
    if (this.id === this.props.match.params.id) {
      return <Redirect to="/me" />;
    }
    ///
    else if (this.state.name_error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.state.name_errormsg}
        </div>
      );
    }

    //passing name and user id to usernavbar, passing router link to posts of link
    else {
      return (
        <div className="UserPage">
          <UserNavBar
            Name={this.state.username}
            id={this.props.match.params.id}
          />
          <PostsOfLink url={this.props.match.url} />
        </div>
      );
    }
  }
}

export default UserPage;
