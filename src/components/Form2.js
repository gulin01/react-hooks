import React from 'react'
import { useForm, useFieldArray, useWatch } from 'react-hook-form'

const Form2 = () => {
  const { register, control, handleSubmit, watch } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  })
  const handleForm = (data) => {
    console.log(data)
  }
  console.log(watch())
  return (
    <form className='form' onSubmit={handleSubmit(handleForm)}>
      {fields.map(({ id, name, type, amount }, index) => {
        return (
          <div key={id}>
            <input
              type='text'
              {...register(`item[${index}].name`)}
              defaultValue={name}
            />
            <select
              placeholder='Select'
              {...register(`item[${index}].type`)}
              defaultValue={type}
            >
              <option value='1'>ItemA</option>
              <option value='2'>ItemB</option>
              <option value='3'>ItemC</option>
            </select>
            <input
              type='number'
              {...register(`item[${index}].amount`)}
              defaultValue={amount}
            />

            <button type='button' onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        )
      })}
      <input type='submit' />
      <button type='button' onClick={() => append({})}>
        Append
      </button>
    </form>
  )
}

export default Form2
