import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPoeple] = useState(data)

  return (
    <main>
      <section className="container">
        <h2>Birthday Reminder</h2>;<h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPoeple([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
