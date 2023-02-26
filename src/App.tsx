import React from 'react';
import  { publicRoutes } from './routes/routes';
import { Routes, Route} from 'react-router-dom';
import TemplateDefault from './template/templateDefault/TemplateDefault';


function App() {
  return (
    <div className="App">
      <Routes>
          {publicRoutes.map((route, index)=>{
            let Page = route.component
            let Layout = TemplateDefault
            return (<Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>)
          })}
      </Routes>
    </div>
  );
}

export default App;
