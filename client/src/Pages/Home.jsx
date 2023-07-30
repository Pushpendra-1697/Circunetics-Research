import { Box, Heading, Img } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom'

const Home = () => {

  if (localStorage.getItem('token') === null) {
    return <Navigate to={'/login'} />
  };
  
  return (
    <Box textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center" flexDirection={"column"}>
      <Heading mb="10px">Welcome to Task App</Heading>
      <Img height={"400px"} w="500px" src='./home.png' alt='home profile' />
    </Box>
  );
}

export default Home;