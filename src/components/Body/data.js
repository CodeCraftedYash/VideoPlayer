import image from '../../assets/thumbnail.jpg'
import ramImg from '../../assets/shriRamChandra.jpg'
import ramVid from '../../assets/shriRamChandra.mp4'
import vid from '../../assets/shortStory.mp4'
import sonioImg from '../../assets/sonio.jpg'
import sonioVid from '../../assets/sonio.mp4'
import jhoomImg from '../../assets/jhoom.jpg'
import jhoomVid from '../../assets/jhoom.mp4'
const random = () => ( Math.floor( Math.random()*1000 +1 ) )
export const data = [
    {thumbnail:image,title:"First Video",likes:random(),time:random(),id:1,src:vid},

    {thumbnail:ramImg,title:"Second Video",likes:random(),time:random(),id:2,src:ramVid},

    {thumbnail:jhoomImg,title:"Third Video",likes:random(),time:random(),id:3,src:jhoomVid},
    
    {thumbnail:sonioImg,title:"Fourth Video",likes:random(),time:random(),id:4,src:sonioVid},

  


]

