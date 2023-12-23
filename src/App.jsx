import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Transaction from './components/Transaction'
import Form from './components/Form'
import Datacontext from './data/Datacontext'
import Report from './components/Report'

function App() {

  const initState = [
    {id : 1, title : "ปล้นธนาคาร", amount : 500000},
    {id : 2, title : "เติมเกม", amount : -20000},
    {id : 3, title : "ตีกะหรี่", amount : -100000}
  ]

  //report
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  
  const [items, setItems] = useState(initState)

  const addNewData  = (newData) => {
    setItems((prevItem => {
      return [newData, ...prevItem]
    }));
  }

  useEffect( () => {
    const amounts = items.map( items => items.amount)
    const income = amounts.filter( element => element > 0).reduce((total, element) => total += element, 0) // กรองข้อมูลที่เป้นค่า + ไว้ใน array income
    const expense = (amounts.filter( element => element < 0).reduce((total, element) => total += element, 0))*-1  // กรองข้อมูลที่เป้นค่า - ไว้ใน array expense
  
    setReportIncome(income)
    setReportExpense(expense)
  },[items, reportIncome, reportExpense])

  return (
    <Datacontext.Provider value={{
      income : reportIncome,
      expense : reportExpense
    }}> {/* Provider เป็นการส่งข้อมูล */}
        <div className='container'>
          <h2>บัญชีรายรับ - รายจ่าย</h2>
          <Report/>
          <Form addData={addNewData}/>
          <Transaction data={items}/> 
          {/* ส่ง data ไปให้ Transaction component */}
        </div>
    </Datacontext.Provider>
    
  )
}

export default App
