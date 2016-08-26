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
    return (
      <li className="contactListItem">
        <div className="contactInfos">
          <div><span>{this.props.name.first}</span></div>
        <div><small>xx contact in common</small></div>
        </div>
        <div className="contactActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.deleteContact(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

