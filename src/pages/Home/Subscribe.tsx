import { BsFillEnvelopeAtFill } from "react-icons/bs";

function Subscribe() {
  return (
    <div className="flex w-full h-96 mb-4">
      <div className="discount p-0 w-4/5 h-96">
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
      <section className="w-full h-96 flex justify-center items-center border-t-2  border-b-2 border-sky-500 p-0">
        <div className="flex flex-col justify-center items-start">
          <form className="p-0 flex justify-start items-start gap-2 pb-2">
            <BsFillEnvelopeAtFill className=" w-8 h-8 p-0 object-cover text-sky-500 cart_icon" />
            <input
              type="text"
              placeholder="Your mail"
              className=" border-2 border-sky-500 rounded-md p-2"
            />
            <input
              type="submit"
              value="Send"
              className=" bg-sky-500 text-lg text-white font-semibold p-2 rounded-md"
            />
          </form>
          <textarea
            className="border-2 border-sky-500 rounded-md p-2 w-full"
            placeholder="Message"
          />
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
