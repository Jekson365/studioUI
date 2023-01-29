import React from 'react'

export const FirstRow = () => {
    return (
        <>
            <div className="container" style={{"height":"100vh"}}>
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-6 content"> 
                        <h1 className='text-white tt'>
                            Crafting outstanding digital products faster
                        </h1>
                        <p className="p desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                        <button className='text-white cnt'>Contact Now</button>
                    </div>
                    <div className="col-md-6 asd">
                        <img 
                        src='https://assets.website-files.com/634d6064d1c6401d462f6757/635be1d8e17e1d2a1a6e5aed_hero-image-p-800.png'/>
                    </div>
                </div>
            </div>
        </>
    )
}
