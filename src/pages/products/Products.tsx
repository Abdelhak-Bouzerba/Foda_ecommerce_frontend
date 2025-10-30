import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components/products/ProductCard";
import type { Product } from "../../components/products/ProductCard";


const Products = () => {
    const location = useLocation();
    const products: Product[] = location.state.products || [];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}


export default Products;