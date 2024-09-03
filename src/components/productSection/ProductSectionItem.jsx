import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../featurers/slices/cartSlice'
import { FaHeart } from "react-icons/fa";
import { removeFromWishList, addToWishList } from '../../featurers/slices/wishListSlice';

const ProductSectionItem = ({id, img, name, text, size, price, color, totalPrice, type}) => {

  const dispatch = useDispatch()
  const defaultSize = size[0]
  const defaultColor = color[0]
  const wishes = useSelector((state) => state.wish.wish)
  const foundWish = wishes.some((wish) => wish.id === id)

  return (
    <div>
      <Card className="w-96 relative overflow-hidden">
        <Typography className="mb-2 absolute rotate-45 top-[40px] -right-[50px] flex justify-center items-center max-w-[200px] w-full bg-black bg-opacity-95 z-10 text-red-700">
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="gray" className="font-medium" textGradient>
              Size left: {defaultSize}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color: <span style={{backgroundColor: defaultColor}} className="px-2 rounded-full ml-2"></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2 items-center">
          <Button onClick={() => dispatch(addToCart({
            id: id, img: img, name: name, text: text, size: defaultSize, price: price, color: defaultColor, totalPrice: totalPrice
          }))} size="lg" color="gray" variant="outlined" ripple={true}>Add to cart</Button>
          <Tooltip content={`${foundWish ? "Remove from wish list" : "Add to wish list"}`} placement="bottom">
            <div>
              <FaHeart className={`cursor-pointer text-xl ${foundWish ? "text-red-500" : ""}`} onClick={() => foundWish ? dispatch(removeFromWishList({id: id})) : dispatch(addToWishList({id: id, name: name, img: img, text: text, category: type}))} />
            </div>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductSectionItem
