import type { NextPage } from 'next'
import Introduction from '../templates/introduction'
import Project from '../templates/projects'

const Home: NextPage = () => {
  return (
    <div>
      <Introduction />
      <Project />
    </div>
  )
}

export default Home
