import React from 'react';
import Home from './pages/home';
import profile from '../src/pages/image/rika.jpg'
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
</head>
function App() {
  return (
    <div className="flex h-screen m-0 p-0 w-full font-sans">
      <nav className="w-20 bg-neutral-800 text-white h-screen flex flex-col items-center p-5 space-y-6 w-40">
  <ul className="list-none w-full space-y-8">
   
    <li className="w-full flex flex-col items-center">
      <div className=''>
      <a href="#home" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-home text-3xl mb-1"></i>
        <span className="text-sm">Home</span>
      </a></div>
    </li>
    
    <li className="w-full flex flex-col items-center">
      <a href="#about" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-user text-3xl mb-1"></i>
        <span className="text-sm">About</span>
      </a>
    </li>
  
    <li className="w-full flex flex-col items-center">
      <a href="#favorite" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-heart text-3xl mb-1"></i>
        <span className="text-sm">Favorite</span>
      </a>
    </li>
    
    <li className="w-full flex flex-col items-center">
      <a href="#projects" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-eye text-3xl mb-1"></i>
        <span className="text-sm">Projects</span>
      </a>
    </li>

    <li className="w-full flex flex-col items-center">
      <a href="#contact" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-envelope text-3xl mb-1"></i>
        <span className="text-sm">Contact</span>
      </a>
    </li>
  </ul>
</nav>

{/* Home section */}     
      <div className="flex-1 overflow-y-auto p-0 text-zinc-300">
        <section id="home" className="w-full flex flex-col bg-black h-auto">
          <div className='w-full flex flex-col bg-black h-auto items-center justify-center'>
          <h1 className="text-9xl font-bold mt-10 ">I'm Mararika PISETH</h1>
          <p className="text-3xl mt-2 ">UX / UI and Front-end developer</p>
          <img
            src={profile}
            alt="Main"
            className="w-9/12 h-full mt-20 object-cover"
          />
          </div>
          <br /><br />
        </section>

{/* About section */}      
        <section id="about" className="h-auto w-full bg-black p-5">
          <div className='ml-48 mt-20'>
          <h1 class="text-6xl text-left">About me</h1>
          <div class="w-96 h-1 bg-slate-300 mt-5"></div>
          <br /><br />
          <p className='text-3xl text-zinc-400'>My name is Piseth Mararika, I’m 18 years old. I am a student study at School of Business in PSE <br /> 
          institute. I study Web Mobile App and Development skill. I’m from Kampong Thom Province <br />
          now I live in Phnom Penh cityfor studying.When I free time I like research information that relative <br />
          with technology, watching news, movie and sometimes dance.</p>

          <h1 class="text-4xl text-left mt-20">Education</h1>
          <div className='text-3xl font-sans mt-8 text-zinc-400'>
            <li>2013-2019 Norodom Ranariddh Taing Kork Primary School</li>
            <li>2020-2022 Hun Sen Taing Kork Secondary School</li>
            <li>2023-2025 PSE Institute</li>
          </div>

          <h1 class="text-4xl text-left mt-20">Experiences</h1>
          <div className='text-3xl font-sans mt-8 text-zinc-400'>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
          </div>

          <h1 class="text-4xl text-left mt-20">My skills</h1>
          <div className='text-left  ml-8'>
            <p className='text-3xl mt-10 text-zinc-400'>UX / UI</p>
            <div className='w-10/12 h-12 bg-zinc-500 mt-5'>
              <div className='w-10/12 h-12 bg-white'>
                {/* <b className='text-zinc-500 text-xl'>80%</b> */}
              </div>
            </div>

            <p className='text-3xl mt-6 text-zinc-400'>B a c k E n d</p>
            <div className='w-11/12 h-12 bg-zinc-500 mt-5'>
              <div className='w-64 h-12 bg-white'>
                {/* <b className='text-zinc-500 text-xl'>80%</b> */}
              </div>
            </div>

            <p className='text-3xl mt-6 text-zinc-400'>F r o n t E n d</p>
            <div className='w-11/12 h-12 bg-zinc-500 mt-5'>
              <div className='w-8/12 h-12 bg-white'>
                {/* <b className='text-zinc-500 text-xl'>80%</b> */}
              </div>
            </div>
          </div>
            </div>
            <div className='w-full h-1 bg-zinc-400 mt-20'></div>
        </section>
      
{/* Favorite section */}
        <section id="favorite" className="h-auto w-full bg-black p-5">
        <div className='ml-20 mt-20'>
          <h1 class="text-8xl text-left">Favorite</h1>
          <div class="w-2/5 h-1 bg-slate-300 mt-5"></div>
          <br /><br />

          <h1 class="text-6xl text-left mt-20">Education</h1>
          <div className='text-5xl font-sans mt-8 text-zinc-400'>
            <li>2013-2019 Norodom Ranariddh Taing Kork Primary School</li>
            <li>2020-2022 Hun Sen Taing Kork Secondary School</li>
            <li>2023-2025 PSE Institute</li>
          </div>

          <h1 class="text-6xl text-left mt-20">Experiences</h1>
          <div className='text-5xl font-sans mt-8 text-zinc-400'>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
            <li>link project</li>
          </div>

            </div>
            <div className='w-full h-1 bg-zinc-400 mt-20'></div>
        </section>
      
        <section id="projects" className="h-screen w-full bg-green-100 p-5">
          <h2 className="text-2xl">Projects Section</h2>
          <p>Here is the Projects section.</p>
        </section>
      
        <section id="contact" className="h-screen w-full bg-yellow-100 p-5">
          <h2 className="text-2xl">Contact Section</h2>
          <p>This is the Contact section.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
