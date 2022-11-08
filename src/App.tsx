import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Library from './pages/Library';
import Projects from './pages/Projects';
import Error from './pages/Projects';
import Main from './components/Main';
import '../src/styles/main.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Main />
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/learning' element={<Learning />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
