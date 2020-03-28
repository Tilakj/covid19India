import React from 'react'
// import HeaderSvg from './HeaderSvg';
import LeftSectionSvg from './LeftSectionSvg';
import CenterSectionSvg from './CenterSectionSvg';
import RightSectionSvg from './RightSectionSvg';

function Covid19() {
    return (
        <div>
            <div className="home m-5">
                <div className="row">
                    <div className="col-md-4 col-sm-6 animated fadeIn mt-4">
                        <LeftSectionSvg />
                    </div>
                    <div className="col-md-4 d-none d-sm-block animated fadeIn mt-5">
                        <CenterSectionSvg />
                    </div>
                    <div className="col-md-4 col-sm-6 animated fadeIn mt-4">
                        <RightSectionSvg />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Covid19
