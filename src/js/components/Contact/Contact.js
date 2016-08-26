import './Contact.scss'
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Contact extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
  };

  render () {
    let name = `${this.props.name.first[0].toUpperCase()}.${this.props.name.last}`
    return (
      <li className="contactListItem">
        <div className="contactInfos">
          <div><span>{name}</span></div>
        </div>
        <div className="contactActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.deleteContact(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

