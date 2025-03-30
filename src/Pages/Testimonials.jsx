import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "Panto made my room feel more alive and minimalist. Highly recommend!",
      image: "",
      coverImg: "testimonialBG1",
      rating: 3,
    },
    {
      name: "Jane Smith",
      review: "Great designs and superb service! I love my new living space.",
      image: "reviewer2",
      coverImg: "testimonialBG2",
      rating: 2,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: "reviewer3",
      coverImg: "testimonialBG3",
      rating: 4,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: "reviewer1",
      coverImg: "testimonialBG1",
      rating: 3,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: "reviewer2",
      coverImg: "testimonialBG2",
      rating: 5,
    },
    {
      name: "Michael Brown",
      review:
        "Very easy to work with. Turned my home into a cozy, modern sanctuary!",
      image: "reviewer3",
      coverImg: "testimonialBG3",
      rating: 4,
    },

    // Add more reviews as needed...
  ];

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center m-5">
            <h4 style={{ color: "#E58411" }}>Testimonials</h4>
            <h2>Our Client Reviews</h2>
          </div>
        </div>
        <div className="row">
          {reviews.slice(0,3).map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://media.istockphoto.com/id/1276634862/photo/businessman-writing-yellow-five-star-to-customer-evaluation-service-and-product-marketing.jpg?s=612x612&w=0&k=20&c=EjzC8O8nFD_Qwu5JBz5xdnHSJBgMCXeR2ck4zqD988Y=`}
                />
                <Card.Body>
                  <Card.Title>Name : {item.name}</Card.Title>
                  <Card.Text>
                    Review : {item.review} <br />
                    <strong>Rating:</strong> {item.rating}/5
                  </Card.Text>
                  <Button variant="info">Detail..</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
