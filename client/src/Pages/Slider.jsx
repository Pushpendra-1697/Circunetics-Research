import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import D3Visualization from '../Components/D3Visualization';
import SliderComponent from '../Components/SliderComponent';
import { backend_url } from './BackendURL';
import { useToast, Box } from '@chakra-ui/react';


const Slider = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data from MongoDB through API
    axios.get(`${backend_url}/slider/`, { headers: { token: localStorage.getItem('token') } })
      .then((response) => {
        if (response.data.status == "NO") {
          toast({
            title: `${response.data.msg}`,
            status: "warning",
            isClosable: true,
          });
          setTimeout(() => {
            navigate('/login');
          }, 500);
        } else {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSliderChange = (newValue) => {
    // Update data based on slider value
    const updatedData = data.map((d) => d * (newValue / 50)); // Adjust the data scale based on the slider value
    setData(updatedData);
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexFlow='column'>
      <h1>Slider Visualization App</h1>
      <SliderComponent onChange={handleSliderChange} />
      <D3Visualization data={data} />
    </Box>
  );
}

export default Slider;