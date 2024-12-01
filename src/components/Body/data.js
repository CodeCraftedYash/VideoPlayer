import image from '../../assets/thumbnail.jpg'
import ramImg from '../../assets/shriRamChandra.jpg'
import ramVid from '../../assets/shriRamChandra.mp4'
import vid from '../../assets/shortStory.mp4'
const random = () => ( Math.floor( Math.random()*1000 +1 ) )
export const data = [
    {thumbnail:image,title:"First Video",likes:random(),time:random(),id:1,src:vid},

    {thumbnail:ramImg,title:"Second Video",likes:random(),time:random(),id:2,src:ramVid},

    {thumbnail:image,title:"Third Video",likes:random(),time:random(),id:3,src:vid},
    
    {thumbnail:image,title:"Fourth Video",likes:random(),time:random(),id:4,src:vid},

]

