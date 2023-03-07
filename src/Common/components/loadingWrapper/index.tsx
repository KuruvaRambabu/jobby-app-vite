import { ThreeDots } from "react-loader-spinner";
import { MainContainer } from "./styledComponents";

const LoadingWrapper = () => (
    <MainContainer data-testid="loader" >
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
        />
    </MainContainer>
)

export default LoadingWrapper