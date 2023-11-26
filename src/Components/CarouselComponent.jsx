import React from "react"
import Cards from "./Cards"
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"
import img5 from "../Images/img5.jpg"
import img6 from "../Images/img6.jpg"
const CarouselComponent = () => {
    const name1="adi"
    const description1=" Adi,  Director at AK & Technical Expert."
    const name2="Khalandar"
    const description2="Khalandar, Director at AK & Writer Expert as a subject"
    const name3="Naveen"
    const description3="Java Developer & Marketing Head"
    const name4="Vindo Kumar K"
    const description4="Operation Head, Technical Subject Matter Expert"
    const name5="Sudheer"
    const description5="Operation Head & Technical Expert"
    const name6="Harika"
    const description6="Front-End Architecture"
    const name7="Mounica"
    const description7="Front-End Architecture"
    const name8="Harish K"
    const description8="UI Developer"
    const name9="Harish D"
    const description9="Front End Developer"

    const name10="Prakash"
    const description10=" Software Developer"
    
    const name11="Priya K"
    const description11="Front End Developer"
    
    const name12="Sushmita"
    const description12="Content Writer"
    

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide w-90"
        style={{
          height: "60vh",
          width: "90vw",
          margin: "auto",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img1} description={description1} name={name1} />
              <Cards Image={img2} description={description2} name={name2} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img3} description={description3} name={name3} />
              <Cards Image={img4} description={description4} name={name4}/>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img3}description={description5} name={name5} />
              <Cards Image={img4}description={description6} name={name6} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img3}description={description7} name={name7} />
              <Cards Image={img4} description={description8} name={name8}/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img3} description={description9} name={name9}/>
              <Cards Image={img4} description={description10} name={name10}/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-around gap-3">
              <Cards Image={img5} description={description11} name={name11}/>
              <Cards Image={img6}description={description12} name={name12} />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
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
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default CarouselComponent