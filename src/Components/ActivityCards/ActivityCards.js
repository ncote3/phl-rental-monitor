import React from "react";
import axios from 'axios';
import { makeUseAxios } from 'axios-hooks'
import {ActivityTypes} from "../../Enums/ActivityTypes";

// @TODO update API link
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: 'https://www.landlord-spotter-backend.xyz/' })
})

export default function ActivityCards(props) {
    const {activityType} = props;

    let apiLink = '/api/activityTypes/';
    switch (activityType) {
        case ActivityTypes.NEW:
             apiLink += 'new';
            break;
        case ActivityTypes.EXPIRING:
            apiLink += 'expiring';
            break;
        case ActivityTypes.RECENTLY_EXPIRED:
            apiLink += 'recentlyExpired';
            break;
        case ActivityTypes.RECENTLY_INACTIVE:
            apiLink += 'recentlyInactive';
            break;
    }

    const [activityRes, refetch] = useAxios(apiLink);

    if (activityRes.loading) {
        return (
            <div>
                loading
            </div>
        )
    } else if (activityRes.error) {
        return (
            <div>
                error
            </div>
        )
    } else {
        return (
            <div>
                good
            </div>
        )
    }

}