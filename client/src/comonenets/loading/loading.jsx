import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/file/Animation - 1751568078287.json"; // 👈 put your Lottie JSON here

const LottieLoader = () => {
    return (
        <div style={{width: "300px", margin: "0 auto"}}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                width={50}
                height={50}

            />
        </div>
    );
};

export default LottieLoader;