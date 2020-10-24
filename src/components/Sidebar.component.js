import React from 'react'

const Filterbyrating = () => {


    return(
        <div className="border p-4 m-2">
            <p>Filter By Rating</p>
            <div>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
            </div>
            <div>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1"></span>
            </div>
            <div>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
            </div>
            <div>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
            </div>
            <div>
                <span className="fa fa-star mx-1 star-checked"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
                <span className="fa fa-star mx-1"></span>
            </div>
        </div>
    )
}

const Filterbysearch = () => {
    return(
        <div className="px-4 mx-2 my-1">
            <input type="text" className="form-control" placeholder="Search" />
        </div>
    )
}

const Filterbydate = () => {
    return(
        <div className="px-4 mb-2">            
            <input type="date" className="form-control"/>
        </div>
    )
}

const Filterbyversion = () => {

    return(
        <div className="border p-4 m-2">
            <p>Filter By Version</p>

        </div>
    )
}

const Filterbycountry = () => {

    return(
        <div className="border p-4 m-2">
            <p>Filter By Country</p>

        </div>
    )
}


const Sidebar = () => {

    return(
        <div>
            <h4>Side Bar</h4>
            <Filterbysearch />
            <Filterbydate />
            <Filterbyrating />
            <Filterbyversion />
            <Filterbycountry />
        </div>
    )
}

export default Sidebar