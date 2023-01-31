import React from 'react'

export const Title = () => {
    return (
        <>
            <div className="small-gap"></div>

            <div className='container text-center'>
                <div className="content text-center d-flex flex-column align-items-ceenter justify-content-center"
                    style={{ "maxWidth": "45rem", 'margin': "0 auto" }}>
                    <h1 className='text-white'>My Lastest Projects</h1>
                    <div className="text-content" style={{"color":"#97a1b6"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </div>
                </div>
            </div>
            <div className="small-gap"></div>
            
        </>
    )
}
