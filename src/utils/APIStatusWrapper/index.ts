import apiConstants from "../../constants/apiConstants"

export const getApiStatus = (isLoading?:boolean,isError?:boolean) => {
    if (isLoading) {
        return apiConstants.fetching
    }
    else if (isError) {
        return apiConstants.failure
    }
    else {
        return apiConstants.success
    }
}