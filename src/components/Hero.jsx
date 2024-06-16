import { faArrowRight, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-32 flex flex-col pt-6 sm:items-center sm:text-center sm:pt-12">
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

      <div className="sm:flex hidden gap-8 my-6">
        <div className="flex justify-center gap-2 items-center text-gray-500">
          <FontAwesomeIcon className="text-sm" icon={faFileCode} />
          <p>sdsf</p>
        </div>
        <div className="flex justify-center gap-2 items-center text-gray-500">
          <FontAwesomeIcon className="text-sm" icon={faFileCode} />
          <p>sdsf</p>
        </div>
        <div className="flex justify-center gap-2 items-center text-gray-500">
          <FontAwesomeIcon className="text-sm" icon={faFileCode} />
          <p>sdsf</p>
        </div>
      </div>

      <h1 className="text-4xl text-gray-800 font-semibold leading-snug mt-4 sm:text-7xl sm:leading-normal">
        Crafting Scalable Web Solutions
      </h1>
      <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
        We Expertise in creating and delivering on time web solutions
      </p>
      <div className="mt-12 flex gap-4 flex-col sm:flex-row">
        <button className="px-8 py-4 font-semibold rounded-lg bg-[#3638f5] text-white shadow-sm hover:bg-opacity-90">
          Get a Quote
        </button>
        <button className="px-8 py-4 font-semibold rounded-lg border border-gray-400 hover:border-gray-800">
          Learn more
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
