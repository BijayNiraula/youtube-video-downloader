import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
function PreviewLoading() {
  return (
    <div className="preview mt-5  ">
      <div
        className=" py-5  d-flex justify-content-center  "
        style={{ backgroundColor: "#E7E7E7" }}
      >
        <BeatLoader color="#0667b6" size={20} />
      </div>
    </div>
  );
}

export default PreviewLoading;
