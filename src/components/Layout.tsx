import Annotation from "./Annotation";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <>
      <header>
        <Annotation />
      </header>
      <main className="bg-white-400">{children}</main>
    </>
  );
}
