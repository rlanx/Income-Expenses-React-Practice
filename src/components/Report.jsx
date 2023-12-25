import React from 'react'
import { useContext } from 'react'
import Datacontext from '../data/Datacontext'
import './Report.css'

function Report() {

    const { income, expense } = useContext(Datacontext) // ดึงข้อมูลจาก Global State ที่มาจาก App.jsx
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4 className='report-title'>ยอดคงเหลือ (บาท)</h4>
            <h2>฿ { formatNumber((income - expense).toFixed(2)) }</h2>
            <div className="report-container">
                <div>
                    <h4>รายรับ</h4>
                    <p className="report plus">฿ { formatNumber(income) } </p>
                </div>
                <div>
                    <h4>รายจ่าย</h4>
                    <p className="report minus">฿ { formatNumber(expense) } </p>
                </div>
            </div>
        </div>
    )
}

export default Report