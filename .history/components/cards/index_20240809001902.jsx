import React from "react";
import "./styles.css";
import FlipCard from "./flipCard";

const cars = [
  {
    imageUrl:
      "https://i.ibb.co/FXtFBSh/martin-katler-0-Sm-GWb-Zzw-unsplash.jpg",
    name: "Black Coupe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imageUrl: "https://i.ibb.co/7C3nkfr/niklas-du-EI1op-VNk4yg-unsplash.jpg",
    name: "Porsche",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imageUrl:
      "https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg",
    name: "Orange Lambogini",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function MultipleFlipCards() {
  return (
    <div className="app">
      <h1>Our Cars</h1>
      <div className="car-container">
        {cars.map((car, index) => (
          <FlipCard
            key={index}
            imageUrl={car.imageUrl}
            name={car.name}
            description={car.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MultipleFlipCards;
