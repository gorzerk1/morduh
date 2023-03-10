import React, {useState, useRef} from 'react'
import Data from '../../data/MenuListData'

function MenuList() {
    const [foodData, setFoodData] = useState(Data)
    const [selectedListIndex, setSelectedListIndex] = useState(0)
    const selectedData = foodData[selectedListIndex]
    const [selectedButtonId, setSelectedButtonId] = useState(null)

    function foodMenu(){
        return selectedData.map((el)=> (
                <div className='menuList__menu__list--container'>
                    <div>{el.foodPrice}</div>
                    <div className='menu__list--info'>
                        <div>{el.foodName}</div>
                        <div>{el.foodDescription}</div>
                    </div>
                </div>
        ) )
    }
  return (
    <div className='menuList--body'>
        <img className='menuList--background' src="../../../Component5.png"/>

        <div className='menuList--container'>
            
           <div className='menuList--menu'>
            <div className='menuList__menu--buttons'>
                <div id="menuToast" className={selectedButtonId === "menuToast" ? "selected" : ""} onClick={() => {setSelectedListIndex(0),setSelectedButtonId("menuToast")}}>טוסט</div>
                <div id="menuBurger" className={selectedButtonId === "menuBurger" ? "selected" : ""} onClick={() => {setSelectedListIndex(1),setSelectedButtonId("menuBurger")}}>בורגר</div>
                <div id="menuKarih" className={selectedButtonId === "menuKarih" ? "selected" : ""} onClick={() => {setSelectedListIndex(2),setSelectedButtonId("menuKarih")}}>כריך</div>
                <div id="menuSpacial" className={selectedButtonId === "menuSpacial" ? "selected" : ""} onClick={() => {setSelectedListIndex(3),setSelectedButtonId("menuSpacial")}}>ספיישל</div>
                <div id="menuMetuganim" className={selectedButtonId === "menuMetuganim" ? "selected" : ""} onClick={() => {setSelectedListIndex(4),setSelectedButtonId("menuMetuganim")}}>מטוגנים</div>
            </div>
            <div className='menuList__menu--list'>
                {foodMenu()}
            </div>
           </div>

        </div>
        
    </div>
  )
}
export default MenuList


