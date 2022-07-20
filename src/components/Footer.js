import React from 'react'
import { Link } from 'react-router-dom'
import {TbSend} from 'react-icons/tb'

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 margin-t-20">
                    <h4>{props.restaurentName}</h4>
                    <div className="text-muted margin-t-20">
                        <ul className="list-unstyled footer-list">
                            <li><a className='nav-link' href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#menus">Menus</a></li>
                            <li><a href="#partners">Partners</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="col-lg-4 margin-t-20">
                    <h4></h4>
                    <div className="text-muted margin-t-20">
                        <ul className="list-unstyled footer-list">
                        </ul>
                    </div>
                </div> */}
                <div className="col-lg-6 margin-t-20">
                    <h4>Subscribe</h4>
                    <div className="text-muted margin-t-20">
                        <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                    </div>
                    <form className="form subscribe">
                        <input placeholder="Email" className="form-control" required />
                        <Link to="#" className="submit"><i className="pe-7s-paper-plane"><TbSend/></i></Link>
                    </form>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}
