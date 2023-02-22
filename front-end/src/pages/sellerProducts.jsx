import ProductInventory from '../components/ProductInventory';
import NavBar from '../components/NavBar';

function SellerProducts() {
  return (
    <div>
      <NavBar page="seller" />
      <ProductInventory />
    </div>
  );
}

export default SellerProducts;
