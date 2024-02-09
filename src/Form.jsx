import { useRef } from "react";

const Form = () => {
  const refContainer = useRef(null)

  console.log(refContainer);

  const handleSubmit = () => {
    console.log(refContainer);
  }
  
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <legend className='text-center my-3'> Create User </legend>
        <fieldset className="form-floating mb-3">
          <input
            type="text"
            name='username'
            id='username'
            className="form-control"
            placeholder='John Doe'
            required
          />
          <label htmlFor="username"> Username </label>
        </fieldset>
        <fieldset className="form-floating mb-3">
          <input
            type="email"
            name='email'
            id='email'
            className="form-control"
            placeholder='example@gmail.com'
            required
          />
          <label htmlFor="email"> Email  </label>
        </fieldset>
        <button type="submit" className="btn btn-primary btn-md"> Add </button>
      </form>
    </div>
  )
}

export default Form