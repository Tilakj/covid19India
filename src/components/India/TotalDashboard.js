import React from 'react'

export default function TotalDashboard({ totalDetails }) {
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
        </>
    )
}
