import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs(props) {
  return (
    <>
      { props.restaurentName !== 'Shacks' ? <section className="section bg-light pt-5" id="blog">
        <div className="container">
          <div className="row">
              <div className="col-lg-8 offset-lg-2">
                  <h1 className="section-title text-center">Blog</h1>
                  <div className="section-title-border margin-t-20"></div>
                  <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </div>

          <div className="row margin-t-30">
              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish1.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#" className="blog-title"> Dish title </Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish2.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#" className="blog-title">Dish title</Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish3.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#"className="blog-title">Dish title</Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      :
      // Code for FON
      <section className="section bg-light pt-5" id="blog">
        <div className="container">
          <div className="row">
              <div className="col-lg-8 offset-lg-2">
                  <h1 className="section-title text-center">Blog</h1>
                  <div className="section-title-border margin-t-20"></div>
                  <p className="section-subtitle text-muted text-center font-secondary padding-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
          </div>

          <div className="row margin-t-30">
              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish4.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#" className="blog-title"> Dish title </Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish5.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#" className="blog-title">Dish title</Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-4">
                  <div className="blog-box margin-t-30 hover-effect">
                      <img src="images/dish6.jpg" className="img-fluid" alt="" />
                      <div>
                          <h5 className="mt-4 text-muted">Dish Category</h5>
                          <h4 className="mt-3"><Link to="#"className="blog-title">Dish title</Link></h4>
                          <p className="text-muted">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy..</p>
                          <div className="mt-3">
                              <Link to="#" className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      }
    </>
  )
}
