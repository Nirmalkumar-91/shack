import React from 'react'
import { MdRestaurantMenu, MdRestaurant } from "react-icons/md";
import{ GiPartyPopper } from "react-icons/gi";

export default function Services() {
  return (
    <>
      <section className="section pt-5" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Our Services</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </div>
            </div>
            <div className="row margin-t-30">
                <div className="col-lg-4 margin-t-20">
                    <div className="services-box text-center hover-effect">
                      <i className='text-custom' ><MdRestaurantMenu /></i>
                      <h4 className="padding-t-15">Service1</h4>
                      <p className="padding-t-15 text-muted">editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </div>
                </div>
                <div className="col-lg-4 margin-t-20">
                    <div className="services-box text-center hover-effect">
                      <i className='text-custom' ><MdRestaurant/></i>
                      <h4 className="padding-t-15">Service2</h4>
                      <p className="padding-t-15 text-muted">editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </div>
                </div>
                <div className="col-lg-4 margin-t-20">
                    <div className="services-box text-center hover-effect">
                    <i className='text-custom' ><GiPartyPopper /></i>
                        <h4 className="padding-t-15">Service3</h4>
                        <p className="padding-t-15 text-muted">editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
