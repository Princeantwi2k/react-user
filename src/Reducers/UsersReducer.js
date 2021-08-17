
import { ADD_USER } from "../Action/AddAction"

const initialState = {users: [
    {
      fullname: "prince",
      email: "antwi2k@gmail.com",
      gen: 23,
      contact: "09873944330",
    },

    {
      fullname: "antwi",
      email: "prince@email.com",
      gen: 4,
      contact: "02311398390",
    },
    {
      fullname: "eunege",
      email: "eunege@email.com",
      gen: 7,
      contact: "0987398390",
    },
  ],}

  let UsersReducers =  (state = initialState , action) => { 
      switch (action.type) {
          case ADD_USER :
              return {...state,users:[...state.users,action.payload]};
             
      
          default:
              return state
      }
  }
  export default UsersReducers
