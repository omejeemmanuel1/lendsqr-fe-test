import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react"
import './App.css';
import Login from './components/Login';
import UserPage from './components/UserPage'
import UserDetail from './components/UserDetail';



function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setUserData(data);
    })
    .catch((err) => {
      console.log(err.message)
    })
     
}, []);

  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/' exact element={<Login />} />
           <Route path='/userpage' element={<UserPage data={userData} />} />
           <Route path='/userpage/:id' element={<UserDetail />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
