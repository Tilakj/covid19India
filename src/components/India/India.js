import React, { Component } from 'react'
import IndiaSvg from './IndiaSvg';
import axios from '../../config/axios';
import TableData from './TableData';
import StateDashboard from './StateDashboard';
import TotalDashboard from './TotalDashboard';

export class India extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showDetails: '',
            stateDetails: {},
            districtDetails: {},
            cases: [],
            statesData: [],
            districtsData: [],
            totalDetails: {}
        }
    }
    states = [{ id: "IN-AN", title: "Andaman and Nicobar Islands" }, { id: "IN-AP", title: "Andhra Pradesh" }, { id: "IN-AR", title: "Arunachal Pradesh" }, { id: "IN-AS", title: "Assam" }, { id: "IN-BR", title: "Bihar" }, { id: "IN-CH", title: "Chandigarh" }, { id: "IN-CT", title: "Chhattisgarh" }, { id: "IN-DD", title: "Daman and Diu" }, { id: "IN-DL", title: "Delhi" }, { id: "IN-DN", title: "Dadra and Nagar Haveli" }, { id: "IN-GA", title: "Goa" }, { id: "IN-GJ", title: "Gujarat" }, { id: "IN-HP", title: "Himachal Pradesh" }, { id: "IN-HR", title: "Haryana" }, { id: "IN-JH", title: "Jharkhand" }, { id: "IN-JK", title: "Jammu and Kashmir" }, { id: "IN-KA", title: "Karnataka" }, { id: "IN-KL", title: "Kerala" }, { id: "IN-LD", title: "Lakshadweep" }, { id: "IN-MH", title: "Maharashtra" }, { id: "IN-ML", title: "Meghalaya" }, { id: "IN-MN", title: "Manipur" }, { id: "IN-MP", title: "Madhya Pradesh" }, { id: "IN-MZ", title: "Mizoram" }, { id: "IN-NL", title: "Nagaland" }, { id: "IN-OR", title: "Odisha" }, { id: "IN-PB", title: "Punjab" }, { id: "IN-PY", title: "Puducherry" }, { id: "IN-RJ", title: "Rajasthan" }, { id: "IN-SK", title: "Sikkim" }, { id: "IN-TG", title: "Telangana" }, { id: "IN-TN", title: "Tamil Nadu" }, { id: "IN-TR", title: "Tripura" }, { id: "IN-UP", title: "Uttar Pradesh" }, { id: "IN-UT", title: "Uttarakhand" }, { id: "IN-WB", title: "West Bengal" }]

    getStatesData = async () => {
        try {
            const [statesData, districtData] = await Promise.all([axios.get('/data.json'), axios.get('/state_district_wise.json')])

            const totalDetails = statesData.data.statewise.find(stateData => {
                return stateData.state.includes('Total')
            })

            this.setState({ statesData: statesData.data.statewise, districtData: districtData.data, totalDetails }, () => {
                console.log(this.state.statesData)
                console.log(this.state.districtData)
                console.log(this.state.totalDetails)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getStatesData()
    }

    getDetails = (id) => {
        const stateName = this.states.find(obj => obj.id === id).title


        const stateDetails = this.state.statesData.find(stateData => {
            if (stateData && stateName) {
                return stateName.includes(stateData.state)
            }
            else {
                return {}
            }
        })

        let districtDetails = {}
        if (stateDetails) {
            districtDetails = this.state.districtData[stateDetails.state] ? this.state.districtData[stateDetails.state].districtData : {}
        }


        return [stateDetails, districtDetails]

    }
    handleMouseOver = (e) => {
        const [stateDetails, districtDetails] = this.getDetails(e.target.id)
        this.setState({ stateDetails, districtDetails }, () => {
            console.log(this.state.stateDetails)
            console.log(this.state.districtDetails)
        })
    }

    render() {
        const { stateDetails, districtDetails, totalDetails } = this.state
        return (
            <>
                <div className="row d-flex justify-content-center mt-1">
                    <TotalDashboard totalDetails={totalDetails} />
                </div>
                <div className="row mt-1">
                    <div className="col-md-4  offset-1 mt-5 animated fadeIn">
                        <IndiaSvg handleMouseOver={this.handleMouseOver} />
                    </div>
                    <div className="col-md-1 offset-md-1 mt-3 p-2 ml-3 animated fadeIn title theme">
                        <StateDashboard stateDetails={stateDetails} />
                    </div>
                    <div className="col-md-4 mt-4 offset-md-1 p-1 animated fadeIn" >
                        <TableData districtDetails={districtDetails} />
                    </div>
                </div>
            </>
        )
    }
}

export default India
