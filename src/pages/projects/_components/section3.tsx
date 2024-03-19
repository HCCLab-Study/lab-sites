import React from 'react';
import { Project } from '../../../model/projects.type';

// Finished Projects부분
function Section3({ finishedProjects }: { finishedProjects: Project[] }) {
  
  const sectionHeight = `${finishedProjects.length * 100}px`;   // 섹션의 높이를 project 개수에 맞게 동적으로 조절하기 위함

  return (
    <section className='relative w-full	h-[1050px] left-0 right-0 bg-section-gray'>
      <div className='absolute h-[950px] w-[1000px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-roboto text-custom-navy'>
        <div className='absolute h-[50px] w-full border-b-2 border-custom-blue'>
          <h2 className='absolute flex items-center text-3xl font-semibold tracking-widest'>Finished Projects</h2>
        </div>
        <div className={`absolute h-${sectionHeight} w-[1000px] top-[50px] p-5`}>
          <ul className='list-disc list-outside pb-4 text-font-gray'>
          {finishedProjects.map((project, index) => (
              <li key={index}>
                {project.date} {project.description} (<b>{project.organization}</b>)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section3;