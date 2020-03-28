import React from 'react'
import { zonedTimeToUtc } from 'date-fns-tz';
import { formatDistance } from 'date-fns';

export default function TotalDashboard({ totalDetails, lastUpdated, formatDate }) {
    return (
        <>
            <div className="col-xs-3 m-2 shadow-sm p-1  total-card">
                <h6 className="title m-1">CONFIRMED</h6>
                <h2>{totalDetails.confirmed}</h2>
            </div>
            <div className="col-xs-3 m-2  shadow-sm p-1  total-card">
                <h6 className="title m-1">ACTIVE</h6>
                <h2>{totalDetails.active}</h2>
            </div>
            <div className="col-xs-3 m-2  shadow-sm p-1  total-card">
                <h6 className="title m-1">RECOVERED</h6>
                <h2>{totalDetails.recovered}</h2>
            </div>
            <div className="col-xs-3 m-2  shadow-sm p-1 total-card">
                <h6 className="title m-1">DEATHS</h6>
                <h2>{totalDetails.deaths}</h2>
            </div>
            <div className="mt-4 last-update-card">
                <p className="m-0"><strong>Last Updated</strong></p>
                <h6>{isNaN(Date.parse(formatDate(lastUpdated))) ? '' : formatDistance(zonedTimeToUtc(new Date(formatDate(lastUpdated)), 'Asia/Calcutta'), zonedTimeToUtc(new Date())) + ' Ago'}</h6>
            </div>
        </>
    )
}
