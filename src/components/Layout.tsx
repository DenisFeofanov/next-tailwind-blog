import Annotation from "./Annotation";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Annotation />

        <div className="bg-white-400 px-52 pb-32">
          <Header home={home} />
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
