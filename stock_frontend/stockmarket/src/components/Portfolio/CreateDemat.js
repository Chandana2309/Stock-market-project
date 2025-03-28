import React from "react";
import "./CreateDemat.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

const youtubeLinks = {
    groww: "https://www.youtube.com/watch?v=II8pBNWUU6g",
    zerodha: "https://www.youtube.com/watch?v=Y__a4UxNU10",
    upstox: "https://www.youtube.com/watch?v=zheFyV1W_xc",
    angelone: "https://www.youtube.com/watch?v=ugJD577TZPI"
};

const accountLinks = {
    groww: "https://groww.in",
    zerodha: "https://zerodha.com",
    upstox: "https://upstox.com/open-demat-account/",
    angelone: "https://www.angelone.in/open-demat-account",
    
};

const CreateDemat = () => {
    const navigate=useNavigate();
    return (
        <div className="demat-container">
            <h2 className="title">Select a Platform to Create Your Demat Account</h2>
            <div className="platforms">
                {/* Groww Card */}
                <div className="platform-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvoJ_whzo6OHRSmbMXIgPOs6cOdNDEtFa7g&s"  alt="Groww Logo" className="logo" />
                    <a href={youtubeLinks.groww} target="_blank" rel="noopener noreferrer">
                        <img src={"https://img.youtube.com/vi/II8pBNWUU6g/0.jpg"} alt="Groww Video" className="video-thumbnail"/>
                    </a>
                    <a href={accountLinks.groww} className="open-account-btn" target="_blank">Open Account</a>
                </div>

                {/* Zerodha Card */}
                <div className="platform-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNY4u15dSDdp9rs0zCCLzbz4u4vRX21sXPxA&s" height="100px" alt="Zerodha Logo" className="logo"/>
                    <a href={youtubeLinks.zerodha} target="_blank" rel="noopener noreferrer">
                        <img src={"https://img.youtube.com/vi/Y__a4UxNU10/0.jpg"} alt="Zerodha Video" className="video-thumbnail"/>
                    </a>
                    <a href={accountLinks.zerodha} className="open-account-btn" target="_blank">Open Account</a>
                </div>

                {/* Upstox Card */}
                <div className="platform-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQUujZP-pw1vgEj1MBV7OUf-vpHWjnWHMEg&s" alt="Upstox Logo" className="logo"/>
                    <a href={youtubeLinks.upstox} target="_blank" rel="noopener noreferrer">
                        <img src={"https://img.youtube.com/vi/zheFyV1W_xc/0.jpg"} alt="Upstox Video" className="video-thumbnail"/>
                    </a>
                    <a href={accountLinks.upstox} className="open-account-btn" target="_blank">Open Account</a>
                </div>

                <div className="platform-card">
                    <img src="https://cdn.brandfetch.io/angelbroking.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed" alt="Angel one Logo" className="logo"/>
                    <a href={youtubeLinks.upstox} target="_blank" rel="noopener noreferrer">
                        <img src={"https://img.youtube.com/vi/ugJD577TZPI/0.jpg"} alt="Angel one Video" className="video-thumbnail"/>
                    </a>
                    <a href={accountLinks.upstox} className="open-account-btn" target="_blank">Open Account</a>
                </div>

            </div>

            {/* Back to Home Button */}
            <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default CreateDemat;