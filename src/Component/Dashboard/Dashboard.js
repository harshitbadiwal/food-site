import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  filter
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import'../Dashboard/Dashboard.css'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import SelectInput from '@mui/material/Select/SelectInput';
import { Button, Grid } from '@mui/material';


const Dashboard = () => {
  const [dish, setdish] = useState([]);

  const [input, setinput] = useState('')

  useEffect(() => {
    getrecipes()
  },[input])


  // 



  // 

  const getrecipes = () => {


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bbeb5dcde8msh2b24a09731b92bcp12e7fejsnc8ba10806c58',
        'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
      }
    };
    
    fetch('https://cooking-recipe2.p.rapidapi.com', options)
      .then(response => response.json())
      .then(response => setdish(response))
      .catch(err => console.error(err));
  
  console.log("dish...c",dish)// const getdata = fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=5036ad1b&app_key=%2073e29c167f5520f94147576a2bb9ba4a&imageSize=SMALL", 
    // { "Access-Control-Allow-Origin": 'false' })
    // .then((response)=>response.json())
    // .then((adata) => {
    //   // console.log(adata.hits[1].recipe)
    //   // return data
    //   // adata.hits.map((doc)=> setdata(doc))

    //   // setdish(adata.hits.map((d)=> ({...d})))
    //   setdish(adata.hits)

    //   // console.log("data",data)
    
    //   //  console.log(adata.hits[index])
    //     // setdish(adata)
    //     console.log(dish)
    //   }
     
  //  ) 


  }
  //   const getdata = await 
  //   fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=5036ad1b&app_key=%2073e29c167f5520f94147576a2bb9ba4a&imageSize=SMALL",)
  //   .then((datas) =>
  //     console.log(datas)).catch(error => console.log(error))
  // }
//   const updatesearch=(e)=>{
//     setsearch(e.target.value)
//   }
// const searchcontaint=()=>{
//   setquery(search)
//   setsearch('')
// }


 
const search =()=>{
  if(!input.length)return setdish(dish)
  const filterdata = dish.filter((item)=>{
    console.log("==================",item)
    return(
      item.title.toLowerCase().includes(input.toLowerCase())
    )
  })

  if(filterdata.length){
    setdish(filterdata)
  } else {
    setdish(dish)
   
  }
}


  return (


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
      <div className='search'>
      <TextField  className='searchicon'
          id="outlined-textarea"
          label="Search any recipe"
          placeholder="Placeholder"
        value={input}
          onChange={(e)=>setinput(e.target.value)}
        
        />
        <Button   onClick={search} >
        <SearchIcon className='searchbutton'  />
        </Button>
      </div>
     
    <div className='allrecipies'>
      
      { dish.map((dishs,id)=>(
        dishs.img ?
         <div className='cards' key={id}>
          
         <div className='card'>
           <div className='cardImage'>
             <img src={dishs.img} />
           </div>
           <div className='carddis'>
             <p>{dishs.title}</p>
        
             {/* <Button variant='contained' onClick={()=>recipe(index )}  >recipe</Button> */}
             
             <a href={dishs.url}>Recipe</a>
             
           </div>
         </div>
 
       </div>: ""
      ))
     
}<Grid sx={{display:"flex", textAlign:"center", justifyContent:"center", textAlign:"center",width:"100%"}}><h2 >Please Wait bhuko...</h2></Grid>
</div>

    </div>
      
  )

}

export default Dashboard;