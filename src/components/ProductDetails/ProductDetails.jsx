// import { Button, Rate, Card, List } from "antd";

// const ProductDetail = () => {
//    const product = {
//       name: "Acer Aspire Pro 12 | Laptop",
//       price: 1200,
//       oldPrice: 1500,
//       ratings: 500,
//       colors: ["black", "gray", "lightgray", "blue"],
//       information: {
//          type: "Laptop",
//          ram: "16 GB",
//          ssd: "1000 GB",
//          processorType: "Intel Core i7-12700H",
//          processorSpeed: "2.3 - 4.7 GHz",
//          displaySizeInch: "16.0",
//          displaySizeCm: "40.64 cm",
//          displayType: "OLED, Touchscreen, 120 Hz",
//          displayResolution: "2880x1620",
//       },
//       reviews: [
//          { rating: 5, count: 66 },
//          { rating: 4, count: 33 },
//          { rating: 3, count: 16 },
//          { rating: 2, count: 8 },
//          { rating: 1, count: 6 },
//       ],
//       imageUrls: [
//          "https://readymadeui.com/images/laptop5.webp",
//          "https://readymadeui.com/images/laptop2.webp",
//          "https://readymadeui.com/images/laptop3.webp",
//          "https://readymadeui.com/images/laptop4.webp",
//       ],
//    };

//    return (
//       <div className="font-sans bg-white">
//          <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
//             <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
//                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
//                   <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
//                      <img
//                         src={product.imageUrls[0]}
//                         alt="Product"
//                         className="w-3/4 rounded object-cover mx-auto"
//                      />
//                      <Button type="link" className="absolute top-4 right-4">
//                         <svg
//                            xmlns="http://www.w3.org/2000/svg"
//                            width="20px"
//                            fill="#ccc"
//                            className="mr-1 hover:fill-[#333]"
//                            viewBox="0 0 64 64">
//                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
//                         </svg>
//                      </Button>
//                   </div>

//                   <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
//                      {product.imageUrls.slice(1).map((url, index) => (
//                         <div
//                            key={index}
//                            className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
//                            <img src={url} alt={`Product${index + 2}`} className="w-full" />
//                         </div>
//                      ))}
//                   </div>
//                </div>

//                <div className="lg:col-span-2">
//                   <h2 className="text-2xl font-extrabold text-gray-800">{product.name}</h2>

//                   <div className="flex space-x-2 mt-4">
//                      <Rate disabled allowHalf defaultValue={4.0} />
//                      <h4 className="text-gray-800 text-base">{product.ratings} Reviews</h4>
//                   </div>

//                   <div className="flex flex-wrap gap-4 mt-8">
//                      <p className="text-gray-800 text-3xl font-bold">${product.price}</p>
//                      <p className="text-gray-400 text-base">
//                         <strike>${product.oldPrice}</strike>{" "}
//                         <span className="text-sm ml-1">Tax included</span>
//                      </p>
//                   </div>

//                   <div className="mt-8">
//                      <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
//                      <div className="flex flex-wrap gap-3 mt-4">
//                         {product.colors.map((color, index) => (
//                            <Button
//                               key={index}
//                               type="button"
//                               className={`w-10 h-10 ${color} border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all`}
//                            />
//                         ))}
//                      </div>
//                   </div>

//                   <div className="flex flex-wrap gap-4 mt-8">
//                      <Button type="primary" className="min-w-[200px]">
//                         Buy now
//                      </Button>
//                      <Button type="default" className="min-w-[200px]">
//                         Add to cart
//                      </Button>
//                   </div>
//                </div>
//             </div>

//             <Card
//                className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6"
//                title="Product Information">
//                <List className="mt-4 space-y-6 text-gray-800">
//                   {Object.entries(product.information).map(([key, value]) => (
//                      <List.Item key={key}>
//                         {key.toUpperCase()} <span className="ml-4 float-right">{value}</span>
//                      </List.Item>
//                   ))}
//                </List>
//             </Card>

//             <Card
//                className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6"
//                title={`Reviews(${product.reviews.length})`}>
//                <div className="grid md:grid-cols-2 gap-12 mt-4">
//                   {product.reviews.map((review) => (
//                      <div key={review.rating} className="space-y-3">
//                         <div className="flex items-center">
//                            <p className="text-sm text-gray-800 font-bold">{review.rating}.0</p>
//                            <Rate disabled allowHalf defaultValue={review.rating} className="ml-1" />
//                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
//                               <div
//                                  className={`h-full rounded bg-blue-600`}
//                                  style={{ width: `${(review.count / product.ratings) * 100}%` }}
//                               />
//                            </div>
//                            <p className="text-sm text-gray-800 font-bold ml-3">{review.count}%</p>
//                         </div>
//                      </div>
//                   ))}
//                </div>
//             </Card>
//          </div>
//       </div>
//    );
// };

// export default ProductDetail;
