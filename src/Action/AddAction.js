export const ADD_USER = "ADD_USER"
export const DELETE_USER ="DELETE_USER"
export const EDIT_USER ="EDIT_USER"

export const AddAction=(user)=>{

  return(dispatch,state,{getFirestore})=>{
    getFirestore()
    .collection("User")
    .add(user)
    .then((docs)=>{
      console.log(docs) 
    })
  }

}

export const deleteUser=(user_id)=>{
  return{ 
     type: DELETE_USER,
    payload:user_id
} 
}
export const editUser=(updateUser)=>{
  return{ 
     type: EDIT_USER,
    payload:updateUser
} 
}

export const getALLusers=()=>{
  return(dispatch,state,{getFirestore})=>{
    getFirestore().collection('User').onSnapshot((snapshot)=>{
      let users = [];
      snapshot.forEach((doc)=>{
        users.push(doc.data())
      })
      dispatch({
        type:'SET_ALL_USERS',
        payload:users
      })
    })
  }
}