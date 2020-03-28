import React from 'react'
// import HeaderSvg from './HeaderSvg';
import LeftSectionSvg from './LeftSectionSvg';
import CenterSectionSvg from './CenterSectionSvg';
import RightSectionSvg from './RightSectionSvg';

function Home() {
    return (
        <div>
            <div className="home m-5">
                <div className="row">
                    <div className="col-md-4 col-sm-6 animated fadeIn">
                        <LeftSectionSvg />
                    </div>
                    <div className="col-md-4 d-none d-sm-block animated fadeIn">
                        <CenterSectionSvg />
                    </div>
                    <div className="col-md-4 col-sm-6 animated fadeIn">
                        <RightSectionSvg />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
