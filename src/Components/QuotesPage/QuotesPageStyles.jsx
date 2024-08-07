import styled from 'styled-components';

export const QuotesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color:  ;
`;

export const LogoutButton = styled.button`
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const PaginationButton = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: ${props => (props.primary ? '#6200ea' : 'white')};
  color: ${props => (props.primary ? 'white' : '#6200ea')};
  border: 1px solid #6200ea;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${props => (props.primary ? '#3700b3' : '#e8eaf6')};
  }
`;

export const AddQuoteButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: darkgreen;
  }
`;
