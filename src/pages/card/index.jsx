/* eslint-disable jsx-a11y/alt-text */
/***************Import React packages**************************/
import React, { useEffect, useState } from "react";

/***************Import CSS**************************/
import "./card.css";

/***************Import Icons**************************/
import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiBracketsSquareThin } from "react-icons/pi";

/***************Import Components**************************/
import LoadingScreen from "../../component/LoadingComponent";

/***************Import Images**************************/
import FreeShipping from "../../assets/images/free-delivery.svg";
import Hours from "../../assets/images/24-hours.svg";
import Security from "../../assets/images/payment-security.svg";
import Tag from "../../assets/images/tag.svg";

/***************Import API**************************/
import ProductsApi from "../../api/ProductsApi";

const Card = () => {
  const stars = Array(5).fill(1);
  const [loading, setLoading] = useState(false);
  const [featuredproductData, setFeaturedProductData] = useState([]);
  const [topRatedProductData, setTopRatedProductData] = useState([]);
  const [specialOfferProductData, setSpecialOfferProductData] = useState([]);
  const [bestSellerProductData, setbestSellerProductData] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    await ProductsApi.getallProducts().then((res) => {
      let featured = res?.data?.data?.filter(
        (ev) => ev.productType === "featured"
      );
      let toprated = res?.data?.data.filter(
        (ev) => ev.productType === "top-rated"
      );
      let specialoffer = res?.data?.data.filter(
        (ev) => ev.productType === "special-offer"
      );
      let bestseller = res?.data?.data.filter(
        (ev) => ev.productType === "best-seller"
      );
      setFeaturedProductData(featured);
      setTopRatedProductData(toprated);
      setSpecialOfferProductData(specialoffer);
      setbestSellerProductData(bestseller);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          {/*********************Featured Products*********************** */}
          <div className="container font">
            <h4>Featured Products</h4>
            <hr />
            <div class="row pricing g-1">
              {featuredproductData.map((item, index) => {
                return (
                  <div class="col-md-2">
                    <div class="card content-card">
                      <div class="card-body">
                        <div
                          className="col-md-12"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <PiBracketsSquareThin color="grey" />
                        </div>
                        <div className="d-flex justify-content-center">
                          <img
                            src={
                              item?.images?.imageURL
                                ? item?.images?.imageURL
                                : ""
                            }
                            alt=""
                            className="text-center"
                            width="100%"
                          />
                        </div>
                        <p
                          style={{
                            marginBottom: 0,
                            fontSize: 12,
                            color: "#969696",
                          }}
                        >
                          Sku:{item.productSku}
                        </p>
                        <div
                          style={{
                            color: "#000",
                            fontSize: 14,
                            fontWeight: "600",
                          }}
                        >
                          {item?.productName ? item?.productName : ""}
                        </div>
                        <div className="d-flex justify-content-between">
                          {stars.map((_, index) => {
                            return (
                              <FaStar
                                key={index}
                                size={20}
                                color={
                                  item?.productRating > index
                                    ? "orange"
                                    : "grey"
                                }
                                style={{
                                  marginRight: 1,
                                  cursor: "pointer",
                                }}
                              />
                            );
                          })}
                          <span
                            style={{
                              fontSize: 12,
                              color: "#969696",
                              fontWeight: "500",
                            }}
                          >
                            {item?.productReview ? item?.productReview : 0}
                            reviews
                          </span>
                        </div>
                        <div className="row" style={{ marginTop: "5px" }}>
                          <div className="col-md-6">
                            <p style={{ fontWeight: "bold", marginBottom: 0 }}>
                              ${item?.productPrice ? item?.productPrice : 0}
                            </p>
                          </div>
                          <div
                            className="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              paddingTop: "5px",
                            }}
                          >
                            <AiOutlineShoppingCart size={20} color="grey" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/*********************Card Section *********************** */}
          <div className="container font">
            <div class="row g-5">
              <div class="col-md-6">
                <div class="card banner1">
                  <div className="row">
                    <div className="col-md-6 overlay">
                      <div>
                        <h5 className="banner-title">MOTOR OILS</h5>
                        <p className="banner-description">
                          Synthetic motor oil with free shipping <br />
                          Friction free life guaranteed
                        </p>
                        <button
                          className="btn mt-2"
                          style={{ backgroundColor: "#E42327", color: "#fff" }}
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card banner2">
                  <div className="row">
                    <div className="col-md-6 overlay">
                      <div>
                        <h5 className="banner-title2">SAVE UPTO $40</h5>
                        <p className="banner-description">
                          Luxurious interior part for real aesthetes
                          <br />
                          Leather, fabric, ivory and more.
                        </p>
                        <button
                          className="btn mt-2"
                          style={{ backgroundColor: "#E42327", color: "#fff" }}
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>

          {/*********************Top Rated Products*********************** */}
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row ">
              <div className="col-md-4">
                <h5>Top Rated Products</h5>
                <hr />
                {topRatedProductData.map((item) => {
                  return (
                    <div class="card" style={{ marginTop: "10px" }}>
                      <div
                        className="container"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                              <img
                                src={
                                  item?.images?.imageURL
                                    ? item?.images?.imageURL
                                    : ""
                                }
                                width="80px"
                                height="70px"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="row">
                                {item.productName ? item.productName : ""}
                              </div>
                              <div className="row">
                                <span
                                  className="d-flex align-items-center"
                                  style={{ padding: 0 }}
                                >
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={16}
                                        color={
                                          item?.productRating > index
                                            ? "orange"
                                            : "grey"
                                        }
                                        style={{
                                          marginRight: 1,
                                          cursor: "pointer",
                                        }}
                                      />
                                    );
                                  })}
                                  <span
                                    style={{
                                      fontSize: 14,
                                      color: "#969696",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item?.productReview
                                      ? item?.productReview
                                      : 0}
                                    reviews
                                  </span>
                                </span>
                                <div
                                  className="row"
                                  style={{ marginTop: "5px" }}
                                >
                                  <div
                                    className="col-md-6"
                                    style={{ padding: 0 }}
                                  >
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        marginBottom: 0,
                                      }}
                                    >
                                      $
                                      {item?.productPrice
                                        ? item?.productPrice
                                        : 0}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/*********************Special Offer Products*********************** */}
              <div className="col-md-4">
                <h5>Special Offers</h5>
                <hr />
                {specialOfferProductData.map((item) => {
                  return (
                    <div class="card" style={{ marginTop: "10px" }}>
                      <div
                        className="container"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                              <img
                                src={
                                  item?.images?.imageURL
                                    ? item?.images?.imageURL
                                    : ""
                                }
                                width="80px"
                                height="70px"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="row">
                                {item?.productName ? item?.productName : ""}
                              </div>
                              <div className="row">
                                <span
                                  className="d-flex align-items-center"
                                  style={{ padding: 0 }}
                                >
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={16}
                                        color={
                                          item?.productRating > index
                                            ? "orange"
                                            : "grey"
                                        }
                                        style={{
                                          marginRight: 1,
                                          cursor: "pointer",
                                        }}
                                      />
                                    );
                                  })}
                                  <span
                                    style={{
                                      fontSize: 14,
                                      color: "#969696",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item?.productReview
                                      ? item?.productReview
                                      : 0}
                                    reviews
                                  </span>
                                </span>
                                <div
                                  className="row"
                                  style={{ marginTop: "5px" }}
                                >
                                  <div
                                    className="col-md-6"
                                    style={{ padding: 0 }}
                                  >
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        marginBottom: 0,
                                      }}
                                    >
                                      $
                                      {item?.productPrice
                                        ? item?.productPrice
                                        : 0}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>{" "}
              {/*********************Best Seller Products*********************** */}
              <div className="col-md-4">
                <h5>Best Sellers</h5>
                <hr />
                {bestSellerProductData.map((item) => {
                  return (
                    <div class="card" style={{ marginTop: "10px" }}>
                      <div
                        className="container"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-4">
                              <img
                                src={
                                  item?.images?.imageURL
                                    ? item?.images?.imageURL
                                    : ""
                                }
                                width="80px"
                                height="70px"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="row">
                                {item?.productName ? item?.productName : ""}
                              </div>
                              <div className="row">
                                <span
                                  className="d-flex align-items-center"
                                  style={{ padding: 0 }}
                                >
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={16}
                                        color={
                                          item?.productRating > index
                                            ? "orange"
                                            : "grey"
                                        }
                                        style={{
                                          marginRight: 1,
                                          cursor: "pointer",
                                        }}
                                      />
                                    );
                                  })}
                                  <span
                                    style={{
                                      fontSize: 14,
                                      color: "#969696",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item?.productReview
                                      ? item?.productReview
                                      : 0}
                                    reviews
                                  </span>
                                </span>
                                <div
                                  className="row"
                                  style={{ marginTop: "5px" }}
                                >
                                  <div
                                    className="col-md-6"
                                    style={{ padding: 0 }}
                                  >
                                    <p
                                      style={{
                                        fontWeight: "bold",
                                        marginBottom: 0,
                                      }}
                                    >
                                      $
                                      {item?.productPrice
                                        ? item?.productPrice
                                        : 0}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/*********************Card Section 5*********************** */}
          <div className="container" style={{ marginTop: "50px" }}>
            <hr />
            <div className="row ">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-md-4">
                    <img src={FreeShipping} width="70px" height="60px" />
                  </div>
                  <div className="col-md-8 mt-2">
                    <h5
                      style={{ fontSize: 16, color: "#000", fontWeight: "700" }}
                    >
                      Free Shipping
                    </h5>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#969696",
                        fontWeight: "500",
                      }}
                    >
                      For orders from $50
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-md-4">
                    <img src={Hours} width="70px" height="60px" />
                  </div>
                  <div className="col-md-8 mt-2">
                    <h5
                      style={{ fontSize: 16, color: "#000", fontWeight: "700" }}
                    >
                      Support 24/7
                    </h5>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#969696",
                        fontWeight: "500",
                      }}
                    >
                      Call us anytime
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-md-4">
                    <img src={Security} width="70px" height="60px" />
                  </div>
                  <div className="col-md-8 mt-2">
                    <h5
                      style={{ fontSize: 16, color: "#000", fontWeight: "700" }}
                    >
                      100% Safety
                    </h5>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#969696",
                        fontWeight: "500",
                      }}
                    >
                      Only secure payments
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div className="row">
                  <div className="col-md-4">
                    <img src={Tag} width="70px" height="60px" />
                  </div>
                  <div className="col-md-8 mt-2">
                    <h5
                      style={{ fontSize: 16, color: "#000", fontWeight: "700" }}
                    >
                      Hot Offers
                    </h5>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#969696",
                        fontWeight: "500",
                      }}
                    >
                      Discount up to 90%
                    </p>
                  </div>
                </div>
              </div>
              {/* <div
            className="container"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <img src={FreeShipping} width="70px" height="60px" />
                </div>
                <div className="col-md-8">
                  <div className="row">Free Shipping</div>
                  <div className="row">
                    <p style={{ padding: 0 }}>For orders from $50</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Card;
