import { createStore,compose,applyMiddleware, combineReducers } from "redux";
import UsersReducers from "../Reducers/UsersReducer";
import { getFirebase ,reactReduxFirebase,firebaseReducer} from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import authReducer from "../Reducers/AuthReducer";
import thunk from "redux-thunk";
import firebase from '../Firebase/Config'

let reducers= combineReducers({
    user:UsersReducers,
    firebase:firebaseReducer,
    auth: authReducer
})


const store= createStore(reducers,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))



export default store