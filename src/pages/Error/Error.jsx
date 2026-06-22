import { Link } from "react-router-dom";


const Error = () => {
    return (

        <div className="flex flex-col items-center justify-center mt-10 px-4 md:p-0 h-[90vh]">
            <div className="w-full md:w-1/3">
                <img className="w-full" src="/Illustration.png" alt="" />
            </div>
            <div className="content text-center space-y-4">
                <h2 className="font-semibold md:text-6xl text-3xl">Oops! page not found</h2>
                <p className="text-[#808080] text-base">
                    Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br />   Maecenas sagittis tortor at metus mollis
                </p>
                <Link to="/" className="btn bg-[#DC2626] text-white   rounded-full">Back to Home</Link>
            </div>
        </div>

    );
};

export default Error;