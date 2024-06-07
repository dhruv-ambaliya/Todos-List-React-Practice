import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%"
  }
  return (
     
    <footer className='bg-dark text-light py-2' style={footerStyle}>
       <p className="text-center">
        
      Copyright &copy; MyTodoList.com
        </p>
        </footer>
  )
}
