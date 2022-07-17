import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import googleLogo from '../public/googlelogo_color_272x92dp.png';
import { NavLink } from '../components/navLink';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = (e) => {
    setValue("");
  }

  return (
    <div className="h-screen overflow-hidden text-sm">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google search engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="flex flex-col justify-center items-center mt-56">
        <Image 
          src={googleLogo}
          alt="Google Logo"
          height={92}
          width={272}
        />
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 fill-slate-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
              height="30" viewBox="0 0 30 30">
              <path
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
            </svg>
          </span>
          <input
            className="w-582 h-11 my-8 text-base bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-10 pr-4 focus:outline-none hover:shadow-[0_1px_6px_0_rgba(0,0,0,0.28)]"
            type="text" value={value} onChange={handleChange}
          />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
              </svg>
            </span>
        </label>  
        <div>
          <button onClick={handleSubmit} className="bg-custom-slate px-3 py-2 mx-2 rounded-md border border-custom-slate hover:border hover:border-slate-300 hover:shadow-[0_1px_1px_0_rgba(0,0,0,0.10)]">Google Search</button>
          <button onClick={handleSubmit} className="bg-custom-slate px-3 py-2 mx-2 rounded-md border border-custom-slate hover:border hover:border-slate-300 hover:shadow-[0_1px_1px_0_rgba(0,0,0,0.10)]">I'm Feeling Lucky</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}