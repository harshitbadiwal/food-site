import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  variant,
  Button,
  styled,
  Grid,
 
} from "@mui/material";import { useState } from "react";

import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/Authcontext";



const initalVal = {
  name: "",
  username: "",
  email: "",
  phone: "",
};


const Container = styled(FormGroup)`
  width: 60%;
  margin: 5% auto 0 auto;
  border: 2px solid blue;
  display:flex;
  border-radius: 50px;
  padding: 2vw;
  & > div {
    margin: 15px;
    width: 80%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex:coloum ;
    margin: auto;
    margin-bottom: 25px;
  }
`;
const  Login =() =>{
  const [error, seterror] = useState('')

  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()
 
  const {Login} = useUserAuth()
  const userLogin = async()=>{
      try{
        await Login(email,password)
      }
      catch(error){
        seterror(error.message)
      }
  }

  return (
    <>
       <Grid sx={{ display:"flex" , width:"50% ", mx:"auto"}}>

{ error && <Alert > <Grid sx={{display:"flex", height:"5vw",background:"#ef5050", fontSize:"20px",}}> {error}</Grid> </Alert>}
    </Grid>

      <Container>
   
      
        <Typography variant="h4" sx={{textAlign:"center"}}>login</Typography>
       
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email " 
          onChange={(e)=>setemail(e.target.value)}
         />
        </FormControl>

        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            name="password"
            type="password"
            onChange={(e)=>setpassword(e.target.value)} 
          />
        </FormControl>

        <FormControl>
          <Button variant="contained" onClick={()=>userLogin()} >
            login
          </Button>
        </FormControl>
      </Container>
      <Grid variant="h4" sx={{textAlign:"center"}}>
        Resgister Your Account <Link to={"/register  "}>Resgister</Link>
      </Grid>
    </>
  );
};

export default Login;
