import Image from "next/image";

interface Props {
  author_name: string;
  author_avatar: string;
  className?: string;
}

function Author({ author_name, author_avatar, className }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image src={author_avatar} width={48} height={48} alt="Author's avatar" />

      <p className="text-black text-xl font-bold">{author_name}</p>
    </div>
  );
}

export default Author;
