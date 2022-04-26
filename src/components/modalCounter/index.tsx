import { ContainerModal } from './style';

import { AiFillCloseCircle } from "react-icons/ai";

import { Counter } from '../counter';
import { useEffect, useState } from 'react';

type sectionProps = {
  section: 'setFocusTime' | 'setBreakTime'
}

export function ModalCounter() {

  const [section, setSection] = useState<sectionProps>({ section: 'setFocusTime' });
  const [limitTime, setLimitTime] = useState(25);
  
  useEffect(()=>{
      console.log('jsdhh')
  }, [limitTime])

  return (
    <ContainerModal>
      <header>
        <h4>Pomorest</h4>

        <AiFillCloseCircle />
      </header>
      <div className='main'>
        {section.section === 'setFocusTime' && (
          <div className='buttons'>
            <button onClick={() => setLimitTime(limitTime + 1)}>+</button>
            <button onClick={() => setLimitTime(limitTime - 1)}>-</button>
          </div>
        )}
        <Counter limitTimeCounter={limitTime} buttonValue={section.section === 'setFocusTime' ? 'next' : 'start'} />
      </div>
    </ContainerModal>
  )
}