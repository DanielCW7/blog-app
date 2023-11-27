

const Skeleton = () => {
    return (
        <div className="rounded-xl shadow-lg overflow-hidden skeleton-container">
            <div className="skeleton-image h-48"></div>
            <div className="p-6 text-black flex flex-col gap-5">
                <span className="skeleton-text"></span>
                <span className="skeleton-text"></span>

                <small className="flex flex-row justify-between">
                    <span className="skeleton-snippet"></span>
                </small>
            </div>

        </div>
    )
}

export default Skeleton