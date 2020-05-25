import React from 'react'

export default function TableData({ districtDetails }) {
    return (
        <div>
            {
                districtDetails &&
                <>
                    <table className="table table-sm text-center table-dark shadow-sm theme">
                        <thead>
                            <tr>
                                <th scope="col">District</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Active</th>
                                <th scope="col">Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(districtDetails).map((district, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="title">{district}</td>
                                            <td>{districtDetails[district].confirmed}</td>
                                            <td>{districtDetails[district].active}</td>
                                            <td>{districtDetails[district].recovered}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}
