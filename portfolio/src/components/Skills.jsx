import { Code, Database, Wrench } from 'lucide-react';
import React from 'react';
import { skills } from '../assets/data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50" aria-label="Skills and Expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I love working with
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Frontend */}
          <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Code className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
                <p className="text-gray-600">User Interface & Experience</p>
              </div>
            </div>

            <div className='flex flex-wrap gap-5'>
              {skills.frontend.map((skill,index)=>(
                <div key={index} className='flex flex-col items-center'>
                  <img src={skill.img} alt={skill.name} className='w-14' loading="lazy" />
                  <p className='text-sm mt-2'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Database className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
                <p className="text-gray-600">Server & Database</p>
              </div>
            </div>

            <div className='flex flex-wrap gap-5'>
              {skills.backend.map((skill,index)=>(
                <div key={index} className='flex flex-col items-center'>
                  <img src={skill.img} alt={skill.name} className='w-14' loading="lazy" />
                  <p className='text-sm mt-2'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Wrench className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Tools</h3>
                <p className="text-gray-600">Developer & Design Tools</p>
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-5'>
              {skills.tools.map((skill,index)=>(
                <div key={index} className='flex flex-col items-center'>
                  <img src={skill.img} alt={skill.name} className='w-14' loading="lazy" />
                  <p className='text-sm mt-2'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
