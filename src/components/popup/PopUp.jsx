import React from 'react'
import Form from './form/Form.jsx'
function PopUp({ setPopUp }) {
  return (
    <div className='fixed inset-0 bg-transparent bg-opacity-50 z-50 flex justify-center items-center'>

        <div className="popup-sec">
            <div className="left-popup">

            </div>
            <div className="right-popup">
                <Form  setPopUp={setPopUp}/>
            </div>
        </div>
        
    </div>
  )
}

export default PopUp