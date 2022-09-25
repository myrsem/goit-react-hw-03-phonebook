import styled from 'styled-components';

export const FilterContainer = styled.div`
 margin: 10px 0 10px 0;
`;

export const FilterInput = styled.input`
 width: 200px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    outline: solid 2px lightcoral;
  }
`;

export const FilterText = styled.p`
font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;
