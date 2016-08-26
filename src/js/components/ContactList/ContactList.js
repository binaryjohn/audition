
import React, { Component, PropTypes } from 'react';

import Contact from '../Contact/Contact';

export default class ContactList extends Component {

  static propTypes = {
    contact: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  renderList() {
    let displayName ; 
    return this.props.contacts.map((contact) =>
      (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          {...this.props.actions} />
      )
    );
  }

  render () {
    return (
      <ul className="friendList">
        {this.renderList()}
      </ul>
    );
  }
}

