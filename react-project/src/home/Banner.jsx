import React from 'react'
import bookData from "../products.json"

const title = (
     <h2>Search your <span>favorite</span> book</h2>
)
const bannerList=[
    {
      iconName: "icofont-users-alt-4",
      text:"Thousands of Users",  
    },
    {
        iconName: "icofont-notification",
        text:"Thousands of Users",  
    },
    {
        iconName: "icofont-globe",
        text:"Buy your favourite book",  
    }, 
];

const Banner = () => {
  //const [searchInput,setSearchInput]=useState("");
  //const [filteredProducts,setfilteredProducts]=useState("");
  //console.log(bookData);    
  return (
    <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                 {title}
                 <form>
                    <input type="text" name="search" id="search" placeholder="Search your book"/>
                   </form>
            </div>
        </div>
    </div>
    )
}
export default Banner;