import { useState, useEffect, useContext } from 'react';
import { url } from '../constants';
import { HousesContext } from '../context';
import axios from 'axios';

const useDataFetch = () => {
  const [houses, setHouses] = useState();
  const { setIsLoading } = useContext(HousesContext);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(url);
      setHouses(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return houses;
};

export { useDataFetch };
