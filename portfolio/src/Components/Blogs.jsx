import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({mode}) => {
  return (
    <div className='container mx-auto py-2 px-2'>
      <h1 className={`text-xl border-l-2 border-orange-500 pl-2 mb-5 font-bold ${mode ? 'text-white' : 'text-black'}`}>Projects</h1>
      <div className='flex gap-3 justify-center items-center flex-wrap py-2 px-3'>
        <BlogCard blogLink={"https://gamerant.com/mike-flanagan-exorcist-reboot-exciting-reveal/"} imgLink={"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/the-exorcist-reagan.jpg?q=70&fit=crop&w=943&h=530&dpr=1"} blogTitle={"Mike Flanagan Revealed Something Exciting About His Exorcist Reboot"} blogDesc={"Mike Flanagan is a beloved horror director known for Netflix series like Midnight Mass, and he said something cool about his reboot of The..."} mode={mode}/>

        <BlogCard blogLink={"https://gamerant.com/call-of-duty-black-ops-6-september-2024-beta-update-patch-notes/"} imgLink={"https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/call-of-duty-black-ops-6-patch-notes-character-shooting-pistol-2x1-composite.jpg?q=49&fit=crop&w=360&h=240&dpr=2"} blogTitle={"Call of Duty: Black Ops 6 Reveals September 8 Beta Patch Notes"} blogDesc={"Treyarch rolls out yet another Call of Duty: Black Ops 6 update just one day before the shooter's open beta is scheduled to end."} mode={mode}/>

        <BlogCard blogLink={"https://gamerant.com/grand-theft-auto-6-heaven-17-temptation-licensening-lowball-offer-claim/"} imgLink={"https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/09/grand-theft-auto-6-logo-next-to-lucia-standing-in-moving-convertible-car-surrounded-by-glowing-neon-musical-notes-2x1-composite.jpg?q=49&fit=crop&w=360&h=240&dpr=2"} blogTitle={"Rockstar Reportedly Tried Lowballing Band for GTA 6 Song"} blogDesc={"Rockstar reportedly tried lowballing an established band for indefinite rights to use one of their songs in Grand Theft Auto 6."} mode={mode}/>
      </div>
      <div className="my-10 text-center">
        <p className={`${mode ? "text-white" : 'text-black'}`}>All the article are use in this section are get from <a href="https://gamerant.com/" target='_blank' className='underline text-blue-600'>Game Rant</a> It is only for education purpose, I don't own any rights.</p>
      </div>
    </div>

  )
}

export default Blogs