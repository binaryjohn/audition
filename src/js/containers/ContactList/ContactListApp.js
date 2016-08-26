import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ContactActions from '../../actions/ContactActions';
import { ContactNew, ContactList } from '../../components';

class ContactListApp extends Component {
  static propTypes = {
    contactList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { contactList: { contacts }, actions } = this.props;

    return (
      <div className='contactListApp'>
        <h1>Contacts</h1>
        <ContactNew addContact={actions.addContact} />
        <ContactList actions={actions} contacts={contacts} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListApp);
