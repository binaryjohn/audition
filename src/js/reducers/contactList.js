import * as type from '../actions/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  contacts: [
    {
      id:123,
      name: {
        first:"William",
        last: "Weatherspoon"
      },
      age: 41,
      email: "binaryjohn@aol.com",
      occupation: "web dev"
    },
    {
      id:456,
      name: {
        first:"Walter",
        last: "White"
      },
      age: 789,
      email: "bluedream@aol.com",
      occupation: "meth cook"
    },
    {
      id:101,
      name: {
        first:"Buddy",
        last: "Holly"
      },
      age: 36,
      email: "flyaway@aol.com",
      occupation: "part-time dreamer"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case type.ADD_CONTACT:
      let id = psuediGUID()
      return {
        ...state,
        contacts: [...state.contacts,
          {
            id,
            name: action.contact.name,
            email: action.contact.email,
            occupation: action.contact.occupation,
            age: action.contact.age
          }
        ]
      }
      break;
    case type.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      }
      break;
    case type.VIEW_CONTACT:
    default:
      return state
  }
}

function psuediGUID(){
  return Math.floor(Math.random()*100)
}
