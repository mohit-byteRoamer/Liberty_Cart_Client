/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, List, Row, Col, Divider } from "antd";
import { useEffect } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // For navigation
import { deleteOrderLoad, getAllOrderLoad } from "../../redux/action/order_actions";

const ReviewOrder = () => {
   const navigate = useNavigate(); // For redirecting to the payment page
   const dispatch = useDispatch();
   const orderData = useSelector((state) => state?.OrderReducer);
   console.log("GET_ALL_ORDER", orderData?.getAllOrderData);


   useEffect(() => {
      dispatch(getAllOrderLoad());
   }, []);

   // Handle form submission to go to the payment page
   const handleProceedToPayment = () => {
      navigate("/payment"); // Navigate to the payment page after review
   };

   // Handle delete order functionality
   const handleDeleteOrder = (id, deleteOrderFunctionCall) => {
      console.log("Delete_Order's_ID", id, deleteOrderFunctionCall);
      dispatch(deleteOrderLoad({ id: id, deleteOrderFunctionCall }));
   };

   const deleteOrderFunctionCall = () => {
      dispatch(getAllOrderLoad());
   };

   return (
      <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
         {orderData?.getAllOrderData ? orderData?.getAllOrderData.map((order, index) => (
            <Card key={index} className="w-full max-w-4xl shadow-md p-6">
               <h2 className="text-2xl font-semibold mb-4">Review Your Order</h2>
               {/* Product List */}
               <List
                  itemLayout="horizontal"
                  dataSource={order.orderItems}
                  renderItem={(item) => (
                     <List.Item>
                        <List.Item.Meta
                           avatar={
                              <img
                                 src={item.photo}
                                 alt={item.name}
                                 className="w-16 h-16 object-cover"
                              />
                           }
                           title={item.name}
                           description={`Quantity: ${item.quantity}`}
                        />
                        <div className="flex items-center">
                           <LuIndianRupee />
                           <span className="text-lg font-semibold">
                              {(item.price * item.quantity).toFixed(2)}
                           </span>
                        </div>
                     </List.Item>
                  )}
               />

               <Divider />

               {/* Delivery Address */}
               <h3 className="text-lg font-semibold">Shipping Address</h3>
               <Card className="mb-4">
                  <p>
                     {order.shippingInfo.address}, {order.shippingInfo.city},{" "}
                     {order.shippingInfo.state}, {order.shippingInfo.country}
                  </p>
                  <p>PinCode: {order.shippingInfo.pinCode}</p>
               </Card>

               <h3 className="text-lg font-semibold">Payment Method</h3>
               <Card className="mb-4"></Card>

               <Divider />

               {/* Total Price */}
               <Row justify="space-between" className="mb-4">
                  <Col>
                     <h3 className="text-lg font-semibold">Total Amount:</h3>
                  </Col>
                  <Col>
                     <div className="text-lg font-semibold flex items-center text-orange-600">
                        <LuIndianRupee /> {order?.total}
                     </div>
                  </Col>
               </Row>

               <div className="flex justify-between">
                  {/* Delete Order Button */}
                  <Row justify="end">
                     <Button
                        onClick={() => handleDeleteOrder(order._id, deleteOrderFunctionCall)} // Trigger delete function
                        type="primary"
                        danger
                        size="large"
                        className="w-full">
                        Delete Order
                     </Button>
                  </Row>

                  {/* Proceed to Payment Button */}
                  <Row justify="center">
                     <Button
                        onClick={handleProceedToPayment}
                        type="primary"
                        size="large"
                        className="w-full">
                        Proceed to Payment
                     </Button>
                  </Row>
               </div>
            </Card>
         )) : <div className="text-center"><img src="https://cdn.dribbble.com/users/9620200/screenshots/17987839/media/fd60cc8251e50a8c54d3dde620ff9460.jpg" alt="" /></div>}
      </div>
   );
};

export default ReviewOrder;
