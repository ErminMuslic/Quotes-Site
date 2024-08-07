import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormContainer = ({ children }) => (
  <FormWrapper>
    {children}
  </FormWrapper>
);

export default FormContainer;
