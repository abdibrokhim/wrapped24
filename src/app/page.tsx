import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center mb-8">
          i built my 2024 wrapped with one shot prompt using different llms
        </h1>

        <div className="grid grid-cols-3 gap-8">
          <Link href="/claude3.5-sonnet" className="p-4 border rounded hover:bg-gray-100">
            Claude 3.5 Sonnet
          </Link>
          
          <Link href="/gemini1.5-pro" className="p-4 border rounded hover:bg-gray-100">
            Gemini 1.5 Pro
          </Link>
          
          <Link href="/gpt-4o" className="p-4 border rounded hover:bg-gray-100">
            GPT 4o
          </Link>
          
          <Link href="/gpt-o1-mini" className="p-4 border rounded hover:bg-gray-100">
            GPT o1 mini
          </Link>
          
          <Link href="/v0-dev" className="p-4 border rounded hover:bg-gray-100">
            v0
          </Link>
        </div>
      </main>
    </div>
  );
}
