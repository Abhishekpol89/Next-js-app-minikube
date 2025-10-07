import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Laptop", price: 899, description: "High-performance laptop" },
  { id: 2, name: "Smartphone", price: 499, description: "Latest smartphone model" },
  { id: 3, name: "Headphones", price: 99, description: "Noise-cancelling headphones" },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <a href="/">Back to Products</a>
    </div>
  );
}

