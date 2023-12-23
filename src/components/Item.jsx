import React from 'react'
import './Item.css'
import PropTypes from 'prop-types'

function Item(props) {
  const status = props.amount < 0 ? "expense":"income"
  const symbol = props.amount < 0 ? "":"+"
  return (
    <li className={status}>
        {props.title}
        <div>
            {symbol}{props.amount}
        </div>
    </li>
  )
}

//ใช้ PropTypes ในการตรวจสอบชนิดของข้อมูล
Item.propTypes = {
  title : PropTypes.string.isRequired, //isRequired คือต้องกำหนดค่า ห้ามเป็นค่าว่าง
  amount : PropTypes.number.isRequired 
}

export default Item