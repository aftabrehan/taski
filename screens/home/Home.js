import Head from 'next/head'
import { useSelector } from 'react-redux'

import Header from 'components/header'
import TaskList from 'components/tasklist'
import AddTask from 'components/add-task'
import Button from 'components/button'

import stl from './Home.module.scss'

const Home = () => {
  const tasks = useSelector(state => state.tasks)

  const userName = 'John'

  return (
    <>
      <Head>
        <title>Taskiwex</title>
      </Head>

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
    </>
  )
}

export default Home
