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

// CREATE ROUTE (new module/lesson)
   const handleCreate = (newModule) => {
      axios
         .post('https://glossa-api.herokuapp.com/api/lessons', newModule)
         .then((response) => {
            console.log(response)
            getLessons()
         })
   }

// DELETE ROUTE
const handleDelete = (event) => {
axios
  .delete('https://glossa-api.herokuapp.com/api/lessons/' + event.target.value)
  .then((response) => {
    getLessons()
  })
}

// UPDATE/EDIT ROUTE
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
         <div class="main-container grid gap-2 grid-cols-4 flex-nowrap">
            {lessons.map((module) => {
               return (
                  <div class="module-wrap flex-1 w-80 h-96 p-2.5 overflow-y-scroll border-2 border-light-blue-200 border-opacity-50 shadow-lg ">
                     <div class="module-info p-1">
                        <button id="delete-btn" onClick={handleDelete} value={module.id}>Delete</button>
                        <h3 class="text-2xl font-bold">{module.module_title}</h3>
                        <img src={module.lesson_image}/>
                        <h6 class="text-base">Instructor: {module.module_instructor}</h6>
                        <h6 class="text-base">Learning Objectives: {module.module_objectives}</h6>
                        <br/>
                        <h6>Module Description: {module.module_description}</h6>
                     </div>
                     <div class="lesson-info">
                        <h4 class="text-xl font-bold">Lesson {module.lesson_num} - {module.lesson_title}</h4>
                        <h5 class="text-xl">Topic: {module.lesson_subtitle}</h5>
                        <h5>Notes:</h5>
                        <p>{module.lesson_notes}</p>
                     </div>
                     <Edit handleUpdate={handleUpdate} id={module.id}/>
                  </div>
               )
            })
            }
         </div>
      </>
   )
}

export default App;
