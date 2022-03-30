import react, {useState} from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import Test from './components/Test';


import './App.css';


function App() {
  // const [show, setShow] = useState(true);

  // const setHandle = () => {
  //  (setShow(prev => !prev))
  // };

 
  return (
   <div>
     <Header />
     <Meme  />
   </div>
  );
}

export default App;




// const toggle = (id) => {
//   setBox( previousSquare => {
//      return previousSquare.map( prev => {
//        return  prev.id === id ? {...prev, on : !prev.on} : prev
//      })
//   } )
// }




// { show && <Test  />}
// <button onClick={ setHandle }>Toggle Window Tracker</button>
// <div style={{ minHeight:'1000px' }}></div>