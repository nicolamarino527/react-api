import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './assets/components/Header'
import PostList from './assets/components/PostList'
import Form from './assets/components/Form'

function App() {
  return (
    <>
      <Header />
      <PostList />
      <Form />
    </>
  )
}

export default App
