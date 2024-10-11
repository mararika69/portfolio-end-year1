import React from 'react';
import Home from './pages/home';
import profile from '../src/pages/image/rika.jpg'
import phone from '../src/pages/image/ph.png'
import email from '../src/pages/image/email.png'
import location from '../src/pages/image/location.png'
import send from '../src/pages/image/send.png'
import bike from '../src/pages/image/bike.png'
import weather from '../src/pages/image/weather.png'
import fairy from '../src/pages/image/fairy.png'
import survey from '../src/pages/image/surveyform.png'
import minimal from '../src/pages/image/minimal.png'
import discord from '../src/pages/image/discord.png'
import telegram from '../src/pages/image/telegram.png'
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="flex h-screen m-0 p-0 w-full font-sans">
      <nav className=" bg-neutral-800 text-white h-screen flex flex-col items-center p-5 space-y-6 w-40">
  <ul className="list-none w-full space-y-8">
   
    <li className="w-full flex flex-col items-center">
      <div className=''>
      <a href="#home" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-home text-3xl mb-1"></i>
        <span className="text-lg hover:text-zinc-400">Home</span>
      </a></div>
    </li>
    
    <li className="w-full flex flex-col items-center">
      <a href="#about" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-user text-3xl mb-1"></i>
        <span className="text-lg hover:text-zinc-400">About</span>
      </a>
    </li>
  
    <li className="w-full flex flex-col items-center">
      <a href="#favorite" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-heart text-3xl mb-1"></i>
        <span className="text-lg hover:text-zinc-400">Favorite</span>
      </a>
    </li>
    
    <li className="w-full flex flex-col items-center">
      <a href="#projects" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-eye text-3xl mb-1"></i>
        <span className="text-lg hover:text-zinc-400">Projects</span>
      </a>
    </li>

    <li className="w-full flex flex-col items-center">
      <a href="#contact" className="flex flex-col items-center text-white no-underline">
        <i className="fas fa-envelope text-3xl mb-1"></i>
        <span className="text-lg hover:text-zinc-400">Contact</span>
      </a>
    </li>
  </ul>
</nav>

