import React, {useEffect} from "react";
import "./footer.css";
import video from "../assets/video.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        
        <section className="footer">
            <div className="videoDiv">
            <video src={video} muted autoPlay loop typeof="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos = "fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>                       
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos = "fade-up" type="text" placeholder="Enter Email Address" className="inputext"/>
                        <button data-aos = "fade-up"className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>
                <div  data-aos = "fade-up" className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                               <MdOutlineTravelExplore className="icon"/> Travel.
                            </a>
                        </div>
                        <div data-aos = "fade-up" className="footerParagraph">
                            Travel is a travel agency that provides a variety of services to customers. We provide the best service for our customers. We are always ready to serve you.
                        </div>
                        <div className="footerSocial">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>

                    </div>

                    <div className="footerLinks grid">
                        {/* Group 1 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                            
                        </div>
                        {/* Group 2 */} 
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Expedia
                            </li>
                            
                        </div>
                        {/* Group 3 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Paris
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rome
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                New York
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Barcelona
                            </li>

                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer