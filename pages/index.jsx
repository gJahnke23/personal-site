import Head from "next/head";
import Image from "next/image";
import Timer from "../components/Timer";
import { BsFillCircleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex items-center justify-center bg-[url('../components/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg')] bg-cover bg-no-repeat w-full h-screen">
        <div className="h-[400px] sm:h-[80%] max-h-[600px] w-[80%] bg-black border rounded-lg">
          <div className="flex  items-center h-10 bg-slate-300  ">
            <BsFillCircleFill className="text-red-400 h-5 w-5 pl-1" />
            <BsFillCircleFill className="text-yellow-400 h-5 w-5 pl-1" />
            <BsFillCircleFill className="text-green-400 h-5 w-5 pl-1" />
            <div className="mx-auto">gJahnke-bash</div>
          </div>
          <div className=" sm:text-xl font-roboto-mono text-green-400/95 ">gJahnke@duck-os:~$ countdown -divorce </div>
          <div className=" sm:text-xl font-roboto-mono text-green-400/95 flex justify-center pt-[30%]">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}
