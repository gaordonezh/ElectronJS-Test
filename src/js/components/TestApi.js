import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

const TestApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    obtainInitialData();
  }, []);

  const obtainInitialData = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/1");
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return data ? (
    <Card sx={{ maxWidth: 350 }} elevation={5} align="left">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name.toUpperCase()}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="http://www.smashbros.com/images/og/pikachu.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ) : (
    "Cargando..."
  );
};

export default TestApi;
