import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap"; // Import Nav from React Bootstrap
import { FaCartPlus } from "react-icons/fa";
import { TbBrandAppleNews } from "react-icons/tb";
const Headers = () => {
    const headersManue=["Furniture","Shop","AboutUs","Contact"];
  return (
    <> {/* React Fragment to wrap everything */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p  className="text-dark">Band <span><TbBrandAppleNews /></span></p>
            </div>
            <div className="col-md-6">
              <Nav className="justify-content-start ">
                {
                    headersManue.map((item, index)=>(
                        <Nav.Item key={index}>
                        <Nav.Link className="text-success" href={`/${item.toLowerCase()}`}>{item}</Nav.Link>
                        </Nav.Item>
                    ))
                }
              </Nav>
            </div>
            <div className="col-md-2"><p className="text-dark">Cart <span>
            <FaCartPlus />
              </span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headers;

