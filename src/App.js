import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export class App extends Component {

  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Trop court !').max(20, 'Trop long !').required('Requis'),
    email: Yup.string().email("L'email doit être valide"),
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

							<div className="form-group">
								<label>Nom</label>
								<input type="text" name="name" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                {errors.name && touched.name 
                && <div className="text-danger">{errors.name}</div>}
							</div>

							<div className="form-group">
								<label>Adresse email</label>
								<input type="email" name="email" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                {errors.email && touched.email 
                && <div className="text-danger">{errors.email}</div>}
							</div>

							<div className="form-group">
								<label>Mot de passe</label>
								<input type="password" name="password" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                {errors.password && touched.password 
                && <div className="text-danger">{errors.password}</div>}
							</div>

							<button type="submit" className="btn btn-primary" disabled={isSubmitting}>Envoyer</button>

						</form>

					)}
				</Formik>
			</div>
		)
  }
}

export default App
