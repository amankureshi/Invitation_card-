import React from "react";
import CategoryCard from "./CategoryCard";

const cards = [
  {
    title: "Birthday",
    image: "https://picsum.photos/220/320?1",
  },
  {
    title: "Wedding",
    image: "https://picsum.photos/220/320?2",
  },
  {
    title: "Baby shower",
    image: "https://picsum.photos/220/320?3",
  },
  {
    title: "Upload your own",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828925.png",
  },
  {
    title: "Summer",
    image: "https://picsum.photos/220/320?4",
  },
  {
    title: "AI Magic Photo",
    image: "https://picsum.photos/220/320?5",
  },
];

function Hero() {
  return (
    <section className="container-fluid py-5">
      <div className="text-center">
        <h1 className="display-2 fw-bold">
          <span className="text-success">Invitation</span> maker
        </h1>

        <p className="fs-4 text-secondary">
          Explore a wide range of categories to find the perfect invitation for
          your event
        </p>
      </div>

      <div className="row mt-5 g-4">
        {cards.map((item, index) => (
          <div className="col-lg-2 col-md-4 col-6" key={index}>
            <CategoryCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
