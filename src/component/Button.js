import React from 'react';
import '../style/Button.css';
function Button({buttonItem,eventhandle}){
  return(

    <>
<div className='btncontainer'>
{buttonItem.map((item)=>(<button className='btn' onClick={eventhandle} value={item}>{item}</button>))}
</div>
    </>
  );
}
export default Button;