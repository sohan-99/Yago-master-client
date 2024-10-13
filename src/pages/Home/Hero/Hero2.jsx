import bgImg from '../../../assets/home/banner-2.jpg';

const Hero2 = () => {
  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60">
        <div>
          <div className="space-y-4">
            <p className="md:text-4xl text-2xl">We Provide</p>
            <h1 className="md:text-7xl text-4xl font-bold">Yoga Courses From Home</h1>
            <div className="md:w-1/2 font-semibold">
              <p>Discover the art of yoga from the comfort of your home. Our online yoga courses are designed to help you improve flexibility, reduce stress, and enhance overall well-being. Join our community and start your journey to a healthier lifestyle today.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase">Join Today</button>
            <button>View Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
