import React from 'react'
import { getProjects } from '@/sanity/sanity-utils'

const Home = async () => {
  const projects = await getProjects()
  console.log(projects)

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  )
}

export default Home
