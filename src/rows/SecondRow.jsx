import React from 'react'

export const SecondRow = () => {
    const skills = [
        {
            img: "https://assets.website-files.com/634d6064d1c6401d462f6757/636cc83e58f7603323ad6098_code-icon.svg",
            name: "UX Reasearch",
            icon:"https://assets.website-files.com/634d6064d1c6401d462f6757/635ba518094146ff4802d7b1_blue-arrow.svg",
        },
        {
            img: "https://assets.website-files.com/634d6064d1c6401d462f6757/636cc83ea62e06890baa590c_design-icon.svg",
            name: "Design",
            icon:"https://assets.website-files.com/634d6064d1c6401d462f6757/635ba5194ef05a41047d2efc_purple-arrow.svg"
        },
        {
            img: "https://assets.website-files.com/634d6064d1c6401d462f6757/636cc83e58f7603323ad6098_code-icon.svg",
            name: "Development",
            icon:"https://assets.website-files.com/634d6064d1c6401d462f6757/635ba518094146ff4802d7b1_blue-arrow.svg",
        },
        {
            img: "https://assets.website-files.com/634d6064d1c6401d462f6757/636cc83fca23fde186e9871d_message-icon.svg",
            icon:"https://assets.website-files.com/634d6064d1c6401d462f6757/635ba5194ef05a41047d2efc_purple-arrow.svg",
            name: "Support",
        }
    ]
    return (
        <>
            <section
            className="container d-flex flex-column align-items-center justify-content-center" 
            style={{ "minHeight": "100vh",'maxWidth':"1250px"}}>
                <div className="upperRow">
                    <p className="p s">Service</p>
                    <h1 className='h1'>Discover my unique skillset</h1>
                    <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>
                <div className="gap-between"></div>
                <div className="container-fluid ">
                    <div className="row">
                        {skills.map((single) => {
                            const {name,img,icon}= single
                            return (
                                <>

                                    <div className="col-md-3 p-3 position-relative">
                                        <img 
                                        className='position-absolute saxxz'
                                        src={icon}/>
                                        <img src={img}/>
                                        <h3 className='h3 text-white mt-3'>{name}</h3>
                                        <p className="p ca">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
