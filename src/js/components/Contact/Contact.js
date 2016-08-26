import './Contact.scss'
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Contact extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showDetails:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    id: PropTypes.number.isRequired,
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
  };

  handleClick(contact_id) {
    this.setState({showDetails: !this.state.showDetails})
  }
  render () {
    let showButton = (this.state.showDetails) ? "fa fa-toggle-on": "fa fa-toggle-off"
    let name = `${this.props.contact.name.first[0].toUpperCase()}.${this.props.contact.name.last}`
    let details;
    if(this.state.showDetails){
      details = (
        <div>
          <span>{this.props.contact.name.first}</span>
          <span>{this.props.contact.name.last}</span>
          <div>{this.props.contact.email}</div>
        </div>
      );
    } else {
      details = (
        <div><span>{name}</span></div>
      )
    }
    return (
      <li className="contactListItem">
        <div className="contactInfos">
            {details}
        </div>
        <div className="contactActions">
          <button className="btn btn-default btnAction" onClick={() => this.handleClick(this.props.id)}>
            <i className={showButton} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.deleteContact(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

