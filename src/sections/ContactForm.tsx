import React, { useState } from 'react'
import { validateName, validateText, validateEmail } from '../assets/scripts/Validation'
import AlertNotification from '../components/AlertNotification'

export interface FormData {
  name: string
  email: string
  comments: string
}

const ContactForm: React.FC = () => {
  let currentPage = "Contact Us"
  window.top!.document.title = `${currentPage} || Fixxo` 

  const DEFAULT_VALUES: FormData = {name: '', email: '', comments: ''}
  const [formData, setFormData] = useState<FormData>(DEFAULT_VALUES)
  const [errors, setErrors] = useState<FormData>(DEFAULT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'name')
      setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
      setErrors({...errors, [id]: validateEmail(id, value)})
  }


  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'comments')
    setErrors({...errors, [id]: validateText(id, value, 10)})
  }




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
      if (errors.name === '' && errors.email === '' && errors.comments === '') {

        const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })

        if (res.status == 200) {
          setSubmitted(true)
          setFormData(DEFAULT_VALUES)
        } else {
          setSubmitted(false)
          setFailedSubmit(true)
        }
      }
  }


  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        {submitted ? (<AlertNotification alert="success" title="Thank you for tyour comment!" text="We will contact you as soon as possible"/> ) : (<></>)}
        {failedSubmit ? (<AlertNotification alert="danger" title="Something went wrong, please try again!" text="We couldn't submit your comment right now."/> ) : (<></>)}

        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input 
              id="name" 
              className = {(errors.name ? 'error': '')} 
              value = {formData.name} 
              onChange = {(e) => handleChange(e)}
              type = "text" 
              placeholder = "Your Name" />
            <div className = "errorMessage">{errors.name}</div>
          </div>
          <div>
            <input 
              id="email" 
              className = {(errors.email ? 'error': '')} 
              value = {formData.email} 
              onChange = {(e) => handleChange(e)}
              type = "email" 
              placeholder = "Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="text-area">
            <textarea 
              id="comments" 
              className= {(errors.comments ? 'error': '')} 
              style= {(errors.comments ? {border: '1px solid #FF7373'}: {} )} 
              value= {formData.comments} 
              onChange= {(e) => handleTextChange(e)} 
              placeholder="Comments">              
            </textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          <div className="form-btn">
            <button type="submit" className="btn-red">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}
export default ContactForm