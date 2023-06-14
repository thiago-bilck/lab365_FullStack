/* eslint-disable react/prop-types */
import './Banner.css'

function Banner({message}) {
    return (  
        <div className="banner px-3 py-4">
            <h2 >{message}</h2>
        </div>
    );
}

export default Banner;