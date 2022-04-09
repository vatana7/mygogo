
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-left">
                <a href="#">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" alt="logo.png" />
                </a>
            </div>
            <div className="nav-right">
                <div className="admin">
                    <div className="user-info">
                        <p>khmerAdmin3</p>
                        <p><b>khmerAdmin3@gmail.com</b></p>
                    </div>

                    <div className="user-img">
                        <img src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" alt="user.png" />
                    </div>

                    <div className="user-setting">
                        <i class="fa fa-gear"></i>
                        <p>LOGOUT</p>
                    </div>
                </div>
            </div>
        </div>
     );
}


export default Navbar;