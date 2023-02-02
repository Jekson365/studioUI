import React from 'react'
import { Title } from '../components/Title'

export const ThirdRow = () => {
    const content = [
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e2ded3daac2e14977780_joystick-blue-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e4072a3c82665e55f2c7_blue-ball-3d-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e4182a3c8242dc55f310_website-design-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e424b7651533d26bb9e6_waves-background-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e42dc01358defd3aae60_app-store-logo-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e44b013e6aa3e9470fb0_monster-3d-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e4584443c4657b6f7592_building-blocks-p-800.jpg",
        },
        {
            img: "https://assets.website-files.com/6364e2710bb372fbb357f912/6364e463eb8de501b4ca77f4_abstract-figure-p-800.jpg",
        },
    ]
    return (
        <>
            <Title />

            <div className="container-fluid">
                <div className="grid-container">
                    {content.map((each) => {
                        const { img } = each
                        return (
                            <>
                                <div className="col-md-3 w-100"
                                    style={{ "height": "20rem", 'backgroundImage': `url('${img}')` }}
                                >
                                    <div className="overlay"></div>
                                    <div className="arrow-1 ar"></div>
                                    <div className="arrow-2 ar"></div>
                                    <div className="arrow-3 ar"></div>
                                    <div className="arrow-4 ar"></div>
                                    <h5>hello world</h5>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <p className="p text-center m-5 text-white">See All Projects </p>
        </>
    )
}
