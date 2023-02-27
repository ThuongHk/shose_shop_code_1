import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

type Props = {}
 const TemplateDefault:React.FC = ({children}:any) => {
  return (
    <>
      <Header/>
     {children}
      <Footer/>
      </>
  )
}


export default TemplateDefault