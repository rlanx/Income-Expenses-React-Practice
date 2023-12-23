import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Transaction from './components/Transaction'
import Form from './components/Form'

function App() {
  
  const [items, setItems] = useState([])

  const addNewData  = (newData) => {
    setItems((prevItem => {
      return [newData, ...prevItem]
    }));
  }

  return (
    <div className='container'>
      <h2>บัญชีรายรับ - รายจ่าย</h2>
      <Form addData={addNewData}/>
      <Transaction data={items}/> 
      {/* ส่ง data ไปให้ Transaction component */}
    </div>
    
  )
}

export default App
