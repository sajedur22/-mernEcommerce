import React from 'react';

import Skeleton from "react-loading-skeleton";
import Lottie from 'lottie-react';
import animationData from '../../assets/images/image.json'

const FeaturesSkeleton = () => {
    return (
        <div className={'container-fluid hero-bg'}>
            <div className={'row'}>
                <div className="col-md-7 align-content-center p-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Skeleton count={1}/>
                            </div>
                            <div className="col-3">
                                <Lottie className="w-100" animationData={""} loop={true}/>
                            </div>
                            <div className="col-3">
                                <Lottie className="w-100" animationData={""} loop={true}/>
                            </div>
                            <div className="col-3">
                                <Lottie className="w-100" animationData={""} loop={true}/>
                            </div>
                            <div className="col-3">
                                <Lottie className="w-100" animationData={""} loop={true}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 p-1">
                    <Skeleton count={1}/>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSkeleton;