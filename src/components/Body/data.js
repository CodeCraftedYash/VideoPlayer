import image from '../../assets/thumbnail.jpg'
const random = () => ( Math.floor( Math.random()*1000 +1 ) )
export const data = [
    {thumbnail:image,title:"First Video",likes:random(),time:random(),id:1},

    {thumbnail:image,title:"Second Video",likes:random(),time:random(),id:2},

    {thumbnail:image,title:"Third Video",likes:random(),time:random(),id:3},
    
    {thumbnail:image,title:"Fourth Video",likes:random(),time:random(),id:4},

]

