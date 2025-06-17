import React from "react"
import Tour from "./Tour"

export default function Tours ({tour, handleDelete}){

    return(
        <section>
            <div className="title">
                <h1>Our Tours</h1>
            </div>
            <div>
            {tour.map((tour)=>{
                return(
                <Tour tour={tour} key={tour.id} handleDelete={handleDelete}/>
            )})}
            </div>
        </section>
    )
}