// src/ProductTable.jsx
import { Table, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";

const MyProduct = () => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const data = [
      {
         key: "1",
         id: "A1777EFD",
         name: "Nikon Monarch FIELD 82ED-A W/MEP-20-60, Black",
         image: "https://m.media-amazon.com/images/I/41naMAL0tEL._SL1000_.jpg",
         price: "$1,259.00",
         stock: 35,
      },
      {
         key: "2",
         id: "A285TFN",
         name: "Zeiss Ikon Distagon T ZM 2.8/15 Super Wide-Angle Camera Lens",
         image: "https://www.tanotis.com/cdn/shop/products/Zeiss_1457_856_15mm_f_2_8_ZM_Lens_1484002249000_361526_600x.jpg?v=1575982596",
         price: "$4,750.00",
         stock: 55,
      },
      {
         key: "3",
         id: "VH531GH",
         name: "Nikon Z 5 Camera Body, Black",
         image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBe8RUzI7YQcb73k7VqZP0e5czYgtk78r9g7urjawo73aFC_MrITHQp3XB9hn_cieLPHlVTu-yfRFLBQn1ggk4MSLxI7KeHmnD8k2WGtf_i1kY9R0qD48Kng",
         price: "$1,543.00",
         stock: 40,
      },
   ];

   const columns = [
      {
         title: "",
         dataIndex: "checkbox",
         render: (_, record) => (
            <Controller
               name={`select.${record.key}`} // Create a unique name for each checkbox
               control={control}
               defaultValue={false}
               rules={{ required: { value: true, message: "At least one item must be selected" } }}
               render={({ field: { onChange, value } }) => (
                  <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />
               )}
            />
         ),
      },
      {
         title: "Image",
         dataIndex: "image",
         key: "image",
         render: (image) => (
            <img src={image} alt="Product" style={{ width: "50px", height: "50px" }} />
         ),
      },
      {
         title: "ID Number",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Price",
         dataIndex: "price",
         key: "price",
      },
      {
         title: "In Stock",
         dataIndex: "stock",
         key: "stock",
      },
   ];

   const onSubmit = () => {};

   return (
      <div className="p-4">
         <form onSubmit={handleSubmit(onSubmit)}>
            <Table
               dataSource={data}
               columns={columns}
               pagination={false}
               rowSelection={{
                  type: "checkbox",
               }}
            />
            {errors.select && <span className="text-red-500">{errors.select.message}</span>}
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
               Submit
            </button>
         </form>
      </div>
   );
};

export default MyProduct;
