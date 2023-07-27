import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import D3Visualization from '../Components/D3Visualization';
import SliderComponent from '../Components/SliderComponent';
import { backend_url } from './BackendURL';
import { useToast } from '@chakra-ui/react';


const Slider = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch data from MongoDB through API (replace 'YOUR_API_URL' with the actual API endpoint)
    axios.get(`${backend_url}/slider/`, { headers: { token: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data)
        if (response.data.status == "NO") {
          toast({
            title: `${response.data.msg}`,
            status: "warning",
            isClosable: true,
          });
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        } else {
          setData(response.data);
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
    <div>
      <h1>Slider Visualization App</h1>
      <SliderComponent onChange={handleSliderChange} />
      <D3Visualization data={data} />
    </div>
  );
}

export default Slider;