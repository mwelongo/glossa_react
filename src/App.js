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
         <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-3">
            <div class="flex items-center flex-shrink-0 text-red mr-6">
               <a href="./index.html"><img src="https://i.imgur.com/Su0HY4u.png" class="h-20 w-48 mr-2"/></a>
               <h1 class="font-semibold text-2xl tracking-tight">Welcome to Glossa Learning</h1>
            </div>
         </nav>

         <Add handleCreate={handleCreate}/>
         <div class="flex flex-wrap justify-center items-center h-screen">
            {lessons.map((module) => {
               return (
                  <div class="w-80 h-96 p-2.5 m-2 overflow-y-scroll border-2 border-blue-200 border-opacity-50 shadow-xl leading-loose rounded-2xl module-wrap">
                     <div class="module-info p-1">
                        <h3 class="text-2xl font-bold">{module.module_title}</h3>
                        <img class="w-full h-36 flex m-auto rounded-xl" src={module.lesson_image}/>
                        <h6 class="text-sm">Instructor: {module.module_instructor}</h6>
                        <h6 class="text-sm">Learning Objectives: {module.module_objectives}</h6>
                        <h6 class="text-xs">Module Description: {module.module_description}</h6>
                     </div>
                     <div class="lesson-info bg-blue-200 p-4 my-2 rounded-lg">
                        <h4 class="text-lg font-bold">Lesson {module.lesson_num} - {module.lesson_title}</h4>
                        <h5 class="text-base">Topic: {module.lesson_subtitle}</h5>
                        <h5>Notes:</h5>
                        <p class="text-xs">{module.lesson_notes}</p>
                     </div>
                     <button class="bg-red-400 w-20 hover:bg-blue-700 text-white my-2 rounded px-2.5 flex m-auto" onClick={handleDelete} value={module.id}>Delete</button>
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
