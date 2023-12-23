import React from 'react'
import { useContext } from 'react'
import Datacontext from '../data/Datacontext'

function Report() {

    const { income, expense } = useContext(Datacontext)

    return (
        <div>
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    )
}

export default Report