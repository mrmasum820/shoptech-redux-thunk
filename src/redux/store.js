import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)));

export default store;
