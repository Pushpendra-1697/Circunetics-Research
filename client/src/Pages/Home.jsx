import { Box, Heading, Img } from '@chakra-ui/react';

const Home = () => {

  return (
    <Box textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center" flexDirection={"column"}>
      <Heading mb="10px">Welcome to Task App</Heading>
      <Img height={"400px"} w="500px" src='./home.png' alt='home profile' />
    </Box>
  );
}

export default Home;