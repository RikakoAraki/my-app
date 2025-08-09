"use client";
import React, { useEffect, useState } from "react";

// タイムラインに表示するダミーデータ
const defaultPosts = [
  {
    id: 1,
    user: {
      name: "山田 太郎",
      username: "taro_yamada",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    content: "Next.jsでSNSを作っています！ #React #Nextjs",
    createdAt: "2025-08-09 10:00"
  },
  {
    id: 2,
    user: {
      name: "佐藤 花子",
      username: "hanako_sato",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    content: "TailwindCSS v4、最高です！",
    createdAt: "2025-08-09 10:05"
  },
  {
    id: 3,
    user: {
      name: "田中 一郎",
      username: "ichiro_tanaka",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    content: "X風SNSのUIを作るの楽しい！",
    createdAt: "2025-08-09 10:10"
  }
];

export default function Timeline() {
  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("yume_posts");
      if (stored) {
        setPosts([...JSON.parse(stored), ...defaultPosts]);
      }
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-400 drop-shadow">タイムライン</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="bg-white/70 backdrop-blur-md border border-pink-100 rounded-2xl shadow-lg p-5 flex gap-4">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-pink-200 shadow"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-500">{post.user.name}</span>
                <span className="text-pink-300 text-sm">@{post.user.username}</span>
                <span className="text-purple-200 text-xs ml-auto">{post.createdAt}</span>
              </div>
              <p className="mt-2 text-pink-700 whitespace-pre-line">{post.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
