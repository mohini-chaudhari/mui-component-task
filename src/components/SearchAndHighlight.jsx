import { Box, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const SearchAndHighlight = () => {
  const [search, setSearch] = useState('');
  const [highlights, setHighlights] = useState([]);

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin auctor neque a libero fermentum, nec scelerisque lorem lobortis. 
                Vestibulum mollis neque in suscipit efficitur. Sed id convallis mauris. 
                Aenean a ligula eu urna accumsan facilisis non a ante. 
                Ut malesuada lectus in dui suscipit, ac rutrum lectus facilisis. 
                Integer suscipit interdum quam, et iaculis metus tristique nec.`;

  const handleSearch = (query) => {
    if (query.trim()) {
      const regex = new RegExp(query, 'gi');
      const matches = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({ start: match.index, end: match.index + match[0].length });
      }
      setHighlights(matches);
    } else {
      setHighlights([]);
    }
  };

  const highlightText = () => {
    let lastIndex = 0;
    const highlightedText = [];

    highlights.forEach(({ start, end }) => {
      highlightedText.push(text.slice(lastIndex, start));
      highlightedText.push(<mark key={`${start}-${end}`}>{text.slice(start, end)}</mark>);
      lastIndex = end;
    });

    highlightedText.push(text.slice(lastIndex));
    return highlightedText;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value); // Ensures search updates immediately
  };

  return (
    <Container maxWidth="sm" sx={{ mt: '20px' }}>
      <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Search and Highlight Text
        </Typography>
        <TextField
          variant="outlined"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
          sx={{ mb: 2, width: '100%' }}
        />
        <Box
          sx={{
            p: 2,
            maxHeight: 400,
            overflow: 'auto',
            border: '1px solid #ccc',
            borderRadius: 1,
            backgroundColor: '#f9f9f9',
            // whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            width: '100%',
          }}
        >
          <Typography variant="body1">{highlightText()}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchAndHighlight;
