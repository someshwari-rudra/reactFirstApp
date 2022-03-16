import React from 'react'

const Navbar = ({ filterItem, menuList}) => {
  return (
    <>
        <div className="navbar">
          <div className="btn_group">
          {
            menuList.map((currEle)=>{
              return (  
                <button className="btn_group_list" onClick={()=>{filterItem(currEle)}} >{currEle}</button>
              )

            })
          }
          </div>
        </div>
    </>
  )
}

export default Navbar