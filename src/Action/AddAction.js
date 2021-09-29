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
 
return(dispatch,state,{getFirestore})=>{
  getFirestore().collection('User').doc(user_id).delete().then(()=>{})
}
}
export const editUser=(updateUser)=>{
  return(dispatch,state,{getFirestore})=>{
    getFirestore().collection('User').doc(updateUser.id).set(updateUser).then(()=>{})
  }

}

export const getALLusers=()=>{
  return(dispatch,state,{getFirestore})=>{
    getFirestore().collection('User').onSnapshot((snapshot)=>{
      let users = [];
      snapshot.forEach((doc)=>{
        users.push({...doc.data(),id:doc.id})
      })
      dispatch({
        type:'SET_ALL_USERS',
        payload:users
      })
    })
  }
}