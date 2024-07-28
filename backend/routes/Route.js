import  express  from "express";
import { addTip, addUser,checkscoure,getUser, getTip,resetpassword} from "../controller/UsetController.js";
const Route=express.Router();
Route.post('/add',addUser);
Route.get('/users',getUser);

Route.get('/gettip',getTip);
Route.get('/reset',resetpassword);

Route.post('/tip',addTip);

Route.post('/score',checkscoure);
export default Route;

