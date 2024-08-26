import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useState } from 'react';
import Cart from '../cart/Cart'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../featurers/slices/authSlice';
import {Avatar} from '@material-tailwind/react'

function Navbar() {

  const dispatch = useDispatch()
  const totalAmount = useSelector(state => state.cart.totalAmount) 
  const user = useSelector(state => state.user.user)
  const {name, image} = user

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <div className="w-full bg-black text-white text-2xl py-3 leading-none text-center font-bold">Clothing Shop</div>
      <div className="w-full max-w-[1200px] flex justify-between m-auto w-80% py-1">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-[90px]"/>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center text-md">
            <CiHeart />
            <p>Wish List</p>
          </div>
          <div className="flex gap-1 items-center text-md cursor-pointer" onClick={handleOpen}>
            {totalAmount > 0 ? <span className="rounded-full bg-gray-300 px-2 text-sm mr-1">{totalAmount}</span> : 
              <RiShoppingBag4Line />
            }
            <p>Shopping bag</p>
          </div>
          <div>
            {open &&
              <Cart openModal={open} setOpen={setOpen}>

              </Cart>
            }
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && <Avatar src={image} alt="avatar" size="sm" className="mr-2"></Avatar>}
            <div onClick={() => dispatch(logout())}>
              <p className="text-sm font-medium tracking-normal leading-none">
                Hi {name.charAt('0').toUpperCase() + name.slice(1)}
                
              </p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-full bg-black text-white py-2 text-sm text-center flex flex-row justify-center">
        <div className="flex justify-between items-center max-w-[1200px] w-full">
          <p>50% OFF</p>
          <p>Free shipping and returns</p>
          <p>Diferent payment methods</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
