import './App.css';
// import Demo from './hooks-examples/useState-Hook/Demo'
// import UseCase from './hooks-examples/useState-Hook/UseCase'
import { Routes, Route } from 'react-router-dom';
import ReactHooksDoc from './components/ReactHooksDoc';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ReactHooksDoc />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App

//  {/* <h1 className="text-4xl font-bold">useState Hook Demo</h1> */}
//       {/* <Demo /> */}
//       <h1 className="text-4xl font-bold">useState Hook UseCase</h1>
//       <UseCase />
