import React from "react";
import "./ActivityBanner.scss";

export default function ActivityBanner(props) {
    const {title} = props;

    return (
        <div className='activityBannerBackground'>
            <div className='activityBannerTextBackground'>
                <h1>{title}</h1>
            </div>
        </div>
    )
}