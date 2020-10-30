import React from "react";
import './Banner.scss';

export default function Banner() {
    return (
        <div className="bannerBackground">
            <div className="bannerTextBackgroundGradient">
                <div className="bannerTextBlur">
                    <h1>Philadelphia<br/>Rental License<br/>Monitor</h1>
                </div>
            </div>
        </div>
    );
}