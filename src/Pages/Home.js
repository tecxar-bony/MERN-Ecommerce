import ProductsList from "../features/Products/components/ProductsList";
import Navbar from "../features/navbar/Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar>
          <ProductsList></ProductsList>
        </Navbar>
      </div>
    </>
  );
}

export default Home;
