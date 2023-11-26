
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Carousel } from "react-bootstrap"
import img1 from '../Images/img1.jpg'
import './Test.css';


function IntlTelInput() {
  return (
    <> 
    <h1>Our Dedicated Team</h1>
    <h>Collaborative Expertise for Seamless Solutions</h>
<br></br> <h1>Directors</h1>
      <Carousel
        style={{
          height: "60vh",
          width: "90vw",
          margin: "auto",
        }}
        interval={null}
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-around gap-3 ">
            <Card
              style={{
                width: "30rem",
                textAlign: "center",
                flex: "1",
                backgroundColor: "#00000063",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <Card.Img
                  className="w-25 object-fit-cover rounded-circle"
                  variant="top"
                  src={img1}
                  height="150px"
                />
                <Card.Body>
                  <Card.Title className="text-white ">Ajay Gupta</Card.Title>
                  <h6>Marketing and sales head</h6>
                  <Card.Text className="card-text">
                    Ajay Gupta, the Marketing Head, is an adroit professional
                    specializing in client acquisition, sales, and digital
                    marketing. Equipped with an MBA degree, he brings a wealth
                    of knowledge and expertise to the marketing sector, driving
                    strategic growth and success in various marketing endeavors.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>

            <Card
              style={{
                width: "30rem",
                textAlign: "center",
                flex: "1",
                backgroundColor: "#00000063",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <Card.Img
                  className="w-25 object-fit-cover rounded-circle"
                  variant="top"
                  src={img1}
                  height="150px"
                />
                <Card.Body>
                  <Card.Title className="text-white ">Ajay Gupta</Card.Title>
                  <h6>Marketing and sales head</h6>
                  <Card.Text className="card-text">
                    Ajay Gupta, the Marketing Head, is an adroit professional
                    specializing in client acquisition, sales, and digital
                    marketing. Equipped with an MBA degree, he brings a wealth
                    of knowledge and expertise to the marketing sector, driving
                    strategic growth and success in various marketing endeavors.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around gap-3 ">
            <Card
              style={{
                width: "30rem",
                textAlign: "center",
                flex: "1",
                backgroundColor: "#00000063",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <Card.Img
                  className="w-25 object-fit-cover rounded-circle"
                  variant="top"
                  src={img1}
                  height="150px"
                />
                <Card.Body>
                  <Card.Title className="text-white ">Ajay Gupta</Card.Title>
                  <h6>Marketing and sales head</h6>
                  <Card.Text className="card-text">
                    Ajay Gupta, the Marketing Head, is an adroit professional
                    specializing in client acquisition, sales, and digital
                    marketing. Equipped with an MBA degree, he brings a wealth
                    of knowledge and expertise to the marketing sector, driving
                    strategic growth and success in various marketing endeavors.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>

            <Card
              style={{
                width: "30rem",
                textAlign: "center",
                flex: "1",
                backgroundColor: "#00000063",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <Card.Img
                  className="w-25 object-fit-cover rounded-circle"
                  variant="top"
                  src={img1}
                  height="150px"
                />
                <Card.Body>
                  <Card.Title className="text-white ">Ajay Gupta</Card.Title>
                  <h6>Marketing and sales head</h6>
                  <Card.Text className="card-text">
                    Ajay Gupta, the Marketing Head, is an adroit professional
                    specializing in client acquisition, sales, and digital
                    marketing. Equipped with an MBA degree, he brings a wealth
                    of knowledge and expertise to the marketing sector, driving
                    strategic growth and success in various marketing endeavors.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default IntlTelInput








