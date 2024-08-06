import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;

const InputField = ({ type, value, onChange, placeholder }) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default InputField;
