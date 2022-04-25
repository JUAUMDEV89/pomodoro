import { ContainerModal } from './style';

import { AiFillCloseCircle } from "react-icons/ai";

import { Counter } from '../counter';

export function ModalCounter(){
    return(
        <ContainerModal>
            <header>
               <h4>Pomorest</h4>

               <AiFillCloseCircle />
            </header>
            <div>
              <Counter limitTime={1} />
            </div>
        </ContainerModal>
    )
}