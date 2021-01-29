import React, { Component } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import CustomInput from './components/CustomInput'
import CustomErrorForm from './components/CustomErrorForm'

export class App extends Component {

  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Trop court !').max(20, 'Trop long !').required('Requis'),
    email: Yup.string().email("L'email doit être valide").required('Requis'),
    password: Yup.string().min(5, 'Trop court')
  })

  submit = (values, actions) => {
    console.log(values)
    setTimeout(() => {
      actions.isSubmitting = false
      actions.resetForm()
    }, 1000);
  }

  render() {
    return (
			<div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
				<Formik onSubmit={this.submit} initialValues={{ name: '', email: '', password: '' }} validationSchema={this.userSchema} >
          
					{({ values, handleBlur, handleChange, handleSubmit, isSubmitting, errors, touched }) => (

						<form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
              <Field name="name" label="Nom" component={CustomInput} />
              <ErrorMessage name="name" component={CustomErrorForm} />
              
              <Field name="email" type="email" label="Email" component={CustomInput} />
              <ErrorMessage name="email" component={CustomErrorForm} />
              
              <Field name="password" type="password" label="Password" component={CustomInput} />
              <ErrorMessage name="password" component={CustomErrorForm} />

							<button type="submit" className="btn btn-primary" disabled={isSubmitting}>Envoyer</button>

						</form>

					)}
				</Formik>
			</div>
		)
  }
}

export default App
