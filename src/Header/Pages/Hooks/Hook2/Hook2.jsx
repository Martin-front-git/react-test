import React, { useState } from 'react'

function Hook2() {
  
      const [state, setstate] = useState({
          date: Date.now(),
          name : 'Martin',
          number : 50
      });
      let change=()=>{
          setstate({
              ...state,
              number:  Math.trunc(Math.random() * 50)
          })
      }
    return (
        <div>
            <pre>{JSON.stringify(state, null , 1)}</pre>
            <button className='btn btn-default' onClick={change}>Popoxel</button>
        </div>
    )
}

export default Hook2;
