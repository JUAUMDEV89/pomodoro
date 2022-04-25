import styled from 'styled-components';

export const Container = styled.main`
   
  margin-top: 1.5rem; 
  width: 100%;

  strong{
      font-size: 4rem;
  }

  div{
      display: flex;
      justify-content:'center';
      width: 100%;
      padding-top: 0.7rem;

      button{
          background-color: var(--shape);
          border-radius: 0.7rem;
          border: 1px #c4bfbe solid;
          width: 4.3rem;
          height: 2.5rem;
      }

      button:hover{
          background-color: var(--red);
          color: #FFFFFF;
      }


  }
`;