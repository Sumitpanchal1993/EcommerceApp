import { configureStore } from '@reduxjs/toolkit'
import redux_cart from './Reducer/Redux_Cart'
import redux_login_state from './Reducer/Redux_Login'

export default configureStore({
  reducer: {
    redux_cart: redux_cart,
    redux_login_state: redux_login_state,
  },
})
