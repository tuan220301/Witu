import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export const Loader = ({ open, css }) => {
    return (
        <div className={css}>
            <ClipLoader size={30} loading={open} />
        </div>
    )
}