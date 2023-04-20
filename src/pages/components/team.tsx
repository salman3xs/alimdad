import React, { FC } from "react";
import img1 from "../../assets/img/team-1.jpg";
import img2 from "../../assets/img/team-2.jpg";
import img3 from "../../assets/img/team-3.jpg";
import img4 from "../../assets/img/team-4.jpg";

const Team : FC = (): JSX.Element =>{
    return(
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Meet Our Team</p>
                    <h2>Awesome guys behind our charity activities</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={img1} alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Donald John</h2>
                                <p>Founder & CEO</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={img2} alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Chef Executive</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={img3} alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>Thomas Olsen</h2>
                                <p>Chef Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={img4} alt="Team Image"/>
                            </div>
                            <div className="team-text">
                                <h2>James Alien</h2>
                                <p>Advisor</p>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;