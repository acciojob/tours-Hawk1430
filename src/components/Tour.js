import React, { useState } from "react"

export default function Tour ({tour, handleDelete}){
    const [readMore, setReadMore] = useState(false);

    const shortInfo = tour.info.slice(0,200);
    return(
        <div className="single-tour" style={{marginTop:15}}>
            <img src={tour.image}/>

            <div className="tour-info">
                <h2>{tour.name}</h2>
                <h3 className="tour-price">{tour.price}</h3>
            </div>

            <div id={`tour-item-para-${tour.id}`}>
                <p>{readMore? tour.info : shortInfo} </p>
                <button id={`see-more-${tour.id}`} onClick={()=>{setReadMore(!readMore)}}>{readMore?"Show less":"See more"}</button>
            </div>
            <br></br>
            <button id={`delete-btn-${tour.id}`} className="delete-btn" onClick={()=>{handleDelete(tour.id)}}>Remove</button>
            <br>
            </br>
        </div>
    )
}