import { useQuery } from 'react-query'
import axios from 'axios'

const SuperheroesPage = () => {
  const { data, isLoading } = useQuery('super-heroes', async () => {
    return await axios.get('http://localhost:4000/superheroes')
  })

  console.log(data)
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
export default SuperheroesPage
