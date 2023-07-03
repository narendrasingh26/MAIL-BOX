import React from 'react'
// import Button from 'react-bootstrap/Button';
import Login from './component/pages/Login'
import Main from './component/pages/Main'
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Login/>
       <Route path='/main'>
        <Main/>
       </Route>
    </div>
  )
}

export default App