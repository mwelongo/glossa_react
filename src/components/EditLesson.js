import React, {useState } from 'react'

const Edit = (props) => {
   let emptyLesson = {id: props.id, module_title: '', module_instructor: '', module_description: '', module_objectives: '', lesson_num: '', lesson_title: '', lesson_subtitle: '', lesson_notes: '', lesson_image: ''}
   const [lesson, setLesson] = useState(emptyLesson)
   // const [lesson, setLesson] = useState({...props.lesson})

   const handleChange = (event) => {
      setLesson({...lesson, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
       event.preventDefault()
       props.handleUpdate(lesson)
   }

   return (
      <>
         <details>
            <summary class="bg-red-400 w-18 text-center hover:bg-blue-700 text-white px-2 m-4 rounded flex m-auto">Edit</summary>
            <form class="w-full max-w-lg border-light-blue-400 block m-auto" onSubmit={handleSubmit}>
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
                  htmlFor="module_title">Module Name
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="module_title" value={lesson.module_title} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="module_instructor">Instructor
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="module_instructor" value={lesson.module_instructor} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="module_objectives">Learning Objectives
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="module_objectives" value={lesson.module_objectives} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="module_description">Module Description
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-6 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="textarea" name="module_description"value={lesson.module_description} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson_image">Image URL
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="lesson_image" value={lesson.lesson_image} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson_num">Lesson No
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="number" name="lesson_num" value={lesson.lesson_num} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson_title">Lesson Title
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="lesson_title" value={lesson.lesson_title} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson_subtitle">Add Subtitle
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="text" name="lesson_subtitle" value={lesson.lesson_subtitle} onChange={handleChange}
               />
               <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson_notes">Class Notes
               </label>
               <input
               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-6 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               type="textarea" name="lesson_notes" value={lesson.lesson_notes} onChange={handleChange}
               />
               <input
               class="shadow bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white py-1 px-4 rounded flex m-auto"
               type="submit" value="Update"
               />
               <br/>
            </form>
         </details>
      </>
   )

}

export default Edit
