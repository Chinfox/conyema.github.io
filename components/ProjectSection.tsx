import { ProjectCard } from '@/components';
import SiteData from '@/data';
import { json } from 'node:stream/consumers';

// const projects = [
//   {
//     title: 'Project 1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
//     imageUrl: '/next.svg',
//     liveLink: '#',
//     repoLink: '#'
//   },
//   {
//     title: 'Project 2',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
//     imageUrl: '/next.svg',
//     liveLink: '#',
//     repoLink: '#'
//   },
//   // Add more projects as needed
// ];

const projects = new SiteData().projects



const ProjectSection = () => {

  return (
    <section id='projects' className="bg-gray-100 text-teal-950 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
