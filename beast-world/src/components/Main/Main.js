import React from 'react'
import "./Main.css"
import HornedBeast from '../HornedBeast/hornedbeast'


export default function Main() {
  return (
    <main>
    <div className='hornedBeast-main'>
        <HornedBeast tittle={"Chort"} imgUrl={"https://en.wikipedia.org/wiki/File:Das_ist_mein_lieber_Sohn.jpg"} description={"Caricature of Napoleon with a Chort"} keyword={"Chort"} horns={2}/>
        <HornedBeast tittle={"Leshy"} imgUrl={"https://www.amazon.co.uk/Leshy-gaurdian-forest-Piyush-https://m.media-amazon.com/images/I/61ocrAyQRuL._SL1024_.jpg-ebook/dp/B0BW66L711"} description={"Leshy in the Forest"} keyword={"Leshy"} horns={2}/>
        <HornedBeast tittle={"Indrik"} imgUrl={"https://64.media.tumblr.com/0280edf123dca8ecfb10b9823564652b/tumblr_pu9kcqlqv91vw5i2lo1_500.jpg"} description={"Angry Indrik runnin on soldier"} keyword={"Indrik"} horns={1}/>
    </div>
    </main>
  )
}

// const beastArr = [{
//   "_id": 1,
//   "image_url": "https://en.wikipedia.org/wiki/File:Das_ist_mein_lieber_Sohn.jpg",
//   "tittle": "Chort",
//   "description": "Caricature of Napoleon with a Chort",
//   "keyword": "Chort",
//   "horns": 2,
// },
// {
//   "_id": 2,
//   "image_url": "https://www.amazon.co.uk/Leshy-gaurdian-forest-Piyush-https://m.media-amazon.com/images/I/61ocrAyQRuL._SL1024_.jpg-ebook/dp/B0BW66L711",
//   "tittle": "Leshy",
//   "description": "Leshy in the Forest",
//   "keyword": "Leshy",
//   "horns": 2,
// },
// {
//   "_id": 3,
//   "image_url": "https://64.media.tumblr.com/0280edf123dca8ecfb10b9823564652b/tumblr_pu9kcqlqv91vw5i2lo1_500.jpg",
//   "tittle": "Indrik",
//   "description": "Angry Indrik runnin on soldier",
//   "keyword": "Indrik",
//   "horns": 1,
// }]

// export default function Main() {
//   return (
//     <main>
//     <div className='hornedBeast-main'>
//        {
//         beastArr.forEach((item, index)=>{
//           console.log(item);
//           return <HornedBeast title={item.tittle} image_url={item.image_url} keyword={item.keyword} description={item.description}/>
//         })
//        }
//     </div>
//     </main>
//   )
// }


