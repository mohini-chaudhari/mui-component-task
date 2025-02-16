import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const listItems = [
  "Full Stack developer",
  "Frontend developer",
  "Backend developer",
  "IoS developer",
  "Flutter developer",
  "UI/UX designer",
];
// debounce
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredList = listItems.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: "20px" }}>
        <Typography variant="h4" align="center" sx={{mb:5}}>
          Searchbar
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <List>
          {filteredList.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default SearchBar;
