"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link className="font-extrabold text-9xl" href="/edit">
        글쓰기
      </Link>
    </div>
  );
}
