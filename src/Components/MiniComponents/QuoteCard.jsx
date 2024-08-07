import React from 'react';
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Card = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const QuoteContent = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const QuoteText = styled.p`
  font-size: 18px;
  margin: 0;
`;

const QuoteAuthor = styled.p`
  font-weight: bold;
  margin: 0;
  text-align: right;
`;

const VoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const VoteButton = styled.button`
  background: none;
  border: none;
  color: green;
  cursor: pointer;
  font-size: 18px;
  margin: 5px 0;

  &:hover {
    color: lightgreen;
  }
`;

const VoteButtonD = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 18px;
  margin: 5px 0;

  &:hover {
    color: lightcoral;
  }
`;

const VoteCountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const UpvoteCount = styled.span`
  color: #00ff00;
  font-size: 16px;
  margin-right: 5px;
`;

const DownvoteCount = styled.span`
  color: #ff0000;
  font-size: 16px;
  margin-left: 5px;
`;

const Separator = styled.span`
  color: #000000;
  font-size: 16px;
`;

const QuoteCard = ({ quote, onUpvote, onDownvote, onRemoveUpvote, onRemoveDownvote }) => {
  const handleUpvoteClick = () => {
    if (quote.givenVote === 'downvote') {
      alert('Already downvoted,please pick one.');
    } else {
      onUpvote(quote.id);
    }
  };

  const handleDownvoteClick = () => {
    if (quote.givenVote === 'upvote') {
      alert('Already upvoted,please pick one.');
    } else {
      onDownvote(quote.id);
    }
  };

  return (
    <Card>
      <VoteSection>
        <VoteButton onClick={() => quote.givenVote === "none" || quote.givenVote === "downvote" ? handleUpvoteClick() : onRemoveUpvote(quote.id)}>
          <FaArrowUp />
        </VoteButton>
        <VoteCountContainer>
          <UpvoteCount>{quote.upvotesCount}</UpvoteCount>
          <Separator>/</Separator>
          <DownvoteCount>{quote.downvotesCount}</DownvoteCount>
        </VoteCountContainer>
        <VoteButtonD onClick={() => quote.givenVote === "none" || quote.givenVote === "upvote" ? handleDownvoteClick() : onRemoveDownvote(quote.id)}>
          <FaArrowDown />
        </VoteButtonD>
      </VoteSection>
      <QuoteContent>
        <QuoteText>{quote.content}</QuoteText>
        <QuoteAuthor>— {quote.author}</QuoteAuthor>
      </QuoteContent>
    </Card>
  );
};

export default QuoteCard;
