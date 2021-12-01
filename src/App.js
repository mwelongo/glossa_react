import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
   let [lessons, setLessons] = useState([])

   const getLessons = () => {
      axios
         .get('https://glossa-api.herokuapp.com/api/lessons')
         .then(
            (response) => setLessons(response.data),
            (err) => console.error(err)
         )
         .catch((error) => console.error(error))
   }

   useEffect(() => {
      getLessons()
   },[])


   return (
      <>
         <h1>Welcome to Glossa</h1>
      </>
   )
}

export default App;
