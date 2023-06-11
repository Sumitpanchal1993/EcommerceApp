import { legacy_createStore as createStore } from "redux";

import rootReducer from "../Redux/Reducer/RootReducer";

const store = createStore(rootReducer)

export default store



// , +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()