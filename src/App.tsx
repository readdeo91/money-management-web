import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import SignIn from "./sign-in/Login";

function App() {
  return (

    <div className="App">
        <BrowserRouter>
            <Routes>
                {/*<PrivateRoute path='/login' element={SignIn()} />*/}
            </Routes>
        </BrowserRouter>
        <SignIn></SignIn>
    </div>
  );
}

export default App;
