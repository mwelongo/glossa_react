import React, {useState, useEffect} from 'react'

const Add = (props) => {
   let emptyLesson = {module_title: '', module_instructor: '', module_description: '', module_objectives: '', lesson_num: '', lesson_title: '', lesson_subtitle: '', lesson_notes: '', lesson_image: ''}
   const [lesson, setLesson] = useState(emptyLesson)
   const [hideCreateForm, setHideCreateForm] = useState(true)

   const handleChange = (event) => {
      setLesson(
         {...lesson, [event.target.name]: event.target.value}
      )
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log(lesson)
      setHideCreateForm(true)
      props.handleCreate(lesson)
      setLesson(emptyLesson)
   }

   // function to auto-hide the create form on the click of button
   const handleButtonToggle = (event) => {
      if (event.target.id == "create-form") {
         setHideCreateForm(true)
      } else {
         setHideCreateForm(false)
      }
   }

   return (
      <>
         <div id="create-btn">
            <button onClick={handleButtonToggle}>Create Module</button>
         </div>
         <div className={hideCreateForm ? "hidden" : "create-form"}>
            <button onClick={handleButtonToggle}>Close</button>
            <form onSubmit={handleSubmit}>
               <label htmlFor="module_title">Module Name</label>
               <input type="text" name="module_title" value={lesson.module_title} onChange={handleChange}/>
               <br/>
               <label htmlFor="module_instructor">Instructor</label>
               <input type="text" name="module_instructor" value={lesson.module_instructor} onChange={handleChange}/>
               <br/>
               <label htmlFor="module_objectives">Learning Objectives</label>
               <input type="text" name="module_objectives" value={lesson.module_objectives} onChange={handleChange}/>
               <br/>
               <label htmlFor="module_description">Module Description: </label>
               <input type="textarea" name="module_description"value={lesson.module_description} onChange={handleChange}/>
               <br/>
               <label htmlFor="lesson_image">Image URL</label>
               <input type="text" name="lesson_image" value={lesson.lesson_image} onChange={handleChange}/>
               <br/>
               <label htmlFor="lesson_num">Lesson No</label>
               <input type="number" name="lesson_num" value={lesson.lesson_num} onChange={handleChange}/>
               <br/>
               <label htmlFor="lesson_title">Lesson Title</label>
               <input type="text" name="lesson_title" value={lesson.lesson_title} onChange={handleChange}/>
               <br/>
               <label htmlFor="lesson_subtitle">Add Subtitle</label>
               <input type="text" name="lesson_subtitle" value={lesson.lesson_subtitle} onChange={handleChange}/>
               <br/>
               <label htmlFor="lesson_notes">Class Notes</label>
               <input type="textarea" name="lesson_notes" value={lesson.lesson_notes} onChange={handleChange}/>
               <br/>
               <input type="submit"/>
               <br/>
            </form>
         </div>
      </>
   )
}

export default Add
