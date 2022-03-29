import Head from 'next/head'
// templates (comps)
import Project from '../templates/projects'
import Brief from '../templates/brief-intro'
import Introduction from '../templates/introduction'

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Artist</title>
        <meta name="description" content="Frontend Developer Portfolio"></meta>
        <meta name="theme-color" content="black"></meta>
      </Head>
      <Introduction />
      <Project />
      <Brief />
    </>
  )
}

export default Home
