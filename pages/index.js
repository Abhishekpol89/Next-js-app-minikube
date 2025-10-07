import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 899 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 99 },
];

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Shopping App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

