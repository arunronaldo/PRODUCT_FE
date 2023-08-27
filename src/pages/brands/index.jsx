/***************Import React packages*******************/
import React from "react";

/***************Import Images**************************/
import Brand1 from "../../assets/images/brand-1.png";
import Brand2 from "../../assets/images/brand-2.png";
import Brand3 from "../../assets/images/brand-3.png";
import Brand4 from "../../assets/images/brand-4.png";
import Brand5 from "../../assets/images/brand-5.png";
import Brand6 from "../../assets/images/brand-6.png";
import Brand7 from "../../assets/images/brand-7.png";
import Brand8 from "../../assets/images/brand-8.png";
import Brand9 from "../../assets/images/brand-9.png";
import Brand10 from "../../assets/images/brand-10.png";
import Brand11 from "../../assets/images/brand-11.png";
import Brand12 from "../../assets/images/brand-12.png";
import Brand13 from "../../assets/images/brand-13.png";
import Brand14 from "../../assets/images/brand-14.png";
import Brand15 from "../../assets/images/brand-15.png";
import Brand16 from "../../assets/images/brand-16.png";

const brandsData = [
  {
    id: 1,
    img: Brand1,
    name: "AIMPARTS",
  },
  {
    id: 2,
    img: Brand2,
    name: "WINDENGINE",
  },
  {
    id: 3,
    img: Brand3,
    name: "TURBOELECTRIC",
  },
  {
    id: 4,
    img: Brand4,
    name: "STARTONE",
  },
  {
    id: 5,
    img: Brand5,
    name: "BRANDIX",
  },
  {
    id: 6,
    img: Brand6,
    name: "ABS_BRAND",
  },
  {
    id: 7,
    img: Brand7,
    name: "GREATCIRCLE",
  },
  {
    id: 8,
    img: Brand8,
    name: "JUSTROMB",
  },
  {
    id: 9,
    img: Brand9,
    name: "GREATCIRCLE",
  },
  {
    id: 10,
    img: Brand10,
    name: "FASTWHEELS",
  },
  {
    id: 11,
    img: Brand11,
    name: "STROYKA-X",
  },
  {
    id: 12,
    img: Brand12,
    name: "MISSION-51",
  },
  {
    id: 13,
    img: Brand13,
    name: "FUELCORP",
  },
  {
    id: 14,
    img: Brand14,
    name: "REDGATE",
  },
  {
    id: 15,
    img: Brand15,
    name: "BLOCKS",
  },
  {
    id: 16,
    img: Brand16,
    name: "BLACKBOX",
  },
  {
    id: 17,
    img: Brand3,
    name: "TURBOELECTRIC",
  },
  {
    id: 18,
    img: Brand8,
    name: "JUSTROMB",
  },
];

const Brands = () => {
  return (
    <div className="container">
      <div className="row">
        {brandsData.map((e, index) => {
          return (
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <div style={{ borderWidth: 3, borderColor: "red" }}>
                <img key={index} src={e?.img} style={{ width: "100%" }} />
                <h6
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "#969696",
                  }}
                >
                  {e?.name}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Brands;
