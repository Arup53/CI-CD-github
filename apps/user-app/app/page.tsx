"use client";

import { useStore } from "@repo/store";
export default function Home() {
  const store = useStore((state) => state.balance);
  console.log(store);
  return <div className="text-red-900">Hello, there</div>;
}
