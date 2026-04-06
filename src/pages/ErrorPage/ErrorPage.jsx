const ErrorPage = () => {
    return ( 
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-md">
                
                {/* Error Code */}
                <h1 className="text-7xl font-bold text-primary">404</h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-base-content/70 mt-2">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="mt-6 flex justify-center gap-4">
                    <a href="/" className="btn btn-primary">
                        Go Home
                    </a>
                </div>

            </div>
        </div>
     );
}
 
export default ErrorPage;