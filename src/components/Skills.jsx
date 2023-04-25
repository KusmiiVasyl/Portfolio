import {skills} from "../data/skills-data";

export const Skills = () => {
  return (
    <section id='skills' className='bg-cyan-950 py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:items-start lg:text-left'>
          <h2 className='text-cyan-200 text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
            My skills
          </h2>
        </div>
        <hr className='mb-8 opacity-5'/>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
          {skills.map((skill, index)=> {
            return (
              <div className='flex flex-row ml-10 pb-4 lg:text-2xl' key={index}>
                <img src={skill.image} alt=""/>
                <p className='text-cyan-200 ml-2'>
                  {skill.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}