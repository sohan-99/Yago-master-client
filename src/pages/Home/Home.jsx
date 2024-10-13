import HeroContainer from "./Hero/HeroContainer"
import Gallary from './Gallary/Gallary';
import PopularClasses from './PopularClasses/PopularClasses.jsx'
import PopularTeacher from "./PopularTeacher/PopularTeacher.jsx";
function Home() {
  return (
    <section>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gallary />
        <PopularClasses />
        <PopularTeacher />
      </div>
    </section>
  )
}

export default Home