import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import './App.css'
import RQSuperheroesPage from './components/RQSuperheroes.page'
import SuperheroesPage from './components/Superheroes.page'
import HomePage from './components/Home.page'
import Form from './components/Form'
import Form2 from './components/Form2'
const queryClient = new QueryClient()
const App = () => {
  console.log(queryClient)
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/form'>Form</Link>
              </li>
              <li>
                <Link to='/form2'>Form-2</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/super-heroes' element={<SuperheroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperheroesPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/form' element={<Form />} />
            <Route path='/form2' element={<Form2 />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}
export default App