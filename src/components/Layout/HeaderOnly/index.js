import React from "react";
import Header from "~/components/Layout/components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="containe">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
