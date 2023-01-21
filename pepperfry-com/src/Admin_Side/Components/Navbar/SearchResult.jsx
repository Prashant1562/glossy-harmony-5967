import React from 'react'
import "./SearchResult.css"

const SearchResult = ({handleRemoveSearch}) => {

  return (

    <div className='Search_cont' onMouseLeave={handleRemoveSearch}>


        <div className='trend_box'>
                <h3 className='trending'>Trending Searches</h3>

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

                <h2 className='trending'>Most Searched</h2>

                <div>
                    
                    <div className="popping">

                        <div>
                            <img width="70px" alt='img' height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/6746_Center_Tables.jpg'/>
                            <h6>Centre Tables</h6>
                        </div>

                        <div>
                            <img width="70px" alt='img' height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_7_3_Queen_Size_Beds_27.jpg'/>
                            <h6>Queen Size Beds</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/4_Door_Wardrobes.jpg'/>
                            <h6>4 Door Wardrobes</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/3_Door_Wardrobes.jpg'/>
                            <h6>3 Door Wardrobes</h6>
                        </div>
            
                    </div>
                </div>

                <div>
                    
                    <div className="popping" >

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/26082019_Metal_Wall_Art.jpg'/>
                            <h6>Metal Wall Art</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/09092019_Wall_Clock.jpg'/>
                            <h6>Decorative Wall Clocks</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/4004.jpg'/>
                            <h6>Hanging Lights</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/Wall_Light.jpg'/>
                            <h6>Wall Lamps</h6>
                        </div>
            
                    </div>
                </div>

                <div>
                   
                    <div className="popping">

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/22082019_Cushion_Covers.jpg'/>
                            <h6>Cushion Covers</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii1.pepperfry.com/media/wysiwyg/banners/6645.jpg'/>
                            <h6>Book Ends</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Benches.jpg'/>
                            <h6>Benches</h6>
                        </div>

                        <div>
                            <img alt='img' width="70px" height="80px" src='https://ii2.pepperfry.com/media/wysiwyg/banners/23082019_Table_Clocks.jpg'/>
                            <h6>Table Clocks</h6>
                        </div>
            
                    </div>
                </div>
                
            </div>


    </div>
  )
}

export default SearchResult