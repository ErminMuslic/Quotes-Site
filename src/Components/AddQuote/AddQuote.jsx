import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AddQuoteContainer, AddQuoteForm, AddQuoteLabel, AddQuoteInput, AddQuoteButton } from './AddQuoteStyles';

const AddQuotePage = ({ token }) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const tagsArray = tags.split(',').map(tag => tag.trim());
      await axios.post('http://localhost:8000/quotes', { content, author, tags: tagsArray }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/quotes');
    } catch (error) {
      console.error('Failed to add quote:', error);
      alert('Failed to add quote. Please try again.');
    }
  };

  return (
    <AddQuoteContainer>
      <h2 style={{color: 'white'}}>Add a New Quote</h2>
      <AddQuoteForm onSubmit={handleSubmit}>
        <AddQuoteLabel>Content:</AddQuoteLabel>
        <AddQuoteInput type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        <AddQuoteLabel>Author:</AddQuoteLabel>
        <AddQuoteInput type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <AddQuoteLabel>Tags:</AddQuoteLabel>
        <AddQuoteInput type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        <AddQuoteButton type="submit">Add Quote</AddQuoteButton>
      </AddQuoteForm>
    </AddQuoteContainer>
  );
};

export default AddQuotePage;
