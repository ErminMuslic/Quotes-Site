import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QuoteCard from '../MiniComponents/QuoteCard';
import Button from '../MiniComponents/Button';
import { QuotesContainer, LogoutButton, PaginationButton } from './QuotesPageStyles'; 

const QuotesPage = ({ token, logout }) => {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quotes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setQuotes(response.data.quotes);
      } catch (error) {
        console.error('Failed to fetch quotes:', error);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tags', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTags(response.data);
      } catch (error) {
        console.error('Failed to fetch tags:', error);
      }
    };

    fetchQuotes();
    fetchTags();
  }, [token]);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpvote = async (quoteId) => {
    try {
      const response = await axios.post(`http://localhost:8000/quotes/${quoteId}/upvote`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(quotes.map(q => q.id === quoteId ? response.data : q));
    } catch (error) {
      console.error('Failed to upvote quote:', error);
    }
  };

  const handleDownvote = async (quoteId) => {
    try {
      const response = await axios.post(`http://localhost:8000/quotes/${quoteId}/downvote`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(quotes.map(q => q.id === quoteId ? response.data : q));
    } catch (error) {
      console.error('Failed to downvote quote:', error);
    }
  };

  const handleRemoveUpvote = async (quoteId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/quotes/${quoteId}/upvote`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(quotes.map(q => q.id === quoteId ? response.data : q));
    } catch (error) {
      console.error('Failed to remove upvote:', error);
    }
  };

  const handleRemoveDownvote = async (quoteId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/quotes/${quoteId}/downvote`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuotes(quotes.map(q => q.id === quoteId ? response.data : q));
    } catch (error) {
      console.error('Failed to remove downvote:', error);
    }
  };

  const handleAddQuote = () => {
    navigate('/add-quote');
  };

  return (
    <QuotesContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
        <h2>Quotes</h2>
        <Button onClick={handleAddQuote} margin="10px">Add a New Quote</Button>
      </div>
      {currentQuotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          onRemoveUpvote={handleRemoveUpvote}
          onRemoveDownvote={handleRemoveDownvote}
        />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: Math.ceil(quotes.length / quotesPerPage) }, (_, index) => (
          <PaginationButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            primary={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </div>
    </QuotesContainer>
  );
};

export default QuotesPage;
