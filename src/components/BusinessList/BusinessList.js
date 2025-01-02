import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

function BusinessList({ businesses }) {
  return (
    <div className={styles["business-list"]}>
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
