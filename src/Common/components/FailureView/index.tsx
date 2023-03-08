import { RetryButton } from "./styledComponents"

const FailureView = (props: { onClickRetry: () => void }) => {
    const { onClickRetry } = props
    return (
        <RetryButton
            className="profile-retry-btn"
            onClick={onClickRetry}
            type="button"
        >
            Retry
        </RetryButton>
    )
}

export default FailureView