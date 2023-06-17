import './Header.css'

function Header() {
    return (  
        <div className='d-lg-flex d-md-flex justify-content-end column-gap-4 mt-3'>
            <a href="http://www.gmail.com">Gmail</a>
            <a href="https://www.google.com/maps/">Maps</a>
            <img src="../public/dots.png" alt="" />
            <img src="../public/profilePhoto.png" className="profilePhoto" alt="" />
        </div>
    );
}

export default Header;