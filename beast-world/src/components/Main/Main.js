import React from 'react'
import "./Main.css"
import HornedBeast from '../HornedBeast/hornedbeast'
import data from "../..data.json"


export default function Main({openModal}) {
  
  return(
    <main>
      <div className='hornedBeast-main'>
        {data.map(beast, key)=>{
          return(
          <HornedBeast
            wholebeast={beast}
            key={beast._id}
            title={beast.title}
            image={beast.image_ulr}
            description={beast.description}
            openModal={openModal}/>
          )
        }
      )}
        </div>
    </main>
  )
}




