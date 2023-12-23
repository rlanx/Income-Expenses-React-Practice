import React from 'react'
import './Form.css'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form(props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formvalid, setFormvalid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveData = (event) => {
        event.preventDefault() //เพื่อไม่ให้หน้าเว็ป re-render
        const Data = {
            id : uuidv4(),
            title : title,
            amount : Number(amount)
        }
        props.addData(Data);
        setTitle('')
        setAmount(0)
    }

    useEffect( () => {
        const checkData = title.trim().length > 0 && amount !== 0
        setFormvalid(checkData)
    },[title, amount]) // <== สามารถกำหนดให้ useEffect ทำงานเมื่อ State ที่เลือกมีการเปลี่ยนแปลงค่าได้ โดยกำหนดชื่อ State ใน []
    return (
        <div>
            <form onSubmit={saveData}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder='ระบุชื่อรายการ' onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder='ระบุจำนวนเงิน'onChange={inputAmount} value={amount}/>
                </div>
                <button type='submit' className='add-btn' disabled={!formvalid}>Add</button>
            </form>
        </div>
  )
}

export default Form