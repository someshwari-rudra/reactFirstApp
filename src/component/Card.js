import React from 'react'
import "./style.css"

const Card = ({MenuData}) => {
  return (
    <>
        <div className="main_container">
        <div className="card_holder">
            {
                MenuData.map((currEle)=>{
                    const {id,image,name,category,description} = currEle
                    return(
                        <>
                        <div className="card" key={id}>
                            <div className="card_header">
                                <img src={image} alt="" />
                            </div>
                            <div className="card_body">
                            <div className="card_title">
                                <h1>{name}</h1>
                                <h2>{category}</h2>
                            </div>
                                <p>{description}</p>
                            </div>
                            <div className="card_footer">
                                <button className='btn'>Book Now</button>
                            </div>
                        </div> 
                        </>
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default Card