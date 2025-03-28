import React from 'react'
import UserRegisterPage from './components/UserRegisterPage';

import {BrowserRouter , Routes, Route} from "react-router-dom";

const App = () => {
  
  return (
    <div>



<BrowserRouter>

<Routes>
  <Route  path='/register' element={<UserRegisterPage  />} />
</Routes>

</BrowserRouter>


    </div>
  )
}

export default App