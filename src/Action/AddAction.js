export const ADD_USER = "ADD_USER"

export const AddAction=(user)=>{
  return{ 
     type: ADD_USER,
    payload:user
}
}