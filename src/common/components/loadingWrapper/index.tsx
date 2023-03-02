import { ThreeDots } from "react-loader-spinner";

const LoadingWrapper = () => (
    <div className="loader-container jobs-loader" data-testid="loader" >
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
        />
    </div>
)

export default LoadingWrapper