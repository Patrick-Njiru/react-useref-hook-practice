import { useRef, useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const searchContainer = useRef(null)

  console.log('Search ', searchContainer.current && searchContainer.current.value);

  return (
    <div className="app">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-evenly">
          <div className='w-50 my-5 d-flex'>
            <div className="form-floating">
              <input
                type="search"
                name='username'
                id='username'
                className="form-control"
                placeholder='John Doe'
                ref={searchContainer}
              />
              <label htmlFor="username" className="w-100 bg-transparent text-secondary"> search for items... </label>
            </div>
            <button type="button" className="btn btn-primary btn-md mx-2" onClick={() => setSearch(searchContainer.current.value)}> Search </button>
          </div>
        </div>
        <h1>Searching for {search || 'nothing'}</h1>
      </div>
    </div>
  )
}

export default App
