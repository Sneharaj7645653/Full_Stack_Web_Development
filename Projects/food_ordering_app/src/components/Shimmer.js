const Shimmer = () => {
    return (
        <div className="shimmer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 ">
            {Array(10).fill("").map((_, i) => (
                <div
                    key={i}
                    className="shimmer-card h-36 bg-gray-300 animate-pulse rounded-lg shadow hover:scale-105 transition-transform"
                ></div>
            ))}
        </div>
    );
};

export default Shimmer;