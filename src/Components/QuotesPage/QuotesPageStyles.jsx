import styled from 'styled-components';

export const QuotesContainer = styled.div`
  padding: 20px;
  background-color: #f0f2f5;
`;

export const QuoteCard = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const QuoteText = styled.p`
  font-size: 18px;
  margin: 0 0 10px;
`;

export const QuoteAuthor = styled.p`
  font-weight: bold;
  margin: 0 0 10px;
`;

export const QuoteTags = styled.p`
  margin: 0 0 10px;
  color: #666;
`;

export const QuoteVotes = styled.p`
  margin: 0;
`;

export const LogoutButton = styled.button`
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const VoteButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-of-type {
    background-color: #28a745;
    color: white;

    &:hover {
      background-color: #218838;
    }
  }

  &:last-of-type {
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const AddQuoteButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PaginationButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.primary ? '#007bff' : '#e9ecef'};
  color: ${props => props.primary ? 'white' : '#007bff'};

  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : '#d6d6d6'};
  }
`;
