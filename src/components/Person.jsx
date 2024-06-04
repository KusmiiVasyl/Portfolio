import MyPhoto from "../assets/img/my-foto.jpg";
import resumeFilePath from "..//assets/img/my-resume.pdf";

export const Person = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-cyan-900 lg:bg-cover
    lg:bg-center lg:bg-no-repeat py-24 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-cyan-200 mb-[22px]">Hey, I'm Vasyl 👏</p>
            <h1
              className="text-4xl text-cyan-200 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl
                          lg:leading-[1.2] font-bold md:tracking-[-2px]"
            >
              I'm Full Stack Developer
            </h1>
            <br />
            <p className="text-lg text-cyan-200 mb-[22px]">
              I am a junior full-stack developer
            </p>
            <a
              className="btn btn-md bg-cyan-950 hover:bg-cyan-700 md:btn-lg text-cyan-200 transition-all"
              href={resumeFilePath}
              download="Resume_VasylKusmii.pdf"
            >
              Download Resume
            </a>
          </div>
          <div className="flex mt-8 flex-1 justify-end items-end rounded-lg border-b-4 border-cyan-950/100 ">
            <img src={MyPhoto} className="rounded-lg" alt="Photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
