import React from 'react'
import "./SearchResult.css"

const SearchResult = ({handleRemoveSearch}) => {

  return (

    <div className='Search_cont' onMouseLeave={handleRemoveSearch}>


        <div>
                <h2>Trending Searches</h2>

                <ul className="lists">

                    <li >Study table</li>
                    
                    <li >sofa cum bed</li>
                    <li >bed</li>
                    <li >chair</li>
                    <li >sofa</li>
                    <li>Tv unit</li>
                    <li >table</li>
                   
                    <li>shoe rack</li>
                    
                    <li>Dinning table</li>
                    <li >office chair</li>
                </ul>

            </div>

            <div>

                <h2>Most Searched</h2>

                <div>
                    
                    <div className="popping">

                        <div>
                            <img width="70px" alt='img' height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/6746_Center_Tables.jpg'/>
                            <h5>Centre Tables</h5>
                        </div>

                        <div>
                            <img width="70px" alt='img' height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_7_3_Queen_Size_Beds_27.jpg'/>
                            <h5>Queen Size Beds</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/4_Door_Wardrobes.jpg'/>
                            <h5>4 Door Wardrobes</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/3_Door_Wardrobes.jpg'/>
                            <h5>3 Door Wardrobes</h5>
                        </div>
            
                    </div>
                </div>

                <div>
                    
                    <div className="popping" >

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/26082019_Metal_Wall_Art.jpg'/>
                            <h5>Metal Wall Art</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/09092019_Wall_Clock.jpg'/>
                            <h5>Decorative Wall Clocks</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/4004.jpg'/>
                            <h5>Hanging Lights</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/Wall_Light.jpg'/>
                            <h5>Wall Lamps</h5>
                        </div>
            
                    </div>
                </div>

                <div>
                   
                    <div className="popping">

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/22082019_Cushion_Covers.jpg'/>
                            <h5>Cushion Covers</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/6645.jpg'/>
                            <h5>Book Ends</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Benches.jpg'/>
                            <h5>Benches</h5>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/23082019_Table_Clocks.jpg'/>
                            <h5>Table Clocks</h5>
                        </div>
            
                    </div>
                </div>
                
            </div>


    </div>
  )
}

export default SearchResult