import Head from "next/head";
import Image from "next/image";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-900">
      <div className="text-5xl font-mono text-green-400/95 ">
        <Timer />
      </div>
    </div>
  );
}
