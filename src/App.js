import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/Header"
import Header from './components/Header';
import AddNote from './components/AddNote';
import Note from './components/Note';
import Footer from './components/Footer';
import { ProductConsumer } from './context';


const App =()=>{

  return (

    <ProductConsumer>

    {(value)=>{
      const {data} = value
      return(
        <div className="App">
          <Header/>
          <AddNote/>
          <div className='container'>
            <div className='row'>

              {data.map((note, index)=>{
                const {_id:noteID, title, content} = note
                return <Note key={noteID} id={noteID} title={title} content={content}/>
              })}
            </div>

          </div>
      
      <Footer />
    </div>
      )
    }}

    
    </ProductConsumer>
  );
}

export default App;
