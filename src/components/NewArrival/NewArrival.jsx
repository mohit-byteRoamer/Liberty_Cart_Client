import SectionTopBar from "../SectionTopBar";
import { Card, Row, Col } from "antd";
import ServiceCard from "./ServiceCard";
import { TruckOutlined } from "@ant-design/icons";
import { CustomerServiceFilled } from "@ant-design/icons";
import { ArrowUpOutlined } from "@ant-design/icons";
// import 'antd/dist/antd.css'; // Ant Design CSS

function NewArrival() {
   const { Meta } = Card;

   // const cards = [
   //    {
   //       id: 1,
   //       title: "Card 1",
   //       description: "This is the first card.",
   //       image: "https://via.placeholder.com/150",
   //    },
   //    {
   //       id: 2,
   //       title: "Card 2",
   //       description: "This is the second card.",
   //       image: "https://via.placeholder.com/150",
   //    },
   //    {
   //       id: 3,
   //       title: "Card 3",
   //       description: "This is the third card.",
   //       image: "https://via.placeholder.com/150",
   //    },
   //    {
   //       id: 4,
   //       title: "Card 4",
   //       description: "This is the fourth card.",
   //       image: "https://via.placeholder.com/150",
   //    },
   // ];

   return (
      <section className="px-5 py-16 relative">
         {/* 1st section */}
         <SectionTopBar text="Featured" />

         <div className="flex flex-col space-y-10">
            {/* 2nd section */}
            <div className="flex items-center justify-between py-5 w-full">
               {/* Title and Timer */}
               <div className="flex items-end">
                  <h1 className="text-3xl font-bold">New Arrival</h1>
               </div>
            </div>

            <div className="flex flex-col gap-y-20">
               {/* 3rd section */}
               <div className="max-w-full mx-auto text-white">
                  <Row gutter={[16, 16]}>
                     {/* Large Card */}
                     <Col xs={24} md={10}>
                        <Card
                           hoverable
                           className="relative overflow-hidden"
                           cover={
                              <img
                                 className="h-[546px] w-full object-cover"
                                 alt="PlayStation 5"
                                 src="https://images.unsplash.com/photo-1605296830714-7c02e14957ac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              />
                           }>
                           <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
                              <Meta
                                 title="PlayStation 5"
                                 description="Black and White version of the PS5 coming out on sale."
                                 className="text-white"
                              />
                              <button className="mt-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700">
                                 Shop Now
                              </button>
                           </div>
                        </Card>
                     </Col>

                     {/* Small Cards */}
                     <Col xs={24} md={14}>
                        <Row gutter={[16, 16]}>
                           <Col xs={24} sm={24}>
                              <Card
                                 hoverable
                                 className="relative overflow-hidden"
                                 cover={
                                    <img
                                       alt="Women's Collections"
                                       src="https://img.freepik.com/premium-photo/young-woman-black-hood-dark-black-background-banner_164357-14354.jpg?w=826" // Replace with your image URL
                                       className="h-72 w-full object-cover"
                                    />
                                 }>
                                 <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                    <Meta
                                       title="Women's Collections"
                                       description="Featured women collections that give you another vibe."
                                       className="text-white"
                                    />
                                    <button className="mt-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700">
                                       Shop Now
                                    </button>
                                 </div>
                              </Card>
                           </Col>

                           <Col xs={24} sm={12}>
                              <Card
                                 hoverable
                                 className="relative overflow-hidden"
                                 cover={
                                    <img
                                       alt="Speakers"
                                       src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
                                       className="h-48 w-full object-cover"
                                    />
                                 }>
                                 <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                    <Meta
                                       title="Speakers"
                                       description="Amazon wireless speakers."
                                       className="text-white"
                                    />
                                    <button className="mt-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700">
                                       Shop Now
                                    </button>
                                 </div>
                              </Card>
                           </Col>

                           <Col xs={24} sm={12}>
                              <Card
                                 hoverable
                                 className="relative overflow-hidden"
                                 cover={
                                    <img
                                       alt="Perfume"
                                       src="https://plus.unsplash.com/premium_photo-1676748933022-e1183e997436?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
                                       className="h-48 w-full object-cover"
                                    />
                                 }>
                                 <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                    <Meta
                                       title="Perfume"
                                       description="GUCCI INTENSE OUD EDP."
                                       className="text-white"
                                    />
                                    <button className="mt-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700">
                                       Shop Now
                                    </button>
                                 </div>
                              </Card>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </div>

               {/* 4th section */}
               <div className="flex items-center justify-between">
                  <ServiceCard
                     icon={
                        <TruckOutlined className="text-3xl text-white bg-black p-2 rounded-full" />
                     }
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
         </div>
         {/* 5th section */}
         <button className="absolute bottom-[-30px] right-0 w-12 h-12 bg-gray-200 text-black rounded-full transform transition-transform duration-300 ease-out hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white animate-pulse">
            <ArrowUpOutlined />
         </button>
      </section>
   );
}

export default NewArrival;
