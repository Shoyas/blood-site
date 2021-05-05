import React from 'react';
import './BiomedicalService.css';
import image from '../../asset/image/mt-1802-services-img02.jpg';

const BiomedicalService = () => {
    return (
        <div className="container-fluid bloodRequire-area">
            <div className="row">
                <div className="col-md-5 offset-1 bloodRequire-tag">
                    <h4>Biomedical Services</h4>
                    <div className="text-underline mb-2"></div>
                    <p><strong>
                    We offer a comprehensive menu of services  to support and manage the full spectrum of transfusion medicine, regenerative medicine and cellular-therapy related research projects, from basic science to full scale clinical trials.</strong></p>
                    <ul>
                        <li><i>Blood and Diagnostic testing</i></li>
                        <li><i>Blood group serology</i></li>
                        <li><i>HLA testing</i></li>
                        <li><i>Immunohematology Reference lab testing</i></li>
                        <li><i>Molecular testing</i></li>
                        <li><i>Neutrophil testing</i></li>
                        <li><i>Infectious disease testing</i></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" srcset=""/>
                </div>
            </div>
        </div>
    );
};

export default BiomedicalService;