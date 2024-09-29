/* eslint-disable react/no-unescaped-entities */
import { Row, Col, Card } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { CustomerServiceFilled, TruckOutlined } from "@ant-design/icons";
import ServiceCard from "../components/Cards/ServiceCard";

const team = [
   {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      img: "https://purepng.com/public/uploads/large/purepng.com-tom-cruisetom-cruisetomcruisethomascruise-mapotheramerican-actorproducerimf-agentethan-huntmission-impossible-1701528084361vstnq.png",
   },
   {
      name: "Emma Watson",
      role: "Managing Director",
      img: "https://i.pinimg.com/564x/1c/4d/c8/1c4dc8d4eb15e8461dd285aa9091fbdf.jpg",
   },
   {
      name: "Will Smith",
      role: "Product Designer",
      img: "https://img.freepik.com/premium-photo/business-man-wearing-neat-suit-solid-white-background_791818-2246.jpg?w=740",
   },
];

function About() {
   return (
      <div className="min-h-screen bg-white ">
         {/* Hero Section */}
         <section className="bg-gray-50 py-12">
            <Row className="container gap-7 mx-auto px-4" align="middle">
               <Col span={11} className="flex flex-col gap-10">
                  <h1 className="text-6xl font-bold mb-4">Our Story</h1>
                  <p>
                     Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace
                     with an active presence in Bangladesh. Supported by a wide range of tailored
                     marketing, data, and service solutions, Exclusive has 10,500 sellers and 300
                     brands and serves 3 million customers across the region. Exclusive has more
                     than 1 million products to offer, growing at a very fast rate. Exclusive offers
                     a diverse assortment in categories ranging from consumer.
                  </p>
               </Col>
               <Col span={12}>
                  <img
                     src="https://plus.unsplash.com/premium_photo-1681487933632-c9eda34fcaf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Story"
                     className="w-full h-auto object-contain rounded-md"
                  />
               </Col>
            </Row>
         </section>

         {/* Team Section */}
         <section className="py-12 bg-gray-50">
            <Row className="container flex justify-between mx-auto px-2">
               {team.map((member, index) => (
                  <Col key={index} span={7}>
                     <Card
                        hoverable
                        cover={
                           <img
                              className="object-contain h-96 pt-5"
                              alt={member.name}
                              src={member.img}
                           />
                        }
                        className="text-center">
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-gray-500">{member.role}</p>
                     </Card>
                  </Col>
               ))}
            </Row>
         </section>

         {/* 4th section */}
         <div className="flex items-center justify-around py-12 bg-gray-50">
            <ServiceCard
               icon={<TruckOutlined className="text-3xl text-white bg-black p-2 rounded-full" />}
               heading="FREE AND FAST DELIVERY"
               description="Free delivery for all orders over $140"
            />
            <ServiceCard
               icon={
                  <CustomerServiceFilled className="text-3xl text-white bg-black p-2 rounded-full" />
               }
               heading="CUSTOMER SERVICE"
               description="24/7 customer service available."
            />
            <ServiceCard
               icon={
                  <CustomerServiceFilled className="text-3xl text-white bg-black p-2 rounded-full" />
               }
               heading="MONEY BACK GUARANTEE"
               description="We return money within 30 days"
            />
         </div>
      </div>
   );
}

export default About;
