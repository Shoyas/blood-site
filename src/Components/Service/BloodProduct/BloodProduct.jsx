import React from 'react';
import './BloodProduct.css';
import image from '../../asset/image/mt-1802-content-bg09.jpg';


const BloodProduct = () => {
    return (
        <>
           <div className="container-fluid bloodRequire-area">
                <div className="row">
                    <div className="col-md-5 offset-1 bloodRequire-tag">
                        <h4>Blood Products</h4>
                        <div className="text-underline mb-2"></div>
                        <i>
                        Blood Center is dedicated to providing the highest quality blood products and services. Our staff is ready to serve you 24/7. Donec urna metus, mattis eget eros et, iaculis vestibulum ante. In tortor nisi, consequat ut mi id, elementum sagittis nisl. Phasellus purus ex, dignissim quis vestibulum at, pulvinar vel nisl. Pellentesque ligula lorem, hendrerit a aliquet in, ultricies vitae ipsum. Duis turpis augue, pretium sed leo eget, pulvinar gravida eros. Ut porttitor laoreet tincidunt. Mauris vitae nisl nec sem volutpat aliquet in vitae ipsum. 
                        </i>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={image} alt="" srcset=""/>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default BloodProduct;