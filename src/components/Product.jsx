import React ,{useContext} from 'react'
import './../css/card.css';
// import * as React from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button , CardActionArea,CardActions} from '@mui/material';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
  
// import image from '../assets/1.jpg';
import {CardContext} from './CardContext';

import { Link ,Redirect , useNavigate , useLocation} from 'react-router-dom';

  






const useStyles  = makeStyles({
  root:{
    maxWidth :345,
    margin :10,
  
    
  },
  media : {
    height:140,
  }
})


const imageUrl  = require.context('./images' , true);

export default function Product() {

    const {images , setImages  , buskets, setBuskets} = useContext(CardContext);
    
console.log(buskets)

    const {state} = useLocation();
    // console.log(state);
  const {id} = state;

    console.log(id);
// let source = image;
const navigate = useNavigate();
  
  const classes = useStyles();


  const handleAdd = (id)=>{
//  e.preventDafault();
 console.log("clicked")
//   navigate("/product");

setBuskets(prev => [...prev ,{i:id}])




  }
  return (






    <div>
<h6>id</h6>
{images.map((img , i) =>{

  if(i === id){
    return(

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className = {classes.media}
          component="img"
          image = {imageUrl(`./${img.src}`).default}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
       <CardActions>
        {/* <Button size="small" color="primary" onClick = {() =>handleAdd(i)}>
          Add to cart
        </Button> */}


<div>
        <Badge color="secondary" badgeContent={buskets.length}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            
          >
            {" "}
            <RemoveIcon  />
          </Button>
          <Button
            
          >
            addd
            {" "}
            <AddIcon  />
          </Button>
        </ButtonGroup>
      </div>

      </CardActions>
    </Card>
    )
  }

  // return(<h1>{id} </h1>)
}

)}

     {/* images(`./${imageName}`).default */}


  
      
    


<h4>{buskets.length}</h4>
    </div>
  );
}

