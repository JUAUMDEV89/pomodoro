import styled from 'styled-components';

export const ContainerModal = styled.main`
  width: 25rem;
  height: 15rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--shape) ;

  header{
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      border-bottom: 0.5px solid #c4c2bc;
      width: 100%;
      height: 3rem;
  }
  
  .main{
    display: flex;
    align-items: center
  }

  .buttons{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-right: 0.7rem;

    button{
      background: transparent;
      font-size: 1.5rem;
    }
  }
`;