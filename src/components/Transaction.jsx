import React from 'react'
import Item from './Item'
import './Transaction.css'

function Transaction({data}) {
  return (
    <ul className='item-list'>
        {data.map((element) => {
            return <Item {...element} key = {element.id}/>
            //เมื่อมีการ map ควรกำหนด key ด้วย
            // {...element} คือ title={element.title} amount={element.amount}
        })}
    </ul>
  )
}

export default Transaction