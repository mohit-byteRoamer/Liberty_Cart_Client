import { Steps, Button, Card, Divider, Row, Col } from "antd";
import { CreditCardOutlined, CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";

const { Step } = Steps;

const PlaceOrder = () => {
  const orderData = {
    orderId: "ORD12345678",
    deliveryAddress: "123, MG Road, Bangalore, India",
    paymentMethod: "Credit Card",
    estimatedDelivery: "October 25, 2024",
    totalAmount: 1599.99,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <Card className="w-full max-w-3xl shadow-md">
        {/* Stepper to show order steps */}
        <Steps current={2}>
          <Step title="Shipping" icon={<HomeOutlined />} />
          <Step title="Review" icon={<CheckCircleOutlined />} />
          <Step title="Payment" icon={<CreditCardOutlined />} />
        </Steps>

        <Divider />

        {/* Order Summary Section */}
        <Row gutter={24} className="my-4">
          <Col span={12}>
            <Card title="Delivery Address">
              <p>{orderData.deliveryAddress}</p>
            </Card>
          </Col>

          <Col span={12}>
            <Card title="Payment Method">
              <p>{orderData.paymentMethod}</p>
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* Order Total */}
        <Row justify="space-between" align="middle" className="mb-4">
          <Col>
            <h3 className="font-semibold text-lg">Order ID: {orderData.orderId}</h3>
          </Col>
          <Col>
            <h3 className="text-orange-600 font-semibold text-lg">
              Total: ₹{orderData.totalAmount.toFixed(2)}
            </h3>
          </Col>
        </Row>

        <Row justify="space-between" align="middle" className="mb-4">
          <Col>
            <p>Estimated Delivery: {orderData.estimatedDelivery}</p>
          </Col>
        </Row>

        {/* Place Order Button */}
        <Row justify="center">
          <Button type="primary" size="large" shape="round">
            Place Order
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default PlaceOrder;
