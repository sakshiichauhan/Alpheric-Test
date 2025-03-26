import React from "react";

const SolutionTag = ({tagName}) => {
    return (
        <button
            className={`font-urbanist px-3.5 py-1.5 m-1 border rounded-[70px] font-[32px]`}
        >
            {tagName}
        </button>
    );
};

export default SolutionTag;
