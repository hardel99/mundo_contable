import styled from 'styled-components';

export const Btn = styled.button`
font-size: var(--type-button);
font-weight: bold;
padding: .5rem 1rem;
display:block;
border: none;
border-radius:5px;
background-color: var(--green);
color: #fff;
transition: 0.2s ease-out;
outline: none;


&:hover 
   {
    background-color: #fff;
    color: var(--black);
    border: 3px solid var(--green);
    transition: 0.2s ease-out;
    cursor: pointer;
   }

@media screen and (max-width: 760px){
   font-size: 0.8rem;
}


@media screen and (max-width: 425px){
   font-size: 0.7rem;
}
`;



