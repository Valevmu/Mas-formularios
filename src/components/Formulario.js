import { useForm } from "react-hook-form";





const Formulario = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'Valentina',
      lastName: 'Madrid'
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log("🚀 ~ file: Formulario.js:13 ~ onSubmit ~ console:", console)
  }


  return <div>
    <h2>Formulario</h2>

    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" {...register('firstName', {
          required: true,
          minLength: 2
        })} />
        {errors.firstName?.type === 'minLength' && <p> First Name must be at least 2 characters</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName', {
          required: true,
          minLength: 2
        })} />
        {errors.lastName?.type === 'minLength' && <p> Last Name must be at least 2 characters</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', {
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
          minLength: 5
        })} /> {errors.email?.type === 'minLength' && <p> Email must be at least 5 characters</p>}

      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', {
          required: true,
          pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
          minLength: 8,
        })} >
        </input>
        {errors?.password?.type === 'minLenght' && <p> Password must be at least 8 characters</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password"{...register('rightPassword', {
          pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
          minLength: 8
        })} ></input>

      </div>
      <input type="submit" value="enviar"></input>
      <h3>Your Form Data</h3>
      <p>First Name: {watch('firstName')}</p>
      <p>Last Name: {watch('lastName')}</p>
      <p>Email: {watch('email')}</p>
      <p>Password: {watch('password')}</p>
      <p>Confirm Password: {watch('rightPassword')}</p>

    </form>
  </div>
}

export default Formulario;