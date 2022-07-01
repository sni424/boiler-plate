import { useEffect } from 'react'
import axios from 'axios';

const LadingPage = () => {

  useEffect(()=>{
    axios.get("/api/hello").then(res=>console.log(res.data))
  })

  return (
    <div>
      LadingPage
    </div>
  )
}

export default LadingPage
