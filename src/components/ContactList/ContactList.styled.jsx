import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
margin: 20px 0 0 40px;
`;

export const ContactCard = styled.li`

`;

export const Name = styled.span`
font-size: 16px;
font-weight: 600;
margin-right: 10px;
`;

export const Number = styled.span`
font-size: 16px;
font-weight: 600;
margin-right: 10px;
`;

export const DeleteBtn = styled.button`
font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  width: 80px;
  height: 30px;
  cursor: pointer;
  transition: transform 400ms;
  &:hover {
    background-color: lightcoral;
    color: #fff;
    border: none;
  }
`;