import MyWorkPhoto from "..//assets/img/my-work-photo.jpg";
import {Link} from "react-scroll";

export const About = () => {
  return (
    <section id='about' className='selection bg-cyan-950 py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
               src={MyWorkPhoto} alt="Photo"/>
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-cyan-200 text-3xl lg:text-4xl font-medium lg:font-extrabold
                           mb-3 before:content-about relative before:absolute
                           before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Vasyl Kusmii
              </h2>
              <p className='mb-4 text-cyan-200'>
                Junior Full-Stack Developer
              </p>
              <hr className='mb-8 opacity-5'/>
              <p className='mb-8 max-w-xl mx-auto'>
                Hello! I am a young promising full-stack developer  self-confident, result-oriented, with a
                great desire to work and benefit, as well as improve my skills. I have
                mastered HTML, CSS,  JavaScript, React,  Angular very well.
              </p>
            </div>
            <Link to="contact">
              <button
                className='btn btn-md bg-cyan-900 hover:bg-cyan-700 md:btn-lg text-cyan-200 transition-all'>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}