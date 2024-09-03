import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useState } from 'react';
import Cart from '../cart/Cart'
import WishList from '../wishList/WishList';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../featurers/slices/authSlice';
import {Avatar} from '@material-tailwind/react'


function Navbar() {

  const dispatch = useDispatch()
  const totalAmount = useSelector(state => state.cart.totalAmount) 
  const user = useSelector(state => state.user.user)
  const {name, image} = user

  const [open, setOpen] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenWishList = () => setOpenWishList(true)
  const handleCloseWishList = () => setOpenWishList(false)

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
          <div className="flex gap-1 items-center text-md cursor-pointer" onClick={handleOpenWishList}>
            <CiHeart />
            <p>Wish List</p>
          </div>
          <div>
            {<WishList handleCloseWishList={handleCloseWishList} isVisible={openWishList}/>}
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
          <div onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} className="flex relative flex-row items-center cursor-pointer pl-4 h-full">
            {image && <Avatar src={image} alt="avatar" size="sm" className="mr-2"></Avatar>}
            <p className="text-sm font-medium tracking-normal leading-none">
              Hi {name.charAt('0').toUpperCase() + name.slice(1)}
            </p>
            {showMenu && (
              <div className="absolute top-[55px] bg-white shadow-md rounded-md border border-gray-500 overflow-hidden">
                <ul>
                  <li onClick={() => dispatch(logout())} className="py-2 px-4 hover:bg-gray-100">Logout</li>
                </ul>
              </div>
            )}
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
