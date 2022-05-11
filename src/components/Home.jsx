import React , {useState , useContext , useEffect} from 'react'

// import Banner from './Banner';
import   './../css/home.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ImageCard from './ImageCard';
// import ImgCard from './imgCard';
import Images from './NavItems';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {CardContext} from './CardContext';




export default function Home() {
    const {images,setImages , buskets , setBuskets} = useContext(CardContext);
    // const {imagesValue , setImageValue} = images;

    // console.log(images);
    // useEffect(() =>{
    //     fetch("/preds").then(
    //         res => res.json()
            
    //         ).then(
    //         data => {
    //             setData(data)
    //         console.log(data)
    //         })
    // },[])


    const handlePredict= () =>{

        // alert("hello " + data.name)
    }
    return (
        <div className='home'>



            <NavBar/>

{/* <p className='par'> <a href=' https://www.kaggle.com/datasets/skillsmuggler/amazon-ratings#https://www.kaggle.com/datasets/nicapotato/womens-ecommerce-clothing-reviews
'> datatse link</a></p> */}
{/* <div className='par'>
<p>Here are the  10 products recommended based on user ratings. The products are in  with the item purchased by a particular  customer based on items rated by 
    other customers  who bought the same product say the product with the product id
    '1304624498' and outputs other products recommendation in Correlation with other products other users rated
</p>
<hr></hr>
<p> Here are the 10 products represented by  their  id's...</p>
{(typeof data.predictions === 'undefined')?(
    <p>Loading ...</p>
): 
 (data.predictions?.map((predictions, i)=>(
    <h6 id= "list" key={i}>product   {i + "=>"}: {predictions}</h6>
 ))
 )} */}
 {/* </div> */}
 <Box p={5}>
<Grid container spacing={5}>
{images?.map((img ,i) =>{
    return(
        
        <Grid key = {i} item>
        <ImageCard key= {img.id} title = {img.title} id={i} imageName= {img.src} desc =""/>

        </Grid>
    )
})}

</Grid>
</Box>
 {/* https://mysterious-everglades-58670.herokuapp.com/ */}

    <Footer/>
        </div>

        
    )
}


//  const  images = [
//   { id: 1, title: "image1", src: "1.jpg" },

//   {id: 2, title: "image2", src: "2.jpg", },

//   { id: 3, title: "image3", src: "3.jpg" },

//   { id: 3, title: "image4", src: "4.jpg" },

//   { id: 3, title: "image5", src: "5.jpg" },

//   { id: 3, title: "image6", src: "6.jpg" },

//   { id: 3, title: "image7", src: "7.jpg" },
//   { id: 3, title: "image8", src: "8.jpg" },

//   { id: 3, title: "image9", src: "9.jpg" },

//   { id: 3, title: "image10", src: "10.jpg" },
// ];
