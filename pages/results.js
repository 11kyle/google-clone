import { Result } from '../components/result';
import { ResultsMenu } from '../components/resultsMenu';
import Image from 'next/image';
import googleLogo from '../public/googleLogo_color_92x30dp.png';
import { Footer } from '../components/Footer';
import { ResultPagination } from '../components/resultPagination';

export default function Results() {
  return (
    <>
      <div className="container max-w-2xl ml-28">
        <nav className="flex items-center sticky top-0 bg-white">
          <Image 
            src={googleLogo}
            alt="Google Logo"
            height={30}
            width={92}
          />
          <label className="relative block">
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 fill-slate-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                height="30" viewBox="0 0 30 30">
                <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                </path>
              </svg>
            </span>
            <input
              className="w-[28rem] h-11 my-8 ml-10 text-base bg-white placeholder:font-italitc rounded-full py-2 pl-10 pr-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.28)] focus:outline-none hover:shadow-[0_1px_6px_0_rgba(0,0,0,0.28)]"
              type="text"
            />
          </label>
          
        </nav>
        <ResultsMenu />
        <Result />
        <ResultPagination />
      </div>
    </>
  );
}