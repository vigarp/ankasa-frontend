// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp';
import Flights from './flights';
import Users from './users';
import UserID from './userByID';
import EditPicLink from './editPicLink';
import EditBiodata from './editBiodata';
import PostFlight from './postFlightDetail'

const rootReducers = combineReducers({
  login,
  signUp,
  Flights,
  Users,
  UserID,
  EditPicLink,
  EditBiodata,
  PostFlight
})

export default rootReducers