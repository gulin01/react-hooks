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
// import "./App.css";
// import { useForm, useFieldArray, useWatch } from "react-hook-form";

// const Price = ({ control, index }) => {
//   const value = useWatch({
//     control,
//     name: `items[${index}]`,
//     defaultValue: {},
//   });
//   console.log(value);
//   // eslint-disable-next-line no-const-assign

//   return <span>{(value.type || 0) * (value.amount || 0)} </span>;
// };

// const PriceTotal = ({ control }) => {
//   const value = useWatch({
//     control,
//     name: `items`,
//     defaultValue: {},
//   });
//   console.log(value);
//   return null;
// };

// function App() {
//   const { register, control, handleSubmit, watch } = useForm();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "items",
//   });
//   console.log("...render");
//   return (
//     <form className="App" onSubmit={handleSubmit(console.log)}>
//       {fields.map(({ id, name, type, amount }, index) => {
//         return (
//           <div key={id}>
//             <input {...register(`items[${index}].name`)} defaultValue={name} />
//             <select {...register(`items[${index}].type`)} defaultValue={type}>
//               <option value="1">Select</option>
//               <option value="12">ItemA</option>
//               <option value="123">ItemB</option>
//             </select>

//             <input
//               {...register(`items[${index}].amount`)}
//               type="number"
//               defaultValue={amount}
//             />
//             <Price control={control} index={index} />
//             <PriceTotal control={control} />
//             <button {...register} type="button" onClick={() => remove(index)}>
//               Delete
//             </button>
//           </div>
//         );
//       })}

//       <button type="button" onClick={() => append({})}>
//         Append
//       </button>
//     </form>
//   );
// }

// export default App;
