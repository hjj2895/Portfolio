import React from 'react'
import {
    SiBitbucket,
    SiGithub,
    SiReact,
    SiTailwindcss,
    SiRuby,
    SiJavascript,
    SiTypescript,
    SiRubyonrails,
    SiJest,
    SiHtml5,
    SiCss3,
} from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

const Skills = () => {

    return (
        <section className='h-[790px] w-full bg-custom-pink text-center overflow-y-hidden' id="skills" >
            <div className='p-24 pb-7 ml-0 lg:ml-[265px] -mt-[50px] lg:-mt-0'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-5xl'>Skills</h1>
                    <p className='text-graySlate italic'>Languages, Frameworks, and Tools</p>
                </div>
                <div className='py-[40px] text-[70px] grid grid-cols-3 md:grid md:grid-cols-4 gap-x-[100px] gap-12 ml-0 md:ml-[30px] xl:ml-[70px] ml-[-70px] -mt-2 sm:mt-0'>
                    <div className='flex flex-col mx-auto'>
                        <SiHtml5 color='F06529' />
                        <h4 className='text-[18px] text-white text-opacity-80'>HTML</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiCss3 color='264de4' />
                        <h4 className='text-[18px] text-white text-opacity-80'>CSS</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiJavascript color='F0DB4F' />
                        <h4 className='text-[18px] text-white text-opacity-80'>JavaScript</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiReact color='61DBFB' />
                        <h4 className='text-[18px] text-white text-opacity-80'>React</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiRuby color='A91401' />
                        <h4 className='text-[18px] text-white text-opacity-80'>Ruby</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiJest color='C63D14' />
                        <h4 className='text-[18px] text-white text-opacity-80'>Jest</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiRubyonrails color='CC0000' />
                        <h4 className='text-[18px] text-white text-opacity-80'>Rails</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <BiLogoPostgresql color='336791' className=''/>
                        <h4 className='text-[18px] text-white text-opacity-80 -ml-[10px] sm:-ml-0'>PostgreSQL</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiTailwindcss color='06b6d4' />
                        <h4 className='text-[18px] text-white text-opacity-80 -ml-[7px] sm:-ml-0'>TailwindCSS</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiTypescript color='007acc' />
                        <h4 className='text-[18px] text-white text-opacity-80'>TypeScript</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiBitbucket color='264de4' />
                        <h4 className='text-[18px] text-white text-opacity-80'>BitBucket</h4>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <SiGithub color='2b3137' />
                        <h4 className='text-[18px] text-white text-opacity-80'>Github</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills