import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, logout, selectUser } from './features/userSlice.js';
import Login from './Login';
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        //user is logged in 
        dispatch(
          login({
            email: userauth.email,
            uid: userauth.uid,
            displayName: userauth.displayName,
            photoURL: userauth.photoURL,
          }));
      } else {
        //user is logged out 
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) :
        (
          <div className="app_body">
            <Sidebar />
            {/*sidebar*/}
            {/*feed*/}
            <Feed />
            {/* widgets */}
          </div>
        )
      }
      {/*Header*/}



    </div>
  );
}

export default App;
