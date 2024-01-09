import { useState } from 'react'

import Header from 'components/header'
import TaskList from 'components/tasklist'
import AddTask from 'components/add-task'
import Button from 'components/button'

import stl from './Home.module.scss'
import { useSelector } from 'react-redux'

const Home = () => {
  const tasks = useSelector(state => state.tasks)

  const userName = 'John'

  return (
    <div className={stl.wrapper}>
      <Header />

      <div className={stl.heading}>
        <h1 className={stl.title}>
          Welcome, <span>{userName}</span>
        </h1>
        <AddTask />
      </div>
      <TaskList />

      <Button
        label="Log State"
        customClass={stl.logBtn}
        onClick={() => console.log('Tasks:', tasks)}
      />
    </div>
  )
}

export default Home
