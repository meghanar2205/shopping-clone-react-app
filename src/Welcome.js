import React from 'react';
let Logo = require("./Welcome_Page_Image_amozon_eShop.png");

function Welcome() {
  return (
    <>
        <div className="welcome_page_header">
            <img src={Logo} className="welcome_page_header_image" alt = "" style={{width : "100%", maxHeight : "400px", minHeight : "200px" }} />
        </div>
    </>
  )
}

export default Welcome