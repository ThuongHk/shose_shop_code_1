import React, { Fragment} from 'react';
import  { publicRoutes } from './routes/routes';
import { Routes, Route} from 'react-router-dom';
import TemplateDefault from './template/templateDefault/TemplateDefault';



function App() {
  return (
    <div className="App">
      <Routes>
          {publicRoutes.map((route:any, index)=>{
            let Page = route.component
            let Layout:any = TemplateDefault
            if(route.layout){
              Layout = route.layout
            }else if(Layout === null){
              Layout = Fragment
            }
            return (<Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>)
          })}
      </Routes>
    </div>
  );
}

export default App;
