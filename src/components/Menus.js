import React from 'react'
import { Link } from "react-router-dom";

export default function Menus(props) {
  return (
    <>
      {props.restaurentName !== 'Shacks' ? <section className="section pt-5" id="menus">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Our Menus</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle font-secondary text-muted text-center padding-t-30">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <img className='dishImg' src='images/dish1.jpg' alt='dish1'></img>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <h4 className="text-uppercase">Dish1</h4>
                            <p>Desc of Dish1</p>
                            <p>Servings: <b className="text-custom">2</b></p>
                            <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                            <h1>&#8377; 90</h1>  
                        </div>
                        <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box bg-white hover-effect price-active">
                      <img className='dishImg' src='images/dish2.jpg' alt='dish1'></img>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <h4 className="text-uppercase">Dish2</h4>
                            <p>Desc of Dish2</p>
                            <p>Servings: <b className="text-custom">1</b></p>
                            <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                            <h1>&#8377; 50</h1>  
                        </div>
                        <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <img className='dishImg' src='images/dish3.jpg' alt='dish1'></img>
                        {/* <h4 className="text-uppercase">Ultimate</h4>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6> */}
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <h4 className="text-uppercase">Dish3</h4>
                            <p>Desc of Dish3</p>
                            <p>Servings: <b className="text-custom">2</b></p>
                            <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                            <h1>&#8377; 120</h1>                            
                        </div>
                        <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                    </div>
                </div>
            </div>
        </div>
      </section> : 
      // if res is Shacks
      <section className="section pt-5" id="menus">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 offset-lg-2">
                  <h1 className="section-title text-center">Our Menus</h1>
                  <div className="section-title-border margin-t-20"></div>
                  <p className="section-subtitle font-secondary text-muted text-center padding-t-30">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
              </div>
          </div>
          <div className="row margin-t-50">
              <div className="col-lg-4">
                  <div className="text-center pricing-box hover-effect">
                      <img className='dishImg' src='images/dish4.jpg' alt='dish1'></img>
                      <div className="pricing-border"></div>
                      <div className="plan-features margin-t-30">
                          <h4 className="text-uppercase">Dish1</h4>
                          <p>Desc of Dish1</p>
                          <p>Servings: <b className="text-custom">4</b></p>
                          <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                          <h1>&#8377; 190</h1>  
                      </div>
                      <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="text-center pricing-box bg-white hover-effect price-active">
                    <img className='dishImg' src='images/dish5.jpg' alt='dish1'></img>
                      <div className="pricing-border"></div>
                      <div className="plan-features margin-t-30">
                          <h4 className="text-uppercase">Dish2</h4>
                          <p>Desc of Dish2</p>
                          <p>Servings: <b className="text-custom">3</b></p>
                          <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                          <h1>&#8377; 250</h1>  
                      </div>
                      <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="text-center pricing-box hover-effect">
                      <img className='dishImg' src='images/dish6.jpg' alt='dish1'></img>
                      {/* <h4 className="text-uppercase">Ultimate</h4>
                      <h6 className="text-uppercase text-muted">Billing Per Month</h6> */}
                      <div className="pricing-border"></div>
                      <div className="plan-features margin-t-30">
                          <h4 className="text-uppercase">Dish3</h4>
                          <p>Desc of Dish3</p>
                          <p>Servings: <b className="text-custom">4</b></p>
                          <p>Ingridents: <b className="text-custom">Some Ing</b></p>
                          <h1>&#8377; 320</h1>                            
                      </div>
                      <Link to="#" className="btn btn-custom waves-effect waves-light margin-t-30">View More</Link>
                  </div>
              </div>
          </div>
      </div>
    </section>
      }
    </>
  )
}
