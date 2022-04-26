import { useState, useEffect } from 'react';

import { Container } from './style';

type CounterProps = {
  limitTimeCounter: number;
  buttonValue: string;
}

export function Counter({ limitTimeCounter, buttonValue }: CounterProps) {
  console.log(limitTimeCounter)
  const COUNTDOWN_SECONDS_OF_TIME = 60 * limitTimeCounter; //25 minutes

  const [minutes, setMinutes] = useState(COUNTDOWN_SECONDS_OF_TIME / 60);
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS_OF_TIME % minutes);

  const [startCounter, setStartCounter] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
 /*
 
    useEffect(()=>{
      setTimeout(() => {
        setIsRunning(true);
        setSeconds(seconds - 1);
  
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
  
          if (minutes === 0 && seconds === 0) {
            setMinutes(0);
            setSeconds(0);
            setIsRunning(false);
          }
        }
      }, 1000);
    }, [seconds])
*/ 
  return (
    <Container>
      <div>
        <strong>{String(minutes).padStart(2, '0')}</strong>
        <strong>:</strong>
        <strong>{String(seconds).padStart(2, '0')}</strong>
      </div>
      <div>
        {
          !isRunning ? <button style={{ marginLeft: '2.5rem' }} onClick={()=>setStartCounter(true)}>{buttonValue}</button>
            :
            <div>
              <button>pause</button>
              <button style={{ marginLeft: '1rem' }} >stop</button>
            </div>
        }
      </div>
    </Container>
  )
}