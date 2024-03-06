import React from 'react'

function Featutebox(props) {
  return (
    <div className='a-box'>
    <div class='a-b-img'>
    <img src={props.image} alt='' />



    </div>
    <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>For More Contact us.</p>
    </div>
    </div>
  )
}

export default Featutebox;