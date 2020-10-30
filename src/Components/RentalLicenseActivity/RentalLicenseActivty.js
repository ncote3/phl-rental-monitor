import React from "react";
import './RentalLicenseActivity.scss';
import ActivityBanner from "../ActvityBanner/ActivityBanner";
import {ActivityTypes} from "../../Enums/ActivityTypes";
import ActivityCards from "../ActivityCards/ActivityCards";

export default function RentalLicenseActivity() {

    return (
        <div>
            <h1 className='sectionTitle'>Rental License Activity</h1>
            <ActivityBanner title='Newest Rental Licenses' />
            <ActivityCards activityType={ActivityTypes.NEW} />
            <ActivityBanner title='Expiring Rental Licenses' />
            <ActivityCards activityType={ActivityTypes.EXPIRING} />
            <ActivityBanner title='Recently Expired Licenses' />
            <ActivityCards activityType={ActivityTypes.RECENTLY_EXPIRED} />
            <ActivityBanner title='Recently Inactive Licenses' />
            <ActivityCards activityType={ActivityTypes.RECENTLY_INACTIVE} />
        </div>
    )
}