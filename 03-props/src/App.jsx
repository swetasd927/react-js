import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Sweta' age = {15} img= 'https://images.unsplash.com/photo-1733665825622-5f84dfd0717b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
       />    
      <Card user = 'Saanya' age = {18} img = 'https://images.unsplash.com/photo-1711558025413-6fea19d86fc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226' />    
       <Card user = 'Swara' age = {14} img = 'https://images.unsplash.com/photo-1598130340340-3b590382f2df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500' />    
        
    </div>
  )
}

export default App