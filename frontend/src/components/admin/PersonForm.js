import React from 'react';
import { useForm } from 'react-hook-form';

export default function PersonForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Person to add" {...register("Person to add", {required: true, maxLength: 256})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true, maxLength: 4})} />

      <input type="submit" />
    </form>
  );
}