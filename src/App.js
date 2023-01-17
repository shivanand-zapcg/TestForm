import { useEffect, useState } from 'react';
import './App.css';
import { FormPage } from './pages/from';

function App() {

  const [form, setForm] = useState([])
  useEffect(() => {
    // console.log(form)
    return () => {
    }
  }, [form])
  const updateForm = (object) =>{
    console.log(object)
  }

  return (
    <FormPage update= {updateForm}/>
  );
}

export default App;
