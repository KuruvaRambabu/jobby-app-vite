
const FailureView = (props: { onClickRetry: () => void }) => {
    const { onClickRetry } = props
    return (
        <button
            className="profile-retry-btn"
            onClick={onClickRetry}
            type="button"
        >
            Retry
        </button>
    )
}

export default FailureView