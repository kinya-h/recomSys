import { Card } from '@mui/material';
import React , {useState ,createContext} from 'react';



export const CardContext = createContext();

export const CardProvider = props => {

        const [images, setImages] = useState([
        { id: 1, title: "image1", src: "1.jpg" },

        {id: 2, title: "image2", src: "2.jpg", },

        { id: 3, title: "image3", src: "3.jpg" },

        { id: 3, title: "image4", src: "4.jpg" },

        { id: 3, title: "image5", src: "5.jpg" },

        { id: 3, title: "image6", src: "6.jpg" },

        { id: 3, title: "image7", src: "7.jpg" },
        { id: 3, title: "image8", src: "8.jpg" },

        { id: 3, title: "image9", src: "9.jpg" },

        { id: 3, title: "image10", src: "10.jpg" },

        ]);


        const [buskets , setBuskets] = useState([]);

  return (
    <CardContext.Provider  value={{images , setImages , buskets ,setBuskets}}>{props.children}</CardContext.Provider>
  )
}
