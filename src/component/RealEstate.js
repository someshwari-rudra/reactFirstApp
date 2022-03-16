import React from 'react'
import Menu from './MenuApi'
import Card from './Card'
import Navbar from './NavBar'
const RealEstate = () => {
  
  const UpdatedList = [...new Set(Menu.map((CurrEle)=>{
      return CurrEle.category;
  })
  ),
  "All"
]


  const filterItem = (category)=>{
    if(category === "All"){
      setMenuData(Menu)
      return
    }
    const updatedList = Menu.filter((currEle)=>{
      return currEle.category===category
    })
    setMenuData(updatedList)
  }

  const [menuData,setMenuData]= React.useState(Menu)
  const [menuList, setMenulist]=React.useState(UpdatedList)



  return (
    <>

      <Navbar filterItem={filterItem} menuList={menuList} />

      <Card MenuData={menuData} />
    </>
  )
}

export default RealEstate