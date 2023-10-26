import {useState, useEffect} from "react"

export function useFetch(url){
  const [data, setData]= useState(null)

  useEffect (() => {
    fetch(url)
    .then(response => response.json())
    .then( fetchedData => setData(fetchedData))
  }, [url])

return {data}

}