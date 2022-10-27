import Head from "next/head";
import Image from "next/image";
import Timer from "../components/Timer";
import { BsFillCircleFill } from "react-icons/bs";
import Draggable from "react-draggable";

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
        <Draggable handle="#handle" bounds="parent">
          <div className="h-[400px] sm:h-[80%] max-h-[600px] w-[80%] max-w-[900px] bg-black border rounded-lg">
            <div
              id="handle"
              className="flex rounded-t-lg items-center h-10 bg-slate-300  "
            >
              <BsFillCircleFill className="text-red-400 h-5 w-5 pl-1 drop-shadow-md" />
              <BsFillCircleFill className="text-yellow-400 h-5 w-5 pl-1 drop-shadow-md" />
              <BsFillCircleFill className="text-green-399 h-5 w-5 pl-1 drop-shadow-md" />
              <div className="mx-auto">gJahnke-bash</div>
            </div>
            <div className=" sm:text-xl font-roboto-mono text-green-400/95 ">
              gJahnke@duck-os:~$ countdown -divorce{" "}
            </div>
            <div className=" sm:text-xl font-roboto-mono text-green-400/95 flex justify-center items-center h-full pb-10">
              <Timer />
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}
