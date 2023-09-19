import React from 'react'
import Header from './Header';
import Welcome from './Welcome';
import Product from './Product';
import './HomePage.css'

function HomePage() {
  return (
    <>
        <div className="home">
            <div className="home_header">
                <Header />
            </div>
            <div className="welcome_page">
                <Welcome />
            </div>
            <div className="items_to_buy">
                <div className="level1">
                    <Product className = "each_individual_product"
                        id = "1000001"
                        title = "Laptop"
                        description = "12.5 to 14-inch screens offer the best balance between usability and portability. Larger screens are fine if you don't travel much and smaller models are great for kids.CPU: Core i5 or Ryzen 5 Screen: 1920 x 1080 IPS, RAM: 8GB, Storage: SSD instead of a hard drive"
                        image = "https://cdn.mos.cms.futurecdn.net/7fhdrdEhVie6e5q4jJHFJS-970-80.jpeg.webp"
                        rating = {5}
                        Price = "245.65"
                    />
                    <Product className = "each_individual_product"
                        id = "1000002"
                        title = "Mobile"
                        description = "With Photographic Styles on iPhone 13, iPhone SE (3rd generation) and later. Choose a preset – Rich Contrast, Vibrant, Warm or Cool – and if you want to, you can fine-tune it even further by adjusting the Tone and Warmth settings."
                        image = "https://cdn1.smartprix.com/rx-iVyp4t2Vm-w420-h420/apple-iphone-14.webp"
                        rating = {3}
                        Price = "175.65"
                    />
                </div>
                <div className="level2">
                <Product className = "each_individual_product"
                        id = "1000003"
                        title = "Handbag"
                        description = "A beautiful blue-coloured handbag. a bag or box of leather, fabric, plastic, or the like, held in the hand or carried by means of a handle or strap, commonly used for holding money, personal grooming items, small purchases, etc"
                        image = "https://i.pinimg.com/originals/1a/60/f0/1a60f089b4d6b28844ddd406b501a055.jpg"
                        rating = {4}
                        Price = "45.78"
                    />
                    <Product className = "each_individual_product"
                        id = "1000004"
                        title = "Camera"
                        description = "The Fujifilm GFX 50S II is the latest addition to the GFX Series of mirrorless digital cameras. Costing a whopping Rs. 3,79,999 for the body only, the latest medium-format digital camera by Fuji comes equipped with a large format sensor and features a five-axis image stabilization mechanism. In addition to the new high-end mirrorless camera, the company has also unveiled the Fujinon GF35-70mm f/4.5-5.6 WR lens"
                        image = "https://x.imastudent.com/content/0004905_sony-cybershot-dsc-rx10-mark-iv-digital-camera.jpeg"
                        rating = {5}
                        Price = "564.32"
                    />
                    <Product className = "each_individual_product"
                        id = "1000005"
                        title = "AirPods Max"
                        description = "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you'll hear every note with a new sense of clarity."
                        image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRE5wTg7q-yXGtSe4j2RJFBpshxd7B2jzYfNTZubbTdu51eHSW-k1NWAB2ickNHz8bOk5fy0W0KMezAPoIBxuNGv-2u8WXxWQ"
                        rating = {5}
                        Price = "67.98"
                    />
                </div>
                <div className="level3">
                <Product className = "each_individual_product"
                        id = "1000006"
                        title = "Smart Watch"
                        description = "Smartwatches let you pursue fitness by tracking your activity in a number of ways. With the inclusion of multiple sports modes, step counting and calorie tracking, you can better manage your daily fitness needs. Look for an option with high IPX resistance to keep your watch protected from dust, splashes and moisture during every workout."
                        image = "https://m.media-amazon.com/images/I/6199ZpjY0GL._SL1284_.jpg"
                        rating = {2}
                        Price = "107.42"
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage