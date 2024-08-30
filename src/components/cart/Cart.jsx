import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../featurers/slices/cartSlice';

const Cart = ({openModal, setOpen}) => {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  return (
    <div className="">
      {cart.length > 0 ? 
          
          <div className="">
            <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Shopping Bag</DialogHeader>
              <DialogBody className="flex flex-col justify-center items-start">
                {cart.map((item, index) => {
                  return(
                    <div className='w-full border-b-2' key={index}>
                      <div className="flex gap-10 items-center justify-between py-4">
                        <div className='min-w-[100px]'>
                          <img className="h-[125px] rounded-md" src={item.img} alt={item.name}/>
                        </div>
                        <div className=''>
                          <div className="flex flex-col items-start">
                            <h4 className="text-black text-base font-bold tracking-normal leading-none pt-2">{item.name}</h4>
                          </div>
                          <div className="max-w-sm">
                            <p className="text-black text-xs tracking-normal leading-none pt-2">{item.text}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-black text-sm tracking-normal leading-none pt-2">Selected size: <span className="ml-2">{item.size}</span></p>
                          <p className="text-black text-sm tracking-normal leading-none pt-2">Selected color: <span className="ml-2 rounded-full px-2" style={{backgroundColor: item.color}}></span></p>
                          <p className="text-black text-sm tracking-normal leading-none pt-2">Amount: <span className="ml-2">{item.amount}</span></p>
                          <p className="text-black text-sm tracking-normal leading-none pt-2">Single Item Price: <span className="ml-2">${item.price}</span></p>
                          <p className="text-black text-sm tracking-normal leading-none pt-2">Total Item Price: <span className="ml-2">${item.totalPrice}</span></p>
                          <div className="pt-4">
                            <Button onClick={() => dispatch(removeFromCart(item))} size="sm" color="red" ripple={true} variant="filled">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })}
              </DialogBody>
              <DialogFooter className="flex justify-start items-center">
                <p className="text-black text-base tracking-normal leading-none pt-2">
                  Total price of All Products: <span className="ml-2">${totalPrice}</span>
                </p>
              </DialogFooter>
            </Dialog>
          </div>
        
          :

          <>
            <Dialog
              className="border-0 outline-0"
              open={openModal}
              handler={() => setOpen(false)}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Shopping Bag</DialogHeader>
              <DialogBody>
                <div>
                  <h1 className="text-black text-3xl font-bold tracking-normal leading-none py-4">Your bag is empty!</h1>
                  <p className="text-black text-base tracking-normal leading-none">Add some products</p>
                </div>
              </DialogBody>
            </Dialog>
          </>

          
      }
    </div>
  )
}

export default Cart
