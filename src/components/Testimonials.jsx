import React, { useEffect, useState } from "react";
import ellipse from "/assets/images/ellipse.svg?url";
import currentEllipse from "/assets/images/current-ellipse.svg?url";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      content:
        "Extremely easy! Browsed for furniture and it was in my new apartment within a week. first div",
      index: 1,
      star: 5,
      author: "Paul Pogba",
    },
    {
      content: "Extremely easy! Lorem Ipsum dolor sit amet some type shit.",
      index: 2,
      star: 4,
      author: "Sergio Ramos",
    },
    {
      content:
        " Browsed for furniture and it was in my new apartment within a week. type shit type shit",
      index: 3,
      star: 5,
      author: "Cristiano Ronaldo",
    },
    {
      content:
        "Extremely easy!  it was in my new apartment within a week. More Kinds of Type shit and stuff",
      index: 4,
      star: 5,
      author: "Lionel Messi",
    },
  ]);

  const [item, setItem] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([
    testimonials.slice(0, 2),
  ]);
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const increment = () => {
    item < testimonials.length - 1 ? setItem((prev) => prev + 1) : "";
    setStartIndex((prev) => (prev < testimonials.length - 2 ? prev + 1 : 0));
    setEndIndex((prev) => (prev < testimonials.length ? prev + 1 : 2));

    setVisibleTestimonials(testimonials.slice(startIndex, endIndex));
    console.log("start: ", startIndex, "end: ", endIndex);
    console.log(testimonials);
  };

  const decrement = () => {
    item > 0 ? setItem((prev) => prev - 1) : "";
    setStartIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length));
    setEndIndex((prev) => (prev > 2 ? prev - 1 : testimonials.length));
    setVisibleTestimonials(testimonials.slice(startIndex, endIndex));
    console.log(startIndex, endIndex);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleSlides = [...testimonials, ...testimonials].slice(
    index,
    index + slidesToShow
  );

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 800) setSlidesToShow(1);
      else if (width < 1200) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  console.log(visibleTestimonials);

  return (
    <div className="bg-light-grey p-5 w-full space-y-10">
      <h2 className="text-center text-2xl">What our Customers have to say?</h2>
      <div className="wrapper flex justify-between items-center">
        <span className="svg-arrow cursor-pointer" onClick={prevSlide}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125ZM15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375L10.7006 15.9375L14.7262 19.9613C14.9023 20.1373 15.0012 20.376 15.0012 20.625C15.0012 20.874 14.9023 21.1127 14.7262 21.2887C14.5502 21.4648 14.3115 21.5637 14.0625 21.5637C13.8135 21.5637 13.5748 21.4648 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49832 15.1233 7.49832 15C7.49832 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.5748 8.53521 13.8135 8.43632 14.0625 8.43632C14.3115 8.43632 14.5502 8.53521 14.7262 8.71125C14.9023 8.88729 15.0012 9.12605 15.0012 9.375C15.0012 9.62395 14.9023 9.86271 14.7262 10.0387L10.7006 14.0625L21.5625 14.0625Z"
            />
          </svg>
        </span>

        <div className="carousel flex justify-center items-center flex-col">
          <div className="card-container  flex justify-center items-stretch  gap-5">
            {/* card */}

            {/* larger screens */}
            {visibleSlides.map((item, i) => (
              <div className="card" data-index={item.index} key={i}>
                <div className="stars flex mb-3">
                  {[...Array(item.star)].map((_, i) => (
                    <span className="star" key={i}>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                          fill="#FC8510"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="card-content flex flex-col justify-center space-y-2 w-10/12 text-center">
                  <p>{item.content}</p>
                  <span className="author m-auto font-semibold">
                    &bull; &nbsp; {item.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="indicators flex gap-5">
            <img
              className="indicator mt-4 cursor-pointer"
              src={index === 0 ? currentEllipse : ellipse}
            />
            <img
              className="indicator mt-4 cursor-pointer"
              src={index === 1 ? currentEllipse : ellipse}
            />
            <img
              className="indicator mt-4 cursor-pointer"
              src={index === 2 ? currentEllipse : ellipse}
            />
            <img
              className="indicator mt-4 cursor-pointer"
              src={index === 3 ? currentEllipse : ellipse}
            />
          </div>
        </div>

        <span className="svg-arrow cursor-pointer" onClick={nextSlide}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875ZM15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30ZM8.4375 15.9375C8.18886 15.9375 7.9504 15.8387 7.77459 15.6629C7.59877 15.4871 7.5 15.2486 7.5 15C7.5 14.7514 7.59877 14.5129 7.77459 14.3371C7.9504 14.1613 8.18886 14.0625 8.4375 14.0625L19.2994 14.0625L15.2738 10.0387C15.0977 9.86271 14.9988 9.62395 14.9988 9.375C14.9988 9.12605 15.0977 8.88729 15.2738 8.71125C15.4498 8.53521 15.6885 8.43632 15.9375 8.43632C16.1865 8.43632 16.4252 8.53521 16.6012 8.71125L22.2263 14.3363C22.3136 14.4233 22.3828 14.5268 22.4301 14.6407C22.4773 14.7546 22.5017 14.8767 22.5017 15C22.5017 15.1233 22.4773 15.2454 22.4301 15.3593C22.3828 15.4732 22.3136 15.5767 22.2263 15.6637L16.6012 21.2887C16.4252 21.4648 16.1865 21.5637 15.9375 21.5637C15.6885 21.5637 15.4498 21.4648 15.2738 21.2887C15.0977 21.1127 14.9988 20.874 14.9988 20.625C14.9988 20.376 15.0977 20.1373 15.2738 19.9613L19.2994 15.9375L8.4375 15.9375Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
