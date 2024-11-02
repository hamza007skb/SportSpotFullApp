import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Booking from "./Booking";
import Map from "./Map";
import Review from "./Review";
import std_icon from "../Assets/sign_Bg.jpeg";
import stdd_icon from "../Assets/login_Bg.jpeg";

export default function Ground() {
  const [reviews, setReviews] = useState([]);
  const [selectedPitch, setSelectedPitch] = useState(null);

  const handlePitchClick = (pitch) => {
    setSelectedPitch(pitch);
  };

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <>
      <div className="page-ground">
        <div className="info-specific-ground">
          <div className="info-text-ground">
            <div className="name-rev">
              <div className="name-rating-ground">
                <h3>Boys Pitch</h3>
              </div>
              <div className="rating-ground">
                <span>4.3/5⭐</span>
              </div>
            </div>
            <div className="venue">
              <p>Stadium Type: Outdoor</p>
              <p>Sports Hours: 01:00 PM - 01:00 AM</p>
            </div>
            <div className="loc">
              <FaMapMarkerAlt className="icon" />
              <p>Bhuptian Chow, Raiwind</p>
              <br />
            </div>
          </div>
          <div className="pitch-pictures">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={std_icon} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item active">
                  <img src={stdd_icon} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item active">
                  <img src={std_icon} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <p className="pitch-price">Rs.1500/Hour</p>
          <div className="description">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur blanditiis modi perferendis? Quia natus nesciunt
              dolor odio, molestias pariatur accusantium, explicabo laborum
              blanditiis illum possimus nobis commodi. Enim voluptatum autem
              ducimus expedita. Consequatur animi nobis maxime quam, beatae
              ipsam optio. Quae sit quis labore aperiam cumque libero pariatur
              nostrum consectetur tempora? Facilis, numquam.
            </p>
          </div>
        </div>
        <div className="calender-map">
          <div className="calender">
            <Booking selectedPitch={selectedPitch} />
          </div>
          <div className="ground-loc">
            <div className="ground-map">
              <Map />
            </div>
          </div>
        </div>
      </div>

      <div className="ground-info">
        <p>Pitch Types</p>
        <div className="pitch-type spacing">
          <span
            className={selectedPitch === "50/20m" ? "selected" : ""}
            onClick={() => handlePitchClick("50/20m")}
          >
            50 / 20 m
          </span>
          <span
            className={selectedPitch === "60/30m" ? "selected" : ""}
            onClick={() => handlePitchClick("60/30m")}
          >
            60 / 30 m
          </span>
          <span
            className={selectedPitch === "70/40m" ? "selected" : ""}
            onClick={() => handlePitchClick("70/40m")}
          >
            70 / 40 m
          </span>
        </div>

        <p>Stadium Facilities</p>
        <div className="pitch-facility spacing">
          <span>Canteen</span>
          <span>Changing Room</span>
          <span>Toilets</span>
          <span>Parking</span>
        </div>

        <p>Equipment Provided</p>
        <div className="pitch-equipment spacing-1rem">
          <span>Football</span>
          <span>Paddle</span>
          <span>Bat n Ball</span>
        </div>
      </div>

      <div className="nav-style">
        <div className="nav-underline"></div>
      </div>

      <div className="review">
        <p className="review-p-heading">Customer Reviews</p>
        <Review addReview={addReview} />
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div className="reviewer-name">
                <p>{review.username}</p>
                <p className="rev-date">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <p className="per-review">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
