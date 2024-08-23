import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../featurers/slices/productsSlice";

export const ProductCard = ({id, name, text, price, colors, img}) => {

  const dispatch = useDispatch()
  const {type} = useParams()

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card onClick={() => dispatch(singleProduct(id))} className="mt-6">
        <CardHeader color="blue-gray" className="relative h-96">
          <img
            src={img}
            alt={name}
            />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="gray" className="mb-2">
            {name}
          </Typography>
          <Typography>
            {text}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            {price}
          </Typography>
          <div className="flex gap-2 align-center">
            {colors.map((color, index) => {
              return(
                <div key={index} style={{background: color}} className={`rounded-full w-[14px] h-[14px] bg-${color}-600`}>
                </div>
              )
            })}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
