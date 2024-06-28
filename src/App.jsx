import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const [show, setShow] = useState(false)
  const [data, setData] = useState(null)


  function handelToggle() {
    setShow(!show)
  }

  useEffect(() => {
    async function fetchData() {

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        return
      }
      localStorage.clear()

      const API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {data ? <Main data={data} /> :
        <div className="loading">
          <i className="fa-solid fa-spinner"></i>
        </div>}
      {show && <SideBar data={data} handelToggle={handelToggle} />}
      {data && (<Footer data={data} handelToggle={handelToggle} />) }
    </>
  )
}

export default App
