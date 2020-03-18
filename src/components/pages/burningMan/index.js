import React from "react";
import BoxedButton from "../../formComponents/boxedButton";
import { Link } from "react-router-dom";

const BurningMan = () => {
  return (
    <div className="burning-man">
      <Link to={'/burning-man/applications'} className="centered">
        <BoxedButton text="Become a Frothin Weirdo" />
      </Link>
    </div>
  );
};

export default BurningMan;
