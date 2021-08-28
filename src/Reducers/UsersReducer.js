
import { ADD_USER, DELETE_USER ,EDIT_USER} from "../Action/AddAction"

const initialState = {users: [
  
  ],}

  let UsersReducers =  (state = initialState , action) => { 
      switch (action.type) {
          case ADD_USER :
              return {...state,users:[...state.users,action.payload]};
             
              case DELETE_USER:
                let undeleted = state.users.filter((user) => user.id !== action.payload)
               return {...state,users:undeleted}

        case EDIT_USER:
          const newUser = state.users.map((users)=>users.id === action.payload.id ? action.payload : users)
          return {...state,users : newUser}
          default:
              return state
      }
  }
 
  export default  UsersReducers
