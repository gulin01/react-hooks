import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// names should be same as input's name
const schema = yup.object().shape({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  email: yup.string().email().required('email is required'),
  age: yup
    .number()
    .positive()
    .integer('input must be a number type')
    .required('age is reuired'),
  password: yup.string().min(4).max(8).required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('you need to confirm the password'),
})
const Form = () => {
  // errors will be generetaed from yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  })

  const submitForm = (data) => {
    console.log('data', data)
  }
  if (errors) {
    console.log(errors)
  }
  return (
    <div className='Form'>
      <div className='title'>Sign Up</div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type='text'
          placeholder='first name ...'
          {...register('firstName')}
        />
        <p>{errors.firstName?.message}</p>
        <input
          type='text'
          placeholder='last name ...'
          {...register('lastName')}
        />
        <p>{errors.lastName?.message}</p>
        <input type='text' placeholder='email...' {...register('email')} />
        <p>{errors.email?.message}</p>
        <input type='text' placeholder='age' {...register('age')} />
        <p>{errors.age && 'age should be a number'}</p>
        <input
          type='password'
          placeholder='password...'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <input
          type='password'
          placeholder='confirm password...'
          {...register('confirmPassword')}
        />
        <p>{errors.confirmPassword && 'Passwords should match'}</p>
        <input type='submit' id='submit' />
      </form>
    </div>
  )
}

export default Form
