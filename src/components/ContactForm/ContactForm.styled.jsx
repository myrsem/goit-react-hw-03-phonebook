import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: solid 2px lightcoral;
  width: 300px;
  padding: 10px;
  margin: 10px 0 10px 0;
  background-color: lightblue;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  border: none;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: solid 2px lightcoral;
  }
`;

export const AddContactBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  width: 120px;
  height: 30px;
  cursor: pointer;
  border: none;
  transition: transform 400ms;
  &:hover {
    background-color: lightcoral;
    color: #fff;
  }
`;
