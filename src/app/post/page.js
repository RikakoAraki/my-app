"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Cloud, Star, Ribbon, Heart } from "lucide-react";

export default function PostPage() {
  const textareaRef = useRef();
  const router = useRouter();

  const handlePost = () => {
    const content = textareaRef.current.value.trim();
    if (!content) return;
    // 投稿データをローカルストレージに保存
    const posts = JSON.parse(localStorage.getItem("yume_posts") || "[]");
    posts.unshift({
      id: Date.now(),
      user: {
        name: "ゆめかわユーザー",
        username: "yume_kawaii",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
      },
      content,
      createdAt: new Date().toLocaleString("ja-JP", { hour12: false })
    });
    localStorage.setItem("yume_posts", JSON.stringify(posts));
    router.push("/"); // 投稿後タイムラインへ遷移
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 font-['Zen_Maru_Gothic','Kiwi_Maru',cursive]">
      <div className="bg-white/80 rounded-3xl shadow-xl p-8 w-full max-w-md relative">
        {/* デコレーションLucideアイコン */}
        <Cloud className="absolute -top-8 -left-8 w-16 h-16 text-pink-200 opacity-40" />
        <Star className="absolute -bottom-8 -right-8 w-16 h-16 text-purple-200 opacity-40" />
        <Ribbon className="absolute -top-8 -right-8 w-12 h-12 text-pink-300 opacity-40" />
        <h2 className="text-2xl font-bold mb-4 text-pink-400">新しい投稿</h2>
        <textarea
          ref={textareaRef}
          className="w-full h-32 p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-300 text-lg resize-none placeholder-pink-300 font-['Zen_Maru_Gothic','Kiwi_Maru',cursive]"
          placeholder="いまどうしてる？"
        />
        <button
          onClick={handlePost}
          className="mt-4 w-full py-3 rounded-2xl bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 text-white font-bold text-lg shadow-md hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
        >
          <span>投稿する</span>
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
