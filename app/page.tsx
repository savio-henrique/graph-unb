'use client';

import Image from "next/image";
import dynamic from "next/dynamic";

const GraphView = dynamic(() => {
  return import('@/src/components/GraphView');
}, { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-red-200">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-green-200 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <GraphView />
        </div>
      </main>
    </div>
  );
}
