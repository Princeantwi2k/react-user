import { createStore,compose,applyMiddleware } from "redux";
import UsersReducers from "../Reducers/UsersReducer";
import { getFirebase ,reactReduxFirebase} from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from '../Firebase/Config'


const store= createStore(UsersReducers,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))



export default store