import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export const Loader = ({ open }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader size={30} loading={open} />
        </div>
    )
}