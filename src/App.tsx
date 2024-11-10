import './App.css';
// import Demo from './hooks-examples/useState-Hook/Demo'
// import UseCase from './hooks-examples/useState-Hook/UseCase'
import { Routes, Route } from 'react-router-dom';
import ReactHooksDoc from './features/docs/ReactHooksDoc';
import PageNotFound from './pages/404/PageNotFound';
import Demo from './hooks-examples/useState-Hook/Demo';
import UseCase from './hooks-examples/useState-Hook/UseCase';
import useEffectDemo from './hooks-examples/useEffect-Hook/Demo';
import useEffectUseCase from './hooks-examples/useEffect-Hook/UseCase';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ReactHooksDoc />} />
      <Route path="/app/usestate/counter-app" element={<Demo />} />
      <Route path="/app/usestate/todo-app" element={<UseCase />} />
      
      <Route path="/app/useeffect/basic-app" element={<Demo />} />
      <Route path="/app/useeffect/fetch-data-app" element={<UseCase />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
