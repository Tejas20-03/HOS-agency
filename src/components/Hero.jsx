import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <div className="max-w-4xl mx-auto px-6 pb-32 flex flex-col">
        <div className="flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit cursor-pointer hover:shadow-lg shadow-md transition group">
          <div className="w-2 h-2 border bg-yellow-400 rounded-full border-yellow-600"></div>
          <span className="text-yellow-800 font-medium">
            Get your First Website
          </span>
          <FontAwesomeIcon
            className="text-yellow-600 group-hover:translate-x-1 transition duration-300"
            icon={faArrowRight}
          />
        </div>

        <h1>Crafting Scalable Web Solutions</h1>
        <p>We Expertise in creating and delivering on time web solutions</p>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
