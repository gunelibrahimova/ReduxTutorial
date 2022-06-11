import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductAction } from '../../redux/actions/ProductAction'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"
import { Rating, Skeleton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCartAction, getCartItems } from '../../redux/actions/CartAction';


function Product() {


  const getProduct = useSelector((state) => state.products.products.message)

  const carts = useSelector((state) => state.carts)



  console.log(carts);

  const dispach = useDispatch()

  useEffect(() => {
    dispach(getCartItems())
    dispach(GetProductAction())
  }, [])

  const addToCartHandle = (id,title, price, image) =>{

    const cartProduct = {
      id: id,
      name: title,
      price: price,
      img: image
    }
    dispach(addToCartAction([...carts, cartProduct]))
  }


  const LoadingData = () => {
    return (
      <>
        <Card>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Card>
      </>
    )
  }



  return (
    <>

     
      <Grid container spacing={0}>
        {
          !getProduct ? <LoadingData /> :
          getProduct.map(product => (
            <Card key={product.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.coverPhoto}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Detail</Button>
                <Button onClick={()=> addToCartHandle(product.id,product.name, product.price, product.coverPhoto )} size="small"><AddShoppingCartIcon /></Button>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
              </CardActions>
            </Card>
          ))
        }

      </Grid>
    </>

  )
}

export default Product