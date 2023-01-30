import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route, Navigate} from "react-router-dom"
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Footer from './components/homepage/Footer';
import { ProductConsumer } from './context';


const App =()=>{

  return (
    <ProductConsumer>

      {(value)=>{
        const {isAuthenticated} = value
          return(
          <div className="App">
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/home' element={isAuthenticated? <Homepage/> : <Navigate to="/" />}/>
            </Routes>
            <Footer />
          </div>)
      }}
    </ProductConsumer>
  );
}

export default App;
