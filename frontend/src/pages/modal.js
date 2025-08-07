import { useState, useCallback, useEffect } from "react";

import './modal.css'
export default function Modalpopup({header, content , hideModal}) {


   function handleKeyEvent(e) {
    console.log(e);
    document.getElementById('modal').classList.add('animate-class')
    hideModal();
    setTimeout(() => {
 
    }, 2100);
    //
    }

    useEffect(()=> {
        document.addEventListener('keydown', handleKeyEvent )
        return () => {
            document.removeEventListener('keydown', handleKeyEvent);
        }
    }, [])
    return <div id="modal" role="modal"  className="modal">modal
    <div className="modal-body">
        <div className="modal-header">
            {header}
        </div>
        <div className="modal-content">
            {content}
        </div>
    </div>
    </div>
}