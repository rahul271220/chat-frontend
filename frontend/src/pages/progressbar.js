// src/pages/NotFound.js
import React, { useEffect, useRef, useState } from 'react';
import "./autocomplete.css"

export default function Progressbar( {duration, onComplete}){
         

// 1 sec = 30000 / duration
// 1000ml = 3000 /duration
// every second 

// 5000ml = 300px cover = 100% 1% = 300px
//  16ml = 4800/5000px
    const startTime = useRef(0);
    const [progressPercentage, setPercentage] = useState();
    const requestRef = useRef(null);
    function animate() {
        if (startTime.current === 0) {
            console.log('here');
            startTime.current = new Date().getTime();
        }
            const elapsed = new Date().getTime() - startTime.current;
            const percentage = Math.min((elapsed / duration) * 100, 100);
            console.log('hello');
            setPercentage(percentage);
            if (elapsed < duration) {
                requestRef.current = requestAnimationFrame(animate);
            }
            else {
                console.log("completed")
                onComplete('completed');
                cancelAnimationFrame(requestRef.current);
            }

    }
    useEffect(()=> {
        fetch('https://docquity.com/detect/whatsmyip.php', { responseType: 'text' }).then(res => res.text())
        .then(body => {
          console.log(body);
        })
        console.log('mounted');
        animate();
    }, [])
  return (
    <div className="progressBar">
        <div style={
            {
                'width' : progressPercentage+'%',
                'height': '100%',
                'background': 'beige'
            }
        }>

        </div>
    </div>
  );
};
