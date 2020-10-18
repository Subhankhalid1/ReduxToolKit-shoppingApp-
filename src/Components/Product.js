
import React from 'react';
import { useSelector } from 'react-redux';
import { store, add } from './reducersWithSlices'


const Product = () => {
    
    const product = useSelector((state) => state);

    console.log(product)

    // const dispatch = useDispatch()
    return <div> 
        
        {product.map((items, index) => {

            return <div key={index} >

                <h2 style={{color:'GrayText'}}> {items.title} </h2>
                <p  style={{color:'bisque'}}>{items.description}</p>
                <br />
                <img style={{ width: '400px' }} src={items.imageUrl} />
               
        <h5 style={{color:'red'}}>Rupees: {items.price} 'rs</h5>
               
                <button disabled={items.added} onClick={() => store.dispatch(add(items))}
                    style={{ width: `${140 / product.length}%` }}>
                    Add to Cart
                </button>
               <br/> <br/>
            </div>
        })}
    </div>
}


export default Product