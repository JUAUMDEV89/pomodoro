import { ContainerModal } from './style';

import { AiFillCloseCircle } from "react-icons/ai";

import { Counter } from '../counter';
import { useState } from 'react';

export function ModalCounter(){

    const [limitTime, setLimitTime] = useState(5);

    return(
        <ContainerModal>
            <header>
               <h4>Pomorest</h4>

               <AiFillCloseCircle />
            </header>
            <div className='main'>
              <div className='buttons'>
                <button onClick={()=>setLimitTime(limitTime + 1)}>+</button>
                <button onClick={()=>setLimitTime(limitTime - 1)}>-</button>
              </div>  
              <Counter limitTime={limitTime} />
            </div>
        </ContainerModal>
    )
}