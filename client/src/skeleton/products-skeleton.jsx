import React from 'react';

import Skeleton from "react-loading-skeleton";
import Lottie from 'lottie-react';
import animationData from '../assets/images/image.json'

const ProductsSkeleton = () => {
    return (
        <div className={'container-fluid hero-bg'}>
            <div className={'row'}>
                {
                    Array.from({length:12}).map((__,i)=>{
                        return (
                            <div key={i} className={'col-6 col-md-3 col-sm-6 col-lg-3'}>
                                <div className={'card shadow-sm'}>
                                    <div className={'card-body'}>
                                        <div className={'row'}>
                                            <div className={'col-4'}>
                                                <Lottie className={'w-100'} animationData={animationData}
                                                        loop={true}/>
                                            </div>
                                            <div className={'card-body'}>
                                                <Skeleton count={3}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsSkeleton;