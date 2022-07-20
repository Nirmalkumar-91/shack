
export default function Header(props) {
  const passResDetailOnClick = (e) => {
    console.log(e);
    props.passResDetail(props.restaurentName);
  } 
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
        <div className="container">
            <a className="navbar-brand logo text-uppercase" href="#home">
                {props.restaurentName}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="mdi mdi-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav navbar-center" id="mySidenav">
                    <li className="nav-item active">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menus" className="nav-link">Menus</a>
                    </li>
                    <li className="nav-item">
                        <a href="#partners" className="nav-link">Partners</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
                <div className="nav-button ml-auto">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <button type="button" onClick={() => passResDetailOnClick()} className="btn btn-custom-2 btn-custom navbar-btn btn-rounded waves-effect waves-light">{props.restaurentName === 'Shacks' ? 'Flavours of Nellai' : 'Shacks'}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
