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
         <div className="main-container">
            {lessons.map((module) => {
               return (
                  <div className="module-wrap">
                     <h2>Module: {module.module_title}</h2>
                     <h4>Instructor: {module.module_instructor}</h4>
                     <h4>Skills Outcomes: {module.module_objectives}</h4>
                     <h6>Module Description: {module.module_description}</h6>
                  </div>
               )
            })
            }

         </div>
      </>
   )
}

export default App;
