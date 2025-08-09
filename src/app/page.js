import Image from "next/image";
import Timeline from "./components/Timeline";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative">
      <Timeline />
      <Link href="/post">
        <button
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 text-white font-bold rounded-full shadow-lg p-5 text-2xl hover:scale-110 transition-transform duration-200 flex items-center gap-2 drop-shadow-lg"
          aria-label="新規投稿"
        >
          <Pencil className="w-7 h-7" />
          <span className="hidden sm:inline">投稿</span>
        </button>
      </Link>
    </div>
  );
}
