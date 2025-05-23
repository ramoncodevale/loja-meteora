import Banner from "./components/banner";
import Category from "./components/category";
import DetaisProducts from "./components/details-products";
import Footer from "./components/footer";
import Header from "./components/header";
import Input from "./components/input";
import Networks from "./components/networks";
import Products from "./components/products";

const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <Category />
    <Products />
    <Networks />
    <Input />
    <DetaisProducts  onClose={()=> setShowModal(false)}/>
    <Footer />
    </>
   );
}
 
export default App;