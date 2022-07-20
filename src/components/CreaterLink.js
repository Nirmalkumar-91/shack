import React from 'react'

export default function CreaterLink() {
  return (
    <>
      <div className="footer-alt">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pull-none ">
                        <p className="copy-rights text-muted">{(new Date().getFullYear())} © Shacks - Created By Nirmal &#8482;</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
