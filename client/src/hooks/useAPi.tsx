import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:5000/api/player';
export function useAPi() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url)
      setData(response.data?.players)
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const removeData = (id:number) => {
    setIsLoading(true);
    setError(null);
    try {
      axios.delete(`${url}/${id}`).then(() => {
        const del = data.filter((item) => id !== item?.id)
        setData(del)
      })
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const addData = async (player: any) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.post(`${url}`, player).then((res)=> {
        const updatedPlayers = [...data, res.data];
        setData(updatedPlayers);
      });
      
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const editData = async(player: any) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.patch(`${url}/${player.id}`, player).then((response) => {
        const newPlayer = response.data;
        const newArr = data.filter((item: any) => newPlayer.id !== item?.id);
        const updatedPlayers: any = [...newArr, newPlayer];
        setData(updatedPlayers);
      })
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, error, data, removeData, addData, editData }
}