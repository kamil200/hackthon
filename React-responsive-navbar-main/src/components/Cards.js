import React from "react";
import "./Cards.css";
function Cards() {
  return (
    <div>
      <div class="main">
        <div class="row-card">
          <div class="card">
            <img src="/imgs/Aadhaar_Logo.png-PhotoRoom.png" alt="Adhaar" />
            <div class="container">
              <h4 class="text-center">Adhaar Card</h4>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis
              </p>
              <button class="card-btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div class="row-card">
          <div class="card">
            <img src="/imgs/CASTE 1.png" alt="Adhaar" />
            <div class="container">
              <h4 class="text-center">Adhaar Card</h4>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis
              </p>
              <button class="card-btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div class="row-card">
          <div class="card">
            <img src="/imgs/pan3.png" alt="Adhaar" />
            <div class="container">
              <h4 class="text-center">Adhaar Card</h4>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis
              </p>
              <button class="card-btn">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
