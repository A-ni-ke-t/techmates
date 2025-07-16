import video1 from "../assets/HeroVideo.mp4";
import video2 from "../assets/HeroVideo2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
        Building
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          smarter software for you!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your vision and bring your digital ideas to life with our expert
        software solutions. From design to deployment, we make your innovation a
        reality — start building with us today!
      </p>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          mutedplaysInline
          controls={false}
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
