"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CardProps {
  category: string;
  name: string;
  message?: string;
}

export default function CardFront({ category, name, message }: CardProps) {
  const pathname = usePathname();
  const isCardPage = pathname?.includes("/card/");

  return (
    <div>
      <Link href="/card/happy-birthday">
        <Image src="/cards/happy_bday.jpg" alt="card" width={300} height={200} />
        {isCardPage ? (
          <div>{message}</div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mt-2">{category}</p>
            <h2 className="text-lg font-bold text-gray-800 mt-1">{name}</h2>
          </>
        )}
      </Link>
    </div>
  );
}
