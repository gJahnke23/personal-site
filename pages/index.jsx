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
      <div className="flex items-center justify-center bg-slate-900 w-full h-screen">
        <div className="text-5xl font-roboto-mono text-green-400/95 ">
          <Timer />
        </div>
      </div>
    </div>
  );
}
