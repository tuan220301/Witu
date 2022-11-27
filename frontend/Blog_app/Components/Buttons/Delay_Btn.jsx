import React, { useEffect, useNavigate, useRef } from "react";

export const DelayedLink = ({ delay, to, replace, state, ...props }) => {
    const navigate = useNavigate();
    const timerRef = useRef();

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const clickHandler = (e) => {
        e.preventDefault();
        timerRef.current = setTimeout(navigate, delay, to, { replace, state });
    };

    return <Link to={to} {...props} onClick={clickHandler} />;
};