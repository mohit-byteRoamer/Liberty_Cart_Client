import React from "react";
import { Button, Card, List, Row, Col, Divider, Input, Form } from "antd";
import { LuIndianRupee } from "react-icons/lu";
import { useNavigate } from "react-router-dom"; // For navigation

const ReviewOrder = () => {
  const navigate = useNavigate(); // For redirecting to the payment page

  const addressData = {
    name: "Arsh Sharma",
    phone: "+91-9876543210",
    address: "123, MG Road, Bangalore, India",
    pincode: "560001",
  };

const cartData = [
    {
      key: "1",
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      key: "2",
      name: "Product 2",
      price: 24.99,
      quantity: 1,
      image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    // Add more items as needed
  ];

  // Calculate total price of all products in the cart
  const totalAmount = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle form submission to go to the payment page
  const handleProceedToPayment = () => {
    navigate("/payment"); // Navigate to the payment page after review
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <Card className="w-full max-w-4xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Review Your Order</h2>

        {/* Product List */}
        <List
          itemLayout="horizontal"
          dataSource={cartData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    src={item.image}
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
          <p>{addressData.name}</p>
          <p>{addressData.phone}</p>
          <p>{addressData.address}</p>
          <p>{addressData.pincode}</p>
        </Card>

        {/* Option to Change Address */}
        <Form layout="vertical">
          <Form.Item label="Change Address">
            <Input placeholder="Enter new address" />
          </Form.Item>
        </Form>

        <Divider />

        {/* Total Price */}
        <Row justify="space-between" className="mb-4">
          <Col>
            <h3 className="text-lg font-semibold">Total Amount:</h3>
          </Col>
          <Col>
            <div className="text-lg font-semibold flex items-center text-orange-600">
              <LuIndianRupee /> {totalAmount.toFixed(2)}
            </div>
          </Col>
        </Row>

        {/* Proceed to Payment Button */}
        <Row justify="center">
          <Button
            type="primary"
            size="large"
            onClick={handleProceedToPayment}
            className="w-full"
          >
            Proceed to Payment
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default ReviewOrder;
