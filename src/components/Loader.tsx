import { useLottie } from "lottie-react";
import { FunctionComponent } from "react";
import loaderLottie from "../../public/loader-lottie.json";

type LoaderProps = {
    style?: any, 
}

export const Loader: FunctionComponent<LoaderProps> = ({ style }) => {
    const options = {
        animationData: loaderLottie,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);
    return View;
}