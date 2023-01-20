import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import '../Vegfood/Vegfood.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import { Button, Grid } from '@mui/material';

const Vegfood = () => {
const [food, setfood] = useState([])
useEffect(()=>{
  getVegFood()
},[])
const getVegFood=()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '394020d853msh6da8207ae7c2500p1680bfjsn94e3fcaad596',
      'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
    }
  };
  
  fetch('https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Potato%20Recipe', options)
    .then(response => response.json())
    .then(response => setfood(response))
    .catch(err => console.error(err));
}
  return<>
  <div>
     <div>
       <Accordion allowToggle display="flex" justifyContent="center" >
         <AccordionItem width="30%">
           <h2>
             <AccordionButton >
               <Box flex='1' height="2vw" fontSize="2vw" padding="5px" textAlign='left'>
                 Type
               </Box>
               <AccordionIcon />
             </AccordionButton>
           </h2>
           <AccordionPanel pb={4} display="flex" flexDirection="column" fontStyle="none" fontSize="1.5vw" >
             <Link >Veg</Link>
             <Link to={`/nonveg`}>Non Veg</Link>
             <Link to={`/ffood`}>Fast Food</Link>

           </AccordionPanel>
         </AccordionItem>

         <AccordionItem width="30%">
           <h2>
             <AccordionButton >
               <Box flex='1' textAlign='left' height="2vw" fontSize="2vw" padding="5px">
                 Food
               </Box>
               <AccordionIcon />
             </AccordionButton>
           </h2>
           <AccordionPanel pb={4} display="flex" flexDirection="column" fontSize="1.5vw" >
             <div>
               <Link to={`/mutter`} >Matar Paneer</Link>
             </div>
             <div>
               <Link to={`/burger`} >Burger</Link>
             </div>
             <div>
               <Link to={`/pizza`}>Pizza</Link>
             </div>
           </AccordionPanel>
         </AccordionItem>
       </Accordion>
     </div>


 <div className='allrecipies'>{

    food ?   food.map ((foods,id)=>(
       <div className='cards' key={id} >
         
       <div className='card'>
         <div className='cardImage'>
           <img src={foods.img} />
         </div>
         <div className='carddis'>
           <p>{foods.title}</p>
      
         
           
           <a href={foods.url}>Recipe</a>
           
         </div>
       </div>

     </div>
     )):<h2 >Please Wait ...</h2>
}

   </div>
   </div>
 </>
}

export default Vegfood