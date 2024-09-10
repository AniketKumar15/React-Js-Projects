import React from 'react'
import person from '../assets/avtar.jpg'
import Accordion from './Accordion'

const About = ({mode}) => {
  return (
    <div className='container mx-auto'>
      <div>
        <h1 className={`text-center ${mode ? 'text-white' : 'text-black'}`}>
          <i className="fa-regular fa-circle-user"></i> About Me</h1>
        <img src={person} className='h-40 rounded-full mx-auto my-7'/>
      </div>

      <div className='px-10'>
        <Accordion title="Who I'm ?" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam perspiciatis laborum expedita provident tenetur magni enim ex. Magnam, cum nisi laudantium libero nesciunt iste cumque natus quas eos ad." mode={mode}/>

        <Accordion title="What are my hobbies?" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam perspiciatis laborum expedita provident tenetur magni enim ex. Magnam, cum nisi laudantium libero nesciunt iste cumque natus quas eos ad." mode={mode}/>

        <Accordion title="What am I passionate about?" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam perspiciatis laborum expedita provident tenetur magni enim ex. Magnam, cum nisi laudantium libero nesciunt iste cumque natus quas eos ad." mode={mode}/>

        <Accordion title="What is the greatest accomplishment of my life?" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam perspiciatis laborum expedita provident tenetur magni enim ex. Magnam, cum nisi laudantium libero nesciunt iste cumque natus quas eos ad." mode={mode}/>
      </div>
    </div>
  )
}

export default About