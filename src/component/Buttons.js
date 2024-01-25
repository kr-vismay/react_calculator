import React from 'react';
import '../style/Buttons.css';
import Button from './Button';

function Buttons({onclickbutton}){
    let buttonList = ['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.'];
    return(
        <>
        <div className='btncontainer'>
        <Button buttonItem={buttonList} eventhandle = {onclickbutton}></Button>
        </div>
    
        </>
        );
}
export default Buttons;