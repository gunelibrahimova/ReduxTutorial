import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItem = useSelector((state) => state.cart.cartItems)

    console.log(cartItem)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            cartItem &&
                            cartItem.length > 0 ?
                                cartItem.map(product => (
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <img className='img-fluid' src={product.img} alt=' ' />
                                        </div>
                                        <div className="col-lg-4"> Məhsulun adı :{product.name}</div>
                                        <div className="col-lg-4"> Məhsulun qiyməti :{product.price}</div>
                                        <div className="col-lg-2"></div>
                                    </div>
                                ))
                                : (
                                    "Mehsul yoxdu"
                                )
                        }

                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            
                                {
                                    cartItem &&
                                    cartItem.length > 0 ?
                                    cartItem.map(product => (
                                        <div className="card-body">
                                            <h1 className="card-title">Order Description</h1>
                                            <p>Price : {product.price} </p>
                                            <p>Quantity: {cartItem.length}</p>
                                            <p>Toplam : {product.price * cartItem.length} </p>

                                        </div>
                                    ))
                                    :(
                                        "salam sirin"
                                    )
                                }
                                
                           
                            <div className="card-footer">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart