const Chairs = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-5">
        Comfy Couch, Lorem ipsum dolor sit amet.
      </h2>
      <div className="grid gap-5">
        <img src="/assets/images/chair1.png" alt="" className="w-full" />
        <div className="details space-y-5">
          <div className="stars md:block hidden">
            <span className="text-secondary">★ ★ ★ ★ ☆</span>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fugit molestias esse autem praesentium officiis. Assumenda
            voluptatibus nobis reprehenderit culpa ab quisquam nemo. Voluptates
            fugiat odio dicta officiis perferendis laboriosam.
          </p>

          <div className="payment-plan space-y-5">
            <h2 className="text-lg font-semibold">Choose how you want it</h2>
            <div className="plan">
              <div className="item flex items-center gap-3 ">
                <span
                  className=" border-[1.75px] rounded-lg flex p-5 w-full items-center border-mid-grey cursor-pointer "
                  //   onClick={() => setLagos((prevState) => !prevState)}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="border-mid-grey border-[1.5px] rounded-full  mr-10"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                    />
                  </svg>
                  Rent for
                  <span className="font-semibold m-0 pl-1">N8,000/month</span>
                </span>{" "}
              </div>
            </div>
            <div className="plan active-plan">
              <div className="item  items-center gap-3 bg-faint-secondary border-secondary border-[1.75px] rounded-lg flex flex-col">
                <span
                  className="   flex p-5 w-full items-center  cursor-pointer text-secondary"
                  //   onClick={() => setLagos((prevState) => !prevState)}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="border-mid-grey border-[1.5px] rounded-full  mr-10 fill-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                    />
                  </svg>
                  Rent for
                  <span className="font-semibold m-0 pl-1">N20,000/month</span>
                </span>{" "}
                <div className="modifications">
                  <label htmlFor="quntity"> Quantity</label>
                  <div className="quantity-dropdown w-48 flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-md overflow-y-scroll">
                    <span className="option w-full text-center">1</span>
                    <span className="option w-full text-center">2</span>
                    <span className="option w-full text-center">3</span>
                    <span className="option w-full text-center">4</span>
                    <span className="option w-full text-center">5</span>
                    <span className="option w-full text-center">6</span>
                    <span className="option w-full text-center">7</span>
                    <span className="option w-full text-center">8</span>
                    <span className="option w-full text-center">9</span>
                    <span className="option w-full text-center">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairs;
