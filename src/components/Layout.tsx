import Annotation from "./Annotation";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <>
      <Annotation />

      <div className="bg-white-400 px-52">
        <Header />
        {children}
      </div>
    </>
  );
}
