/***************Import React packages**************************/
import React from "react";
import "./slider.css";

const HomeSlider = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#969696",
              borderRadius: "90%",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#969696",
              borderRadius: "90%",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#969696",
              borderRadius: "90%",
            }}
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div className="row sliderbg1">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  <h1
                    style={{
                      background: "#FFDC40",
                      fontSize: 28,
                      fontWeight: "700",
                      width: "40%",
                      padding: 5,
                      textAlign: "center",
                    }}
                  >
                    30% OFF
                  </h1>
                  <h1 style={{ fontSize: 38, fontWeight: "700" }}>
                    When Buying Parts
                    <br />
                    With Installation
                  </h1>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#969696",
                      paddingTop: 15,
                    }}
                  >
                    Installation of parts in the services of
                    <br />
                    our partners.
                  </p>
                  <button
                    type="button"
                    className="btn mt-4"
                    style={{
                      backgroundColor: "#07DB96",
                      color: "#fff",
                      width: "40%",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div className="row sliderbg1">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  <h1
                    style={{
                      background: "#FFDC40",
                      fontSize: 28,
                      fontWeight: "700",
                      width: "40%",
                      padding: 5,
                      textAlign: "center",
                    }}
                  >
                    30% OFF
                  </h1>
                  <h1 style={{ fontSize: 38, fontWeight: "700" }}>
                    When Buying Parts
                    <br />
                    With Installation
                  </h1>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#969696",
                      paddingTop: 15,
                    }}
                  >
                    Installation of parts in the services of
                    <br />
                    our partners.
                  </p>
                  <button
                    type="button"
                    className="btn mt-4"
                    style={{
                      backgroundColor: "#07DB96",
                      color: "#fff",
                      width: "40%",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div className="row sliderbg1">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  <h1
                    style={{
                      background: "#FFDC40",
                      fontSize: 28,
                      fontWeight: "700",
                      width: "40%",
                      padding: 5,
                      textAlign: "center",
                    }}
                  >
                    30% OFF
                  </h1>
                  <h1 style={{ fontSize: 38, fontWeight: "700" }}>
                    When Buying Parts
                    <br />
                    With Installation
                  </h1>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#969696",
                      paddingTop: 15,
                    }}
                  >
                    Installation of parts in the services of
                    <br />
                    our partners.
                  </p>
                  <button
                    type="button"
                    className="btn mt-4"
                    style={{
                      backgroundColor: "#07DB96",
                      color: "#fff",
                      width: "40%",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
