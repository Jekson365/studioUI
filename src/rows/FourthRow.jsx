import React from 'react'

export const FourthRow = () => {
    const arr = [
    {
        ab:"“Vivamus sollicitudin, nulla et tincidunt volutpat, orci erat eleifend erat, in aliquet metus turpis id erat. Vestibulum ligula dui, facilisis non enim ut, convallis condimentum nibh. Mauris feugiat et ante et tristique."
    },
    {
        ab:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
        ab:"“Vivamus sollicitudin, nulla et tincidunt volutpat, orci erat eleifend erat, in aliquet metus turpis id erat. Vestibulum ligula dui, facilisis non enim ut, convallis condimentum nibh. Mauris feugiat et ante et tristique."
    },
    {
        ab:"Proin blandit quis diam a pulvinar. Integer vitae tellus non velit ultricies rutrum vitae non ipsum."
    },
    {
        ab:"orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus arcu, placerat eu ornare sed, tempus ut nulla. Duis nulla turpis, condimentum eu lorem et, eleifend condimentum ante. Proin blandit quis diam a pulvinar. Integer vitae tellus non velit ultricies rutrum vitae non ipsum. Phasellus arcu justo, varius at magna quis, dapibus facilisis mi."
    },
    {
        ab:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
    ]
    return (
        <>
            <div className="container">
                <div className="review">
                    {arr.map((each) => {
                        return (
                            <>
                                <div className="saca bg-danger m-1">
                                    <p className="p">
                                       {each.ab}
                                    </p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
