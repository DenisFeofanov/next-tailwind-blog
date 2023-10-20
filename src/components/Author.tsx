import { Author } from "@/interfaces/Author";
import Image from "next/image";

interface Props {
  author: Author;
  className?: string;
}

function Author({ author: { name, avatar }, className }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image src={avatar} width={48} height={48} alt="Author's avatar" />

      <p className="text-black text-xl font-bold">{name}</p>
    </div>
  );
}

export default Author;
