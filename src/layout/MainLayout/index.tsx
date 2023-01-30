import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";

interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <section
        style={{
          minHeight: "80vh",
        }}
      >
        {children}
      </section>
      <Footer />
    </>
  );
}
