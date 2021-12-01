import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/AddLesson'
import Edit from './components/EditLesson'

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

// Create lesson/module route
   const handleCreate = (newModule) => {
      axios
         .post('https://glossa-api.herokuapp.com/api/lessons', newModule)
         .then((response) => {
            console.log(response)
            getLessons()
         })
   }

// Delete route
const handleDelete = (event) => {
axios
  .delete('https://glossa-api.herokuapp.com/api/lessons/' + event.target.value)
  .then((response) => {
    getLessons()
  })
}

// Update route
   const handleUpdate = (editLesson) => {
      axios
         .put('https://glossa-api.herokuapp.com/api/lessons/' + editLesson.id, editLesson)
         .then((response) => {
            getLessons()
         })
   }

   useEffect(() => {
      getLessons()
   },[])


   return (
      <>
         <h1>Welcome to Glossa</h1>
         <Add handleCreate={handleCreate}/>
         <div className="main-container">
            {lessons.map((module) => {
               return (
                  <div className="module-wrap">
                     <h2>Module: {module.module_title}</h2>
                     <h4>Instructor: {module.module_instructor}</h4>
                     <h4>Skills Outcomes: {module.module_objectives}</h4>
                     <h6>Module Description: {module.module_description}</h6>
                     <h6>Lesson {module.lesson_num}</h6>
                     <h6>Lesson: {module.lesson_title}</h6>
                     <h5>Topic: {module.lesson_subtitle}</h5>
                     <h6>Notes: {module.lesson_notes}</h6>
                     <img src={module.lesson_image}/>
                     <Edit handleUpdate={handleUpdate} id={module.id}/>
                     <button id="delete-btn" onClick={handleDelete} value={module.id}>Delete</button>
                  </div>
               )
            })
            }
         </div>
      </>
   )
}

export default App;
