import { BrowserRouter } from 'react-router-dom';
import { Navbar, Memes } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#1c1c1d] min-h-screen'>
        <Navbar />
        <div className='relative z-0'>
          <Memes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
