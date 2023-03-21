import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Complement.css'

const Footer = () => {
    return (
        <div class="container-fluid text-light mt-5 pt-5 footer">
            <div class="row px-xl-5 pt-5">
                <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" class="text-decoration-none">
                        <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Parking</h1>
                    </a>
                    <p>A place where you can place your car in!!!</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>A place you can put your trust in!!!</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>Contact Us in HCM City</p>
                    <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>Our Phone Number is: 3-7-9-49-53</p>
                </div>
                
                <div class="col-lg-8 col-md-12">

                </div>
            </div>

        </div>
    );
}

export default Footer;