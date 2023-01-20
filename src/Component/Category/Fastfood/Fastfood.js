import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../Fastfood/Fastfood.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import { Button, Grid } from '@mui/material';

const Fastfood = () => {
    const [food, setfood] = useState([])
    useEffect(() => {
        getfatFood()
    }, [])
    const getfatFood = () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bbeb5dcde8msh2b24a09731b92bcp12e7fejsnc8ba10806c58',
          'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
        }
      };
      
      fetch('https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Street%20Food%20Recipe', options)
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
               <Link to={`/veg`}>Veg</Link>
               <Link to={`/nonveg`}>Non Veg</Link>
               <Link >Fast Food</Link>
 
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
 
 
   <div className='allrecipies'>
       {  food.map ((foods,id)=>(
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
       ))
 }<Grid sx={{display:"flex", textAlign:"center", justifyContent:"center", textAlign:"center",width:"100%"}}><h2 >Please Wait ...</h2></Grid>
     </div>
     </div>
   </>}

export default Fastfood