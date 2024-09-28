import ProductCard from "../ProductCard/ProductCard";

const ProductSlider = ({ flashSalesProduct, latestProduct, OurProducts }) => {
  // Combine all products into a single array
  const combinedProducts = [
    ...(flashSalesProduct || []),
    ...(latestProduct || []),
    ...(OurProducts || []),
  ];

  return (
    <div className="p-4">
      {combinedProducts.length > 0 ? (
          combinedProducts.map((product, index) => (
            <div key={index} className="p-2">
              <ProductCard product={product} />
            </div>
          ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default ProductSlider;
