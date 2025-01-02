import React from "react";
import styles from "./Business.module.css";

function Business({ business }) {
  return (
    <div className={styles.business}>
      <img src={business.imageSrc} alt={business.name} />
      <div className={styles["business-info"]}>
        <h2 className={styles["business-name"]}>{business.name}</h2>
        <p className={styles["business-category"]}>{business.category}</p>
        <p className={styles["business-location"]}>
          {business.address}, {business.city}, {business.state}{" "}
          {business.zipcode}
        </p>
        <p className={styles["business-rating"]}>
          Rating: {business.rating} ({business.reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}

export default Business;
