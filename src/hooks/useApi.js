import axios from "axios";
import { useState, useEffect } from "react";

const useApi = ({ url, dataMapper }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url);

        setData(dataMapper(data));
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError({ error });
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useApi;
