import '../styles/FormStyle.css'

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />

            <label htmlFor="">Contact</label>
            <input type="phone" />

            <label htmlFor="">Email</label>
            <input type="email" />

            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="6" placeholder='Type Your Message Here' />
            <button className='btn'>Submit</button>

        </form>
    </div>
  )
}

export default Form