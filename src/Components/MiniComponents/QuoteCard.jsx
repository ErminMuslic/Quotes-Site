import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const QuoteCard = ({ quote, onUpvote, onDownvote, onRemoveUpvote, onRemoveDownvote }) => (
  <Card>
    <p>{quote.content}</p>
    <p><strong>- {quote.author}</strong></p>
    <p>Tags: {quote.tags.join(', ')}</p>
    <p>Upvotes: {quote.upvotesCount} | Downvotes: {quote.downvotesCount}</p>
    <div>
      {quote.givenVote === "none" ? (
        <>
          <Button onClick={() => onUpvote(quote.id)} primary>Upvote</Button>
          <Button onClick={() => onDownvote(quote.id)} primary={false}>Downvote</Button>
        </>
      ) : quote.givenVote === "upvote" ? (
        <Button onClick={() => onRemoveUpvote(quote.id)} primary={false}>Remove Upvote</Button>
      ) : (
        <Button onClick={() => onRemoveDownvote(quote.id)} primary={false}>Remove Downvote</Button>
      )}
    </div>
  </Card>
);

export default QuoteCard;
