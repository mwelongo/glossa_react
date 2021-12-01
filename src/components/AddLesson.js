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
            <form onSubmit={handleSubmit}>
               <label htmlFor="module_title">Module Name: </label>
               <input type="text" name="module_title"/>
               <br/>
               <label htmlFor="module_instructor">Instructor: </label>
               <input type="text" name="module_instructor"/>
               <br/>
               <label htmlFor="module_objectives">Skills Outcomes: </label>
               <input type="text" name="module_objectives"/>
               <br/>
               <label htmlFor="module_description">Module Description: </label>
               <input type="textarea" name="module_description"/>
               <br/>
               <input type="submit" value="create module"/>
            </form>
         </div>
      </>
   )
}

export default Add
