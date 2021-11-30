import React from 'react'
import Classes from '../styles/Button.css'
import Loader from './Loader'
export default function Button({lable, onClick, loading, variant, type}) {
    return (
        <button 
            className={variant==='primary'? Classes.button1 : Classes.button2} 
            onClick={()=>onClick()}
            type={type}>{loading? <Loader size={20}/> : lable}
        </button>
    )
}
