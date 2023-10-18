function Header() {
  return (
    <header className="mt-16 mb-12 justify-between items-center flex gap-5">
      <h1 className="text-black text-8xl font-bold leading-[120%] tracking-tighter">
        Blog.
      </h1>

      <p className="text-black text-lg leading-[155.56%] ">
        Pet project for learning{" "}
        <a className="underline" href="https://nextjs.org/" target="_blank">
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="underline"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind CSS
        </a>
      </p>
    </header>
  );
}

export default Header;
