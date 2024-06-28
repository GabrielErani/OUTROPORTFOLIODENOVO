import './App.css';
import NavBar from './components/Navbar';
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';

function App() {
  return (
<>
<NavBar />
<section className='h-screen w-screen flex justify-center items-center flex-col' id='Home'>
<Home />
</section>
<section className='h-fit w-screen bg-slate-200' id='Skills'>
<Skills /> 
</section>
<section className='h-screen w-screen '>

</section>
<section className='h-screen w-screen bg-slate-200'>

</section>


</>

  );
}

export default App;
