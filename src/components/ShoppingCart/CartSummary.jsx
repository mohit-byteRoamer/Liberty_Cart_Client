/* eslint-disable react/prop-types */
// CartSummary.jsx
import { Input, Button, Select, Form, Card, Descriptions, Statistic, Col, Row } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createOrderLoad } from "../../redux/action/order_actions";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ cartData }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { Option } = Select;
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   // Calculate SubTotal, Tax, Shipping, Discount, and Total
   const subTotal = cartData.reduce((prev, item) => prev + item.price * item.quantity, 0);
   const tax = subTotal * 0.18; // 5% tax
   const shippingCharges = 0; // Free shippingCharges
   const discount = subTotal * 0.18; // 5% discount
   const total = subTotal + tax + shippingCharges - discount; // Final Total
   const status = "Pending";

   const countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo, Democratic Republic of the",
      "Congo, Republic of the",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, North",
      "Korea, South",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Macedonia",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
   ];

   const indianStates = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
   ];

   // On form submit
   const onSubmit = (data) => {
      const orderPayload = {
         shippingInfo: {
            address: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
            pinCode: data.pinCode,
         },
         subTotal: subTotal,
         tax: tax,
         shippingCharges: shippingCharges,
         discount: discount,
         total: total,
         status: status,
         orderItems: cartData.map((item) => ({
            name: item.name,
            photo: item.image,
            price: item.price,
            quantity: item.quantity,
            productId: item.productId,
         })),
      };
      dispatch(createOrderLoad({ apiPayload: orderPayload, navigate }));
   };

   return (
      <Form onFinish={handleSubmit(onSubmit)} className="p-4 bg-white shadow-md rounded-md">
         <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>

         {/* Address */}
         <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{
               required: "Address is required",
               minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters long",
               },
               maxLength: {
                  value: 100,
                  message: "Address cannot exceed 100 characters",
               },
               pattern: {
                  value: /^[a-zA-Z0-9\s,.'-]{10,100}$/,
                  message: "Invalid address format",
               },
               validate: {
                  startsWithNumber: (value) =>
                     !/^\d/.test(value) || "Address cannot start with a number",
                  startsWithSpace: (value) =>
                     !/^\s/.test(value) || "Address cannot start with a space",
                  endsWithSpace: (value) => !/\s$/.test(value) || "Address cannot end with a space",
               },
            }}
            render={({ field }) => (
               <Input {...field} placeholder="Address" allowClear className="mb-2" />
            )}
         />
         {errors.address && <p className="text-red-500">{errors.address.message}</p>}

         {/* City */}
         <Controller
            name="city"
            control={control}
            defaultValue={""}
            rules={{
               required: "City is required",
               pattern: {
                  value: /^[a-zA-Z\s]{2,30}$/,
                  message: "Invalid city format",
               },
               minLength: {
                  value: 2,
                  message: "City must be at least 2 characters long",
               },
               maxLength: {
                  value: 30,
                  message: "City cannot exceed 30 characters",
               },
               validate: {
                  startsWithNumber: (value) =>
                     !/^\d/.test(value) || "Address cannot start with a number",
                  startsWithSpace: (value) =>
                     !/^\s/.test(value) || "Address cannot start with a space",
                  endsWithSpace: (value) => !/\s$/.test(value) || "Address cannot end with a space",
               },
            }}
            render={({ field }) => (
               <Input {...field} placeholder="City" allowClear className="mb-2" />
            )}
         />
         {errors.city && <p className="text-red-500">{errors.city.message}</p>}

         {/* State */}
         <Controller
            name="state"
            control={control}
            defaultValue={undefined}
            rules={{ required: "State is required" }}
            render={({ field }) => (
               <Select
                  {...field}
                  className="w-full mb-2"
                  placeholder="State" // Correctly setting placeholder
                  allowClear>
                  {indianStates &&
                     indianStates.map((state, index) => (
                        <Option key={index} value={state}>
                           {state}
                        </Option>
                     ))}
               </Select>
            )}
         />
         {errors.state && <p className="text-red-500">{errors.state.message}</p>}

         {/* Country */}
         <Controller
            name="country"
            control={control}
            defaultValue={undefined}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
               <Select {...field} className="w-full mb-2" placeholder="Country">
                  {countries.map((country, index) => (
                     <Option key={index} value={country}>
                        {country}
                     </Option>
                  ))}
               </Select>
            )}
         />
         {errors.country && <p className="text-red-500">{errors.country.message}</p>}

         {/* Pin Code */}
         <Controller
            name="pinCode"
            control={control}
            defaultValue=""
            rules={{
               required: "ZIP Code is required",
               pattern: {
                  value: /^\d{6}$/,
                  message: "Invalid ZIP Code format",
               },
               minLength: {
                  value: 6,
                  message: "ZIP Code must be 6 digits long",
               },
               maxLength: {
                  value: 6,
                  message: "ZIP Code cannot exceed 6 digits",
               },
            }}
            render={({ field }) => <Input {...field} placeholder="Pin Code" className="mb-2" />}
         />
         {errors.pinCode && <p className="text-red-500">{errors.pinCode.message}</p>}

         <div className="border-t-2 border-b-2 pb-2 shadow-md">
            <h3 className="font-semibold text-lg mt-4 mb-4">Coupon Code</h3>

            {/* Coupon Code */}
            <Controller
               name="coupon"
               control={control}
               defaultValue=""
               render={({ field }) => (
                  <Input {...field} placeholder="Enter Coupon Code" className="mb-2" />
               )}
            />
            {errors.coupon && <p className="text-red-500">{errors.coupon.message}</p>}
            <Button type="primary" htmlType="button" block>
               Apply
            </Button>
         </div>

         {/* <div className="mt-4 p-4 bg-yellow-100 rounded-md">
            <div className="flex justify-between mb-2">
               <span>Cart SubTotal</span>
               <span>$71.50</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Tax</span>
               <span>4</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Shipping</span>
               <span>Free</span>
            </div>
            <div className="flex justify-between mb-2">
               <span>Discount</span>
               <span>-$4.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
               <span>Cart Total</span>
               <span>$67.50</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
               <span>Status</span>
               <span></span>
            </div>
         </div> */}
         <Card title="Order Summary" bordered={false} className="bg-[#fffbea]">
            <Descriptions size="small" column={1} bordered>
               <Descriptions.Item label="Cart SubTotal">
                  <Statistic
                     style={{ fontSize: "12px" }}
                     value={subTotal ?? 0}
                     precision={2}
                     prefix=""
                  />
               </Descriptions.Item>
               <Descriptions.Item label="Tax">
                  <Statistic value={tax ?? 0} precision={2} prefix="" />
               </Descriptions.Item>
               <Descriptions.Item label="Shipping Charges">
                  <Statistic value={shippingCharges} precision={2} prefix="" />
               </Descriptions.Item>
               <Descriptions.Item label="Discount">
                  <Statistic value={discount} precision={2} prefix="" />
               </Descriptions.Item>
            </Descriptions>

            <Row gutter={50} className="pt-5 px-2">
               <Col span={12}>
                  <Statistic title="Cart Total" value={total} precision={2} prefix="" />
               </Col>
               <Col span={12}>
                  <Statistic title="Status" value={status} />
               </Col>
            </Row>
         </Card>
         <Button type="primary" block htmlType="submit" className="mt-4">
            Place Order
         </Button>
      </Form>
   );
};

export default CartSummary;

// {
//    "shippingInfo": {
//        "address": "123 Main St",
//        "city": "Los Angeles",
//        "state": "CA",
//        "country": "USA",
//        "pinCode": "90001"
//    },
//    "subTotal": 150.50,
//    "tax": 15.00,
//    "shippingCharges": 5.00,
//    "discount": 10.00,
//    "total": 160.50,
//    "status": "pending",
//    "orderItems": [
//        {
//            "name": "GOOD QUALITY INDUCTION STOVE",
//            "photo": "http://res.cloudinary.com/dskk1yghj/image/upload/v1728021688/exmrhnzqaadowce8j5xh.jpg",
//            "price": 1417,
//            "quantity": 1,
//            "productId": "66ff8561a9cd55347dcf5fd7"
//        }
//    ]
// }
