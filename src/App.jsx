import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PostList from './assets/components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg'>
        <div className='product-list'>
          <PostList />
        </div>
      </div>
    </>
  )
}

export default App
