import Head from "next/head";
import Image from "next/image";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="flex items-center justify-center bg-[url('../components/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg')] w-full h-screen">
        <div className="h-[80%] w-[80%] bg-black border rounded-lg">
          <div className="h-10 bg-slate-300 object-contain ">
            Terminal example
          </div>
          <div className="text-5xl font-roboto-mono text-green-400/95 ">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}
