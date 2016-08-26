import './ContactNew.scss';

import React, { Component, PropTypes } from 'react';

export default class AddFriendInput extends Component {

  static propTypes = {
    addContact: PropTypes.func.isRequired,
    name: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      first:'',
      last:'',
      email:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit(e) {
    this.props.addContact(this.state);
    this.setState({
        first:'',
        last:'',
        email:'',
    });
  }

  render() {
    return (
      <div>
        <input type="text"
          autoFocus="true"
          className="form-control addFriendInput"
          placeholder="first"
          name="first"
          value={this.state.first}
          onChange={this.handleChange} />

        <input type="text"
          className="form-control addFriendInput"
          placeholder="last"
          name="last"
          value={this.state.last}
          onChange={this.handleChange} />
        <input type="text"
          autoFocus="true"
          className="form-control addFriendInput"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit}class="btn btn-primary">Add</button>
      </div>
    );
  }
}
