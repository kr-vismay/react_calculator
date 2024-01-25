import React from 'react';
import '../style/InputFolder.css';

function InputFolder({inptxt,update}){
return(
    <>
    <input type='text' className='display' value={inptxt} ></input>
    </>
    );
}
export default InputFolder;