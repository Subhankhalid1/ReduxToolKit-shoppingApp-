// import React from 'react';
// import { useSelector } from 'react-redux';
// import { store, remove } from './reducersWithSlices'



// const Cart=()=>{
//     const product = useSelector((state) => state);
//     return<div>
//         <h1> Shopping Basket</h1>
//     </div>
// }



import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"



import { useSelector } from 'react-redux';
import { store, remove } from './reducersWithSlices'




const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      color:'green',
    
    },
    inline: {
      display: "inline"
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end"
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2
    }
  })
)

const Cart = () => {
  const classes = useStyles({})
  const products = useSelector((state) => state)

  return (
    <div >
      <br/> <br/>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Cart History
      </Typography>
      <br/>
      <Typography component="p" variant="body1">
        You have selected {products.filter((product) => product.added).length} items in your cart
      </Typography>
      <br/>
      <List className={classes.root}>
        {products
          .filter(product => product.added)
          .map((product) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Product" src={product.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                       <b style={{color:"red"}}> {product.price}/- rupees only </b>

                       
                        {/* &pound;{(product.price / 100).toFixed(2)} */}

                      </Typography>
                      {` — ${product.description}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
          <h3 style={{color:'forestgreen'}}>Total billing amount is given below;</h3>
        <ListItem className={classes.listItem}>
    
          <Typography variant="subtitle1" className={classes.total}>
            {/* &pound; */}
            {(
              products
                .filter(product => product.added)
                .reduce((acc, current) => (acc += current.price), 0) 
            )}/- RS
          </Typography>
        </ListItem>
      </List>
    </div>
  )
}

export default Cart
