import React from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialTwitter, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

export default function SocialMedia() {
  return (
    <>
      <section className="cta bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline social margin-t-20">
                        <li className="list-inline-item"> <Link to="#" className="social-icon"><i ><TiSocialFacebook/></i></Link></li>
                        <li className="list-inline-item"> <Link to="#" className="social-icon"><i ><TiSocialTwitter/></i></Link></li>
                        <li className="list-inline-item"> <Link to="#" className="social-icon"><i ><TiSocialLinkedin/></i></Link></li>
                        <li className="list-inline-item"> <Link to="#" className="social-icon"><i ><TiSocialGooglePlus/></i></Link></li>
                        <li className="list-inline-item"> <Link to="#" className="social-icon"><i ><TiSocialYoutube/></i></Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 margin-t-30">
                    <p className="margin-b-0 contact-title"><i className="pe-7s-call"></i> &nbsp;+91 123 4556 789</p>
                </div>
                <div className="col-lg-3 margin-t-30 text-right">
                    <p className="contact-title"><i className="pe-7s-mail-open"></i>&nbsp; Support@shacks.com</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
