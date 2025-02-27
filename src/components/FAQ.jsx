import React from "react";

const FAQ = () => {
  const showAnswer = (e) => {
    const items = document.querySelectorAll(".faq-item");
    const item = e.target.closest(".summary");
    const answer = item.nextElementSibling;
    answer.classList.toggle("hidden");
    console.log(item.nextElementSibling);

    items.forEach((faq) => {
      const detail = faq.querySelector(".answer");
      if (!answer.classList.contains("hidden") && detail === answer) {
        faq.querySelector(".svg").classList.toggle("rotate-180");
        faq
          .querySelector(".svg")
          .classList.replace("fill-very-dark-blue", "fill-secondary");
      }

      if (detail !== answer && !detail.classList.contains("hidden")) {
        console.log(detail);
        detail.classList.toggle("hidden");
        faq
          .querySelector(".svg")
          .classList.replace("fill-secondary", "fill-very-dark-blue");
        faq.querySelector(".svg").classList.remove("rotate-180");
      }

      if (detail === answer && detail.classList.contains("hidden")) {
        faq.querySelector(".svg").classList.remove("rotate-180");
        faq
          .querySelector(".svg")
          .classList.replace("fill-secondary", "fill-very-dark-blue");
      }
    });
  };
  return (
    <div>
      <h2 className="text-3xl text-center">Frequently Asked Questions</h2>
      <div className="container p-5 m-auto py-10 max-w-[55rem] w-10/12">
        {/* items */}
        <div
          className="faq-item 
        "
        >
          <div className="summary">
            <div className="question">How do I sleep in class?</div>
            <span
              className="svg fill-very-dark-blue hover:fill-secondary cursor-pointer"
              onClick={(e) => {
                showAnswer(e);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84783 22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5C9.84783 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84783 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84783 2.5 12.5 2.5ZM6.25 10L12.5 16.25L18.75 10H6.25Z" />
              </svg>
            </span>
          </div>
          <div className="answer hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            send me to tie repudiandae voluptatibus nostrum in commodi voluptate
            sit labore officiis facere.
          </div>
        </div>
        <div
          className="faq-item 
        "
        >
          <div className="summary">
            <div className="question">How do I sleep in class?</div>
            <span
              className="svg fill-very-dark-blue hover:fill-secondary cursor-pointer"
              onClick={(e) => {
                showAnswer(e);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84783 22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5C9.84783 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84783 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84783 2.5 12.5 2.5ZM6.25 10L12.5 16.25L18.75 10H6.25Z" />
              </svg>
            </span>
          </div>
          <div className="answer hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            send me to tie repudiandae voluptatibus nostrum in commodi voluptate
            sit labore officiis facere.
          </div>
        </div>
        <div
          className="faq-item 
        "
        >
          <div className="summary">
            <div className="question">How do I sleep in class?</div>
            <span
              className="svg fill-very-dark-blue hover:fill-secondary cursor-pointer"
              onClick={(e) => {
                showAnswer(e);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84783 22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5C9.84783 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84783 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84783 2.5 12.5 2.5ZM6.25 10L12.5 16.25L18.75 10H6.25Z" />
              </svg>
            </span>
          </div>
          <div className="answer hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            send me to tie repudiandae voluptatibus nostrum in commodi voluptate
            sit labore officiis facere.
          </div>
        </div>
        <div
          className="faq-item 
        "
        >
          <div className="summary">
            <div className="question">How do I sleep in class?</div>
            <span
              className="svg fill-very-dark-blue hover:fill-secondary cursor-pointer"
              onClick={(e) => {
                showAnswer(e);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit"
              >
                <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84783 22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5C9.84783 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84783 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84783 2.5 12.5 2.5ZM6.25 10L12.5 16.25L18.75 10H6.25Z" />
              </svg>
            </span>
          </div>
          <div className="answer hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            send me to tie repudiandae voluptatibus nostrum in commodi voluptate
            sit labore officiis facere.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
