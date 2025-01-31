import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  background-color: ${props => props.primary ? '#007bff' : 'green'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: ${props => props.margin || '0'};

  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : 'darkgreen'};
  }
`;

const Button = ({ onClick, children, primary, margin }) => (
  <StyledButton onClick={onClick} primary={primary} margin={margin}>
    {children}
  </StyledButton>
);

export default Button;
