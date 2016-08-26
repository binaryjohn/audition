import * from './ActionTypes';

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contact
  }
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    id
  }
}
