import Image from 'next/image';
import { SocialIcons } from '@/components';

const HeroSection = () => {
  return (
    <section id='about' className="section bg-gray-950 text-white">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex flex-col gap-y-6 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
            Chinedum Onyema
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 text-center">
            I am a full-stack developer with a passion 
            for data science and engineering, passionate about building 
            amazing web experiences and robust, data-driven 
            applications.
          </p>
          
          {/* <a href="#about" className="btn-light max-w-fit">Learn More</a> */}

          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