{/* Home section */}     
      <div className="flex-1 overflow-y-auto p-0 text-zinc-300">
        <section id="home" className="w-full flex flex-col bg-black h-auto">
          <div className='w-full flex flex-col bg-black h-auto items-center justify-center'>
          <h1 className="text-9xl font-bold mt-10 ">I'm Mararika PISETH</h1>
          <h1 className='text-3xl mt-2'>
              <Typewriter words={["UX / UI and Front-end developer",]}loop={false}/>
            </h1>
          <img
            src={profile}
            alt="Main"
            className="w-9/12 h-full mt-20 object-cover"/>
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
          <div className='text-3xl font-sans mt-6 text-zinc-400'>
            <li>2013-2019 Norodom Ranariddh Taing Kork Primary School</li>
            <li>2020-2022 Hun Sen Taing Kork Secondary School</li>
            <li>2023-2025 PSE Institute</li>
          </div>

          <h1 class="text-4xl text-left mt-20">Volunteer</h1>
          <div className='text-3xl font-sans mt-6 text-zinc-400'>
            <li>Volunteer Khmer Sea Games</li>
            <li>Volunteer at the libraries</li>
            <li>Winter Camps</li>
            <li>Youth Scouts</li>
          </div>

          <h1 class="text-4xl text-left mt-20">My skills</h1>
          <div className='text-left  ml-8'>
            <p className='text-2xl mt-10 text-zinc-400'>UX / UI</p>
            <div className='w-10/12 h-12 bg-zinc-500 mt-5'>
              <div className='w-10/12 h-12 bg-white'>
                {/* <b className='text-zinc-500 text-xl'>80%</b> */}
              </div>
            </div>

            <p className='text-2xl mt-6 text-zinc-400'>B a c k E n d</p>
            <div className='w-10/12 h-12 bg-zinc-500 mt-5'>
              <div className='w-64 h-12 bg-white'>
                {/* <b className='text-zinc-500 text-xl'>80%</b> */}
              </div>
            </div>

            <p className='text-2xl mt-6 text-zinc-400'>F r o n t E n d</p>
            <div className='w-10/12 h-12 bg-zinc-500 mt-5'>
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
        <div className='ml-48 mt-20'>
          <h1 class="text-6xl text-left">Favorite</h1>
          <div class="w-96 h-1 bg-slate-300 mt-5"></div>
          <h1 class="text-4xl text-left mt-20">Activities</h1>
          <div className='text-3xl font-sans mt-6 text-zinc-400'>
            <li>Reading Books</li>
            <li>Watch Movie</li>
            <li>Dance K-pop song</li>
            <li>Listen English song & Ghost stories</li>
            <li>Research some Information</li>
          </div>

          <h1 class="text-4xl text-left mt-20">Food & Drink</h1>
          <div className='text-3xl font-sans mt-6 text-zinc-400'>
            <li>Khmer Noodle</li>
            <li>Korean Noodle</li>
            <li>Meat boall</li>
            <li>Coca-cola</li>
            <li>Coffee</li>
          </div>
          
            </div>
            <div className='w-full h-1 bg-zinc-400 mt-20'></div>
        </section>
      
        <section id="projects" className="h-auto w-full bg-black p-5">
        <div className='ml-48 mt-20'>
          <h1 class="text-6xl text-left">Projects</h1>
          <div class="w-96 h-1 bg-slate-300 mt-5"></div>
          <h1 class="text-4xl text-left mt-20">Experiences</h1>
          <div className='text-3xl font-sans mt-6 text-zinc-400'>
            <li>
              <a href="https://limsopheak16.github.io/Selling-bicycle-2/" className='hover:text-white'>Selling Bicycle Website</a>
            </li>
            <li>
              <a href="https://fairy-phi.vercel.app/" className='hover:text-white'>Fairy Tales Website</a>
            </li>
            <li>
              <a href="https://pp-weather-azure.vercel.app/" className='hover:text-white'>Weather Website</a>
            </li>
            <li>
              <a href="https://survey-and-dashboard.vercel.app/" className='hover:text-white'>Survey Form stuents</a>
            </li>
            <li>
              <a href="https://minimal-blog-beryl.vercel.app/" className='hover:text-white'>Minimal Blog Website</a>
            </li>
          </div>
          <div className='mt-10 flex space-x-2'>
            <img src={bike} alt="" className='w-72 h-40 object-cover' />
            <img src={fairy} alt="" className='w-60 object-cover' />
            <img src={weather} alt="" className='w-72 h-40 object-cover' />
            <img src={survey} alt="" className='w-60 object-cover' />
            <img src={minimal} alt="" className='w-72 h-40 object-cover' />
          </div>
            </div>
            <div className='w-full h-1 bg-zinc-400 mt-20'></div>
        </section>
      
        <section id="contact" className="h-auto w-full bg-black p-5">
        <div className='ml-48 mt-20'>
          <h1 class="text-6xl text-left">My Contact</h1>
          <div class="w-96 h-1 bg-slate-300 mt-5"></div>
          <div className='mt-10 text-2xl font-sans text-zinc-500'>
            <div className='flex items-center space-x-2'><img src={phone} alt="Main" className='text-white w-10' />
            <p>+855 969 668 568</p></div>

            <div className='flex items-center space-x-2'><img src={email} alt="" className='text-white w-10' />
            <a href="mailto:https://mail.google.com/mail/u/0/#inbox">mararyka.piseth@institute.pse.ngo</a></div>

            <br />
            <div className='flex items-center space-x-2 -mt-8'><img src={location} alt="" className='text-white w-10' />
            <a href="https://www.google.com/maps/place/PSE+-+Pour+un+Sourire+d'Enfant/@11.5445916,104.8839994,17z/data=!3m1!4b1!4m6!3m5!1s0x310950549f27fc1b:0x65c2d5b055de0d9d!8m2!3d11.5445916!4d104.8865743!16s%2Fg%2F1tgcvj26?entry=ttu">
            Stueng Mean chey tmey, Phnom Penh.</a></div>
          </div>

          <p className='mt-10 text-2xl font-sans text-zinc-500'>Let's get in touch. Send me a message:</p>

          <input className='mt-5 w-10/12 h-12 text-zinc-800 pl-5' type="text" placeholder='Name' />
          <input className='mt-5 w-10/12 h-12 text-zinc-800 pl-5' type="text" placeholder='Email' />
          <input className='mt-5 w-10/12 h-12 text-zinc-800 pl-5' type="text" placeholder='Subject' />
          <input className='mt-5 w-10/12 h-36 text-zinc-800 pl-5 pb-24' type="text" placeholder='Message' />
            </div>
            <div className='flex justify-end'>
            <button className='mt-5 w-52 h-12 bg-white text-black mr-64 hover:bg-zinc-400 flex items-center' type='submit'>
            <img src={send} alt="" className='w-14 ml-4' /><p className='-ml-3'>SEND MESSAGE</p></button>
            </div>
            <br /><br />
            <div className='ml-32 w-12 flex items-center space-x-4'>
              <img src={discord} alt="" className='' />
              <img src={telegram} alt="" className='' />
            </div>
            
              <p className='text-zinc-500 ml-24 mt-2'>My personal contacts</p>
            <br /><br /><br />
        </section>
      </div>
    </div>
  );
}

export default App;
