import { BsFillEnvelopeAtFill } from "react-icons/bs";

function Disount() {
  return (
    <div className="flex w-full h-96 mb-4">
      <div className="discount p-0 w-2/5 h-96">
        <div className="flex flex-col justify-center items-center w-full h-full bg-sky-500/50">
          <h1 className="text-3xl text-white p-0 pb-4">We have a discount</h1>
          <p className="text-2l text-white p-0 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            aperiam, recusandae rerum provident officiis, quae sunt inventore
            quod velit suscipit omnis, blanditiis ab explicabo et cupiditate
            numquam ea laudantium repellendus.
          </p>
        </div>
      </div>
      <section className=" w-3/5 h-96 flex flex-col justify-center items-center border-t-2  border-b-2 border-sky-500 pl-14">
        <h2 className="text-sky-500 font-semibold text-2xl">Contact Us</h2>
        <div className="flex flex-col justify-center items-start w-full p-5">
          <div className="flex gap-3 justify-center items-start w-full">
            <BsFillEnvelopeAtFill className=" -ml-16 w-8 h-8 p-0 object-cover text-sky-500 cart_icon" />
            <form className="p-0 flex flex-col justify-start items-start gap-2 pb-2 w-full">
              <input
                type="text"
                placeholder="Your mail"
                className=" border-2 border-sky-500 rounded-md p-2 w-full"
              />
              <textarea
                className="border-2 border-sky-500 rounded-md p-2 w-full"
                placeholder="Message"
              />
              <input
                type="submit"
                value="Send"
                className="cursor-pointer bg-sky-500 text-lg text-white font-semibold p-2 rounded-md w-28"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Disount;
