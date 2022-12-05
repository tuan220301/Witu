import { Link } from 'react-router-dom';
import React from "react";
import { useNavigate } from "react-router-dom";

export const DelayedLink = ({ delay, replace, state, to,css, ...props }) => {
  const navigate = useNavigate();
  const timerRef = React.useRef();

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const clickHandler = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(navigate, delay, to, { replace, state });
  };

  return <Link to={to} {...props} className={css} conClick={clickHandler} />;
};