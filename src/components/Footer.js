import React from 'react'

import {ReactComponent as FacebookIcon} from "../assets/images/icon-facebook.svg";
import {ReactComponent as InstagramIcon} from "../assets/images/icon-instagram.svg";
import {ReactComponent as TwitterIcon} from "../assets/images/icon-twitter.svg";
import {ReactComponent as PinterestIcon} from "../assets/images/icon-pinterest.svg";

import milkBottlesMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkBottlesDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import galleryConeMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import galleryConeDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import sugarCubesMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubesDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export default function footer() {
    return (
        <div className="footer bg-accent text-accent">
            <div className="footer-images">
                <img src={milkBottlesMobile} srcSet={`${milkBottlesMobile} 1439w, ${milkBottlesDesktop} 1441w`} alt="Milk bottles" />
                <img src={orangeMobile} srcSet={`${orangeMobile} 1439w, ${orangeDesktop} 1441w`} alt="Orange" />
                <img src={galleryConeMobile} srcSet={`${galleryConeMobile} 1439w, ${galleryConeDesktop} 1441w`} alt="Gallery cone" />
                <img src={sugarCubesMobile} srcSet={`${sugarCubesMobile} 1439w, ${sugarCubesDesktop} 1441w`} alt="Sugar cubes" />
            </div>
            <div className="footer-text-wrapper container padding-container">
                <h1 className="footer-title text-center">sunnyside</h1>
                <div className="bottom-nav">
                    <a href="about">About</a>
                    <a href="services">Services</a>
                    <a href="projects">Projects</a>
                </div>
                <div className="social-media">
                    <a href="facebook"><FacebookIcon className="icon" /></a>
                    <a href="instagram"><InstagramIcon className="icon" /></a>
                    <a href="twitter"><TwitterIcon className="icon" /></a>
                    <a href="pinterest"><PinterestIcon className="icon" /></a>
                </div>
            </div>
        </div>
    )
}
