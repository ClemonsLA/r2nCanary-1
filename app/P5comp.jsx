import p5 from 'p5';
import { useEffect, useRef, useState, Component } from 'react';



export default function P5comp(){

    const p5refs = useRef();
    let x = 50;
    let speed = 5;
  
      useEffect(()=>{
          new p5(p => {
          p.setup = () => {
              p.createCanvas(500, 400).parent(p5refs.current);
          }
  
          p.draw = () => {
                p.frameRate(30);
                // If we're travelling towards the right or left
                if (speed > 0) {
                    // If the ball has reached the end of the container or not
                    if (x + 50 < p.width) {
                        x += speed
                    } else {
                        speed = -speed;
                    }
                } else {
                    if (x - 50 > 0) {
                        x += speed;
                    } else {
                        speed = -speed;
                    }
                }
                p.clear()
                p.ellipse(x, 100, 100);
            }
          
        })
  
      },[])
  return(
    <div ref={p5refs}>
    </div>
  )
}
