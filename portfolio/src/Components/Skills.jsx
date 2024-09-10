import React from 'react'
import Badge from './Badge'

const Skills = ({mode}) => {
  return (
    <div className='container mx-auto py-2 px-2'>
      <h1 className={`text-xl border-l-2 border-orange-500 pl-2 font-bold ${mode ? 'text-white' : 'text-black'}`}>My Skills</h1>
      <div>
        <p className={`text-lg mt-5 text-[20px] mb-2 ${mode ? 'text-white' : 'text-black'}`}>Programming Language</p><hr className={`${mode ? 'border-white' : 'border-black'}`}/>
        <div className='flex flex-wrap gap-x-2'>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"} name={"C language"}/>

          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"} name={"C++ language"}/>

          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"} name={"C# language"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"} name={"Javascript"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"} name={"Typescript"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"} name={"PHP"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"} name={"Java"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"} name={"Ruby"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"} name={"Python"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"} name={"Swift"}/>
        </div>
      </div>

      <div>
        <p className={`text-lg mt-5 text-[20px] mb-2 ${mode ? 'text-white' : 'text-black'}`}>Frontend Development</p><hr className={`${mode ? 'border-white' : 'border-black'}`}/>
        <div className='flex flex-wrap gap-x-2'>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"} name={"HTML"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"} name={"CSS"}/>
          <Badge imgUrl={"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"} name={"Tailwind"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"} name={"Bootstrap"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} name={"React js"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"} name={"Vue js"}/>
        </div>
      </div>

      <div>
        <p className={`text-lg mt-5 text-[20px] mb-2 ${mode ? 'text-white' : 'text-black'}`}>Backend Development</p><hr className={`${mode ? 'border-white' : 'border-black'}`}/>
        <div className='flex flex-wrap gap-x-2'>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"} name={"Node js"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"} name={"Express"}/>
        </div>
      </div>

      <div>
        <p className={`text-lg mt-5 text-[20px] mb-2 ${mode ? 'text-white' : 'text-black'}`}>Database</p><hr className={`${mode ? 'border-white' : 'border-black'}`}/>
        <div className='flex flex-wrap gap-x-2'>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"} name={"Mongo DB"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"} name={"My sql"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"} name={"Oracale"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"} name={"PostgreSql"}/>
        </div>
      </div>

      <div>
        <p className={`text-lg mt-5 text-[20px] mb-2 ${mode ? 'text-white' : 'text-black'}`}>Game Engines</p><hr className={`${mode ? 'border-white' : 'border-black'}`}/>
        <div className='flex flex-wrap gap-x-2'>
          <Badge imgUrl={"https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"} name={"Unity"}/>
          <Badge imgUrl={"https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg"} name={"Unreal"}/>
        </div>
      </div>

    </div>
  )
}

export default Skills