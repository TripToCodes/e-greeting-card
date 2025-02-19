"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  category: string;
  name: string;
}

export default function Card({ category, name }: CardProps) {
  return (
    <div className="flex justify-center items-center">
      <Link href="/card/happy-birthday">
        <div className=" bg-white shadow-md rounded-lg p-4 text-center">
          <Image
            src="/cards/happy_bday.jpg"
            alt="card"
            width={300}
            height={200}
            className="rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">{category}</p>
          <h2 className="text-lg font-bold text-gray-800 mt-1">{name}</h2>
        </div>
      </Link>
    </div>
  );
}
