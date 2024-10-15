// CartSummary.jsx
import { Input, Button, Select, Form } from "antd";
import { useForm, Controller } from "react-hook-form";

const CartSummary = () => {
   const { Option } = Select;
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

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
      console.log("Form Data: ", data);
   };

   return (
      <Form onFinish={handleSubmit(onSubmit)} className="p-4 bg-white shadow-md rounded-md">
         <h3 className="font-semibold text-lg mb-4">Shipping Address</h3>

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

         {/* State / City */}
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

         {/* Address */}
         <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: "Address is required" }}
            render={({ field }) => <Input {...field} placeholder="Address" className="mb-2" />}
         />
         {errors.address && <p className="text-red-500">{errors.address.message}</p>}

         {/* ZIP Code */}
         <Controller
            name="pinCode"
            control={control}
            defaultValue=""
            rules={{ required: "ZIP Code is required" }}
            render={({ field }) => <Input {...field} placeholder="ZIP Code" className="mb-2" />}
         />
         {errors.pinCode && <p className="text-red-500">{errors.pinCode.message}</p>}

         <Button type="primary" htmlType="submit" block>
            Update Address
         </Button>

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

         <div className="mt-4 p-4 bg-yellow-100 rounded-md">
            <div className="flex justify-between mb-2">
               <span>Cart Subtotal</span>
               <span>$71.50</span>
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
         </div>

         <Button type="primary" block className="mt-4">
            Place Order
         </Button>
      </Form>
   );
};

export default CartSummary;
