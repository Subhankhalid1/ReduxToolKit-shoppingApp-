// import React from 'react'
// import Product from './Product'

// export default function Home(){

//     return<div className="home">

//         <h1 style={{color:'#3f51b5'}}>Welcome to e-shopping</h1>


//         <Product/>

//     </div>

// }

import React from 'react'
import Product from './Product'
import Carousel from 'react-bootstrap/Carousel'


function Home() {
    return (

        <div>
<br/><br/>

            <h1 style={{ color: '#3f51b5' }}>Welcome to e-shopping</h1>

            <br/><br/>

            <div className='container-fluid' >

                <div className="row title" style={{ marginBottom: "10px" }} >

                    <div className="col-sm-12 btn btn-warning">

                        Find the 100 users that love you & figure out why.

                         </div>

                </div>

            </div> <br/><br/>
            <div className='container-fluid' >

                <Carousel>

                    <Carousel.Item style={{ 'height': "300px" }} >

                        <img style={{ 'height': "300px", 'width': "600px" }}

                            className="d-block w-100"

                            src={'image/online.png'} />

                        <Carousel.Caption>

                            <h3 style={{ color: "orange" }}>Swipe for more! </h3>

                        </Carousel.Caption>

                    </Carousel.Item  >


                    <Carousel.Item style={{ 'height': "300px" }} >

                        <img style={{ 'height': "400px", 'width': "500px" }}

                            className="d-block w-100"

                            src={'image/stock.gif'} />



                    </Carousel.Item  >

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "300px" }}

                            className="d-block w-100"

                            src={'image/tenor.gif'} />

                        <Carousel.Caption>

                            {/* <h3>Second Demo</h3>   */}

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "400px" }}

                            className="d-block w-100"

                            src={'image/no.gif'} />

                        <Carousel.Caption>

                            {/* <h3>Third Demo</h3>   */}

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "400px" }}

                            className="d-block w-100"

                            src={'image/main.gif'} />

                        <Carousel.Caption>

                            {/* <h3>Third Demo</h3>   */}

                        </Carousel.Caption>

                    </Carousel.Item>

                </Carousel>

            </div>
            <br/> <br/>
            <Product />
        </div>



    )

}



export default Home;