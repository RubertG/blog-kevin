"use client"
import { useLogin } from "@/hooks/useLogin"

function Login() {

   const { errorEmail, errorPassword, loading, handleChange, handleSubmit } = useLogin()

   return (
      <div className='container-colum'>
         <h2 className='title'>Login Admin</h2>
         <form className='form-edit form-small' onSubmit={e => handleSubmit(e)}>
            <label htmlFor="email" className='form-edit__label'>
               <h3 className='label__title'>Correo</h3>
               <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  onChange={e => handleChange(e)}
                  placeholder='ejemplo@ejemplo.com' />
               <p className="form-error">{errorEmail}</p>
            </label>
            <label htmlFor="password" className='form-edit__label'>
               <h3 className='label__title'>Contraseña</h3>
               <input
                  type="password"
                  name="password"
                  onChange={e => handleChange(e)}
                  id="password" />
               <p className="form-error">{errorPassword}</p>
            </label>
            <button type='submit' className='btn btn-primary'>
               {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
         </form>
      </div>
   )
}

export default Login