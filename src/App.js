import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Note from './components/Note/Note';
import './components/Note/Note.css';
import './components/Modal/Modal.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Form displays={{display:"flex"}}/>
      <div className='notes'>
        <Note id={"7848e9a38f3"} title={"Hello world"} text={"This is a test component"}/>
      </div>
      <div className='modal'/>
    </div>
  );
}

export default App;
