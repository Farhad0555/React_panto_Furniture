import React from "react";
// import products from "../utils/products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
const Sellingproduct = () => {
  const productCategories = ["Chair", "Bed", "Sofa", "Lamp"];
  const products = [
    // Chairs
    {
      id: 1,
      name: "Comfortable Chair",
      category: "Chair",
      price: 99,
      imageUrl: "../assets/products/chair-1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Ergonomic Chair",
      category: "Chair",
      price: 129,
      imageUrl: "../assets/products/chair-2.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Stylish Armchair",
      category: "Chair",
      price: 149,
      imageUrl: "../assets/products/chair-3.png",
      rating: 3,
    },
    {
      id: 4,
      name: "Leather Recliner",
      category: "Chair",
      price: 199,
      imageUrl: "../assets/products/chair-4.png",
      rating: 4,
    },
    {
      id: 5,
      name: "Minimalist Chair",
      category: "Chair",
      price: 89,
      imageUrl: "../assets/products/chair-5.png",
      rating: 4.5,
    },

    // Beds
    {
      id: 6,
      name: "King Size Bed",
      category: "Beds",
      price: 299,
      imageUrl: "beds-1.png",
      rating: 5,
    },
    {
      id: 7,
      name: "Queen Size Bed",
      category: "Beds",
      price: 249,
      imageUrl: "beds-2.png",
      rating: 5,
    },
    {
      id: 8,
      name: "Modern Bed Frame",
      category: "Beds",
      price: 399,
      imageUrl: "beds-3.png",
      rating: 3,
    },
    {
      id: 9,
      name: "Platform Bed",
      category: "Beds",
      price: 349,
      imageUrl: "beds-4.png",
      rating: 2,
    },
    {
      id: 10,
      name: "Sleigh Bed",
      category: "Beds",
      price: 459,
      imageUrl: "beds-5.png",
      rating: 5,
    },

    // Sofas
    {
      id: 11,
      name: "Luxury Sofa",
      category: "Sofa",
      price: 499,
      imageUrl: "sofa-1.png",
      rating: 4,
    },
    {
      id: 12,
      name: "Compact Sofa",
      category: "Sofa",
      price: 399,
      imageUrl: "sofa-2.png",
      rating: 5,
    },
    {
      id: 13,
      name: "L-shaped Sofa",
      category: "Sofa",
      price: 699,
      imageUrl: "sofa-3.png",
      rating: 4,
    },
    {
      id: 14,
      name: "Sofa with Chaise",
      category: "Sofa",
      price: 549,
      imageUrl: "sofa-4.png",
      rating: 5,
    },
    {
      id: 15,
      name: "Sectional Sofa",
      category: "Sofa",
      price: 799,
      imageUrl: "sofa-5.png",
      rating: 3.6,
    },

    // Lamps
    {
      id: 16,
      name: "Modern Lamp",
      category: "Lamp",
      price: 49,
      imageUrl: "lamp-1.png",
      rating: 5,
    },
    {
      id: 17,
      name: "Classic Lamp",
      category: "Lamp",
      price: 59,
      imageUrl: "lamp-2.png",
      rating: 4,
    },
    {
      id: 18,
      name: "Wooden Table Lamp",
      category: "Lamp",
      price: 69,
      imageUrl: "lamp-3.png",
      rating: 3,
    },
    {
      id: 19,
      name: "Industrial Floor Lamp",
      category: "Lamp",
      price: 89,
      imageUrl: "lamp-4.png",
      rating: 5,
    },
    {
      id: 20,
      name: "Vintage Desk Lamp",
      category: "Lamp",
      price: 79,
      imageUrl: "lamp-6.png",
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Best Selling Products Section */}
      <div className="container d-flex justify-content-center">
        <div className="row">
          <h1 className="text-center">Best Selling Products</h1>{" "}
          {/* Fixed typo */}
          <Nav className="flex-row justify-content-center">
            {/* Display product categories */}
            {productCategories.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link href="#">{item}</Nav.Link> {/* Placeholder href */}
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container">
        <div className="row">
          {products.slice(0, 8).map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={item.imageUrl} alt={item.name} /> */}
                <Card.Img
                  variant="top"
                  src={`https://media.gettyimages.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=gi&k=20&c=6cE9Zg6kGSXOs9WrwCNG-3zXMyLkr1Y1_DH7qg_z-iY=`}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>Title: {item.name}</Card.Title>

                  {/* Star Rating Component */}

                  <Card.Text>
                    Category: {item.category}
                    <br />
                    Price: ${item.price}
                    <br />
                    Rating:{" "}
                    {[...Array(5)].map((_, i) => (
                      <CiStar
                        key={i}
                        color={i < item.rating ? "#ffd700" : "#ccc"}
                        size={20}
                      />
                    ))}{" "}
                    / 5
                  </Card.Text>
                  <Button variant="success">
                    Cart{" "}
                    <span>
                      <FaCartArrowDown />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellingproduct;
