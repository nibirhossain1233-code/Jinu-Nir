import ScrollToTop from "@/components/common/ScrollToTop";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ScrollToTop/>
    </div>
  );
};

export default layout;
