export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <a href={`/product/${product.id}`}>View Details</a>
    </div>
  );
}

