import React from "react";
import Timer from "../components/Timer";
import Head from "next/head";

function ver2() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-slate-900 flex items-center justify-center w-full h-screen">
        <div className="text-green-400/95 font-roboto-mono text-5xl">
          <Timer />
        </div>
      </div>
    </>
  );
}

export default ver2;
