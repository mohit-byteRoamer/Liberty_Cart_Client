import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCartListLoad } from "../../redux/action/cart_actions";

function UpdateCart({ id }) {
   const dispatch = useDispatch();

   const handleClick = (e, id) => {
      e.stopPropagation();
      e.preventDefault();

      dispatch(updateCartListLoad({ productId: id, action: "add" }));
   };

   return (
      <Link>
         <Button
            onClick={(e) => handleClick(e, id)}
            type="primary"
            className="absolute bottom-0 left-0 right-0 m-auto w-[90%] bg-black bg-opacity-80 border-none opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            Add To Cart
         </Button>
      </Link>
   );
}

export default UpdateCart;
