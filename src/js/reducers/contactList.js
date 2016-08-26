import * as type from '../actions/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  contacts: [
    {
      name: {
        first:"William",
        last: "Weatherspoon"
      },
      age: 41,
      email: "binaryjohn@aol.com",
      occupation: "web dev"
    },
    {
      name: {
        first:"Walter",
        last: "White"
      },
      age: 63,
      email: "bluedream@aol.com",
      occupation: "meth cook"
    },
    {
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
    case type.DELETE_CONTACT:
    case type.VIEW_CONTACT:
    default:
      return state
  }
}

function psuediGUID(){
  return Math.floor(Math.random()*100)
}
