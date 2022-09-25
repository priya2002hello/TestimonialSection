import Testimonycontent from "./Testimony-content";

//Testimony react component
export default function Testimony() {
  return (
    <div className="Testimony">
      <section className="testimony-area ">
        {/* title of testimonial section */}
        <div className="sec-title text-center font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
          Our testimonial section
          <h6 className="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
            What client say about us!
          </h6>
        </div>

        {/* Testimonial main section  */}
        <Testimonycontent />
      </section>
    </div>
  );
}
