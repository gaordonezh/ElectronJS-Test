import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CustomTextField from "./components/CustomTextField";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
  Paper,
  Typography,
  Grid,
  ListSubheader,
  ListItemSecondaryAction,
  IconButton,
  InputAdornment,
  Container,
} from "@mui/material";

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [validation, setValidation] = useState(false);

  const addToList = () => {
    setValidation(false);
    if (text) {
      list.push(text);
      setList([...list]);
      setText("");
    } else {
      setValidation(true);
    }
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                List with <b>React</b> with <b>Electron JS</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                autoFocus
                label="test"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && addToList()}
                error={validation}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={addToList}>
                        <AddIcon color="primary" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Listado: {list.length} items
                  </ListSubheader>
                }
              >
                {list.length > 0 ? (
                  list.map((el, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <DoubleArrowIcon />
                      </ListItemIcon>
                      <ListItemText primary={el} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="error"
                          onClick={() => removeItem(index)}
                        >
                          <CloseIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    <Typography variant="caption" color="textSecondary">
                      Aquí se mostrará el listado de items
                    </Typography>
                  </ListItem>
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
