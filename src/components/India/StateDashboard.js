import React from 'react'

export default function StateDashboard({ stateDetails }) {

    return (
        <div className="row">
            <div className="col-xs-3 text-center mt-3 mb-3 state-name p-1">
                <h6 className="p-1">{stateDetails.state}</h6>
            </div>
            <div className="col-xs-3 m-2 state-card  shadow-sm p-1 danger">
                <h6 className="title m-1">CONFIRMED</h6>
                <h2>{stateDetails.confirmed}</h2>
            </div>
            <div className="col-xs-3 m-2 state-card shadow-sm p-1 warning">
                <h6 className="title m-1">ACTIVE</h6>
                <h2>{stateDetails.active}</h2>
            </div>
            <div className="col-xs-3 m-2 state-card shadow-sm p-1 success">
                <h6 className="title m-1">RECOVERED</h6>
                <h2>{stateDetails.recovered}</h2>
            </div>
            <div className="col-xs-3 m-2 state-card shadow-sm p-1 dark">
                <h6 className="title m-1">DEATHS</h6>
                <h2>{stateDetails.deaths}</h2>
            </div>
        </div>
    )
}
