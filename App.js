import ReactDOM from 'react-dom/client';

const Title = () => (
    <img 
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
     />
)

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About Us  </li>
                    <li> Contact </li>
                    <li> Cart </li> 
                </ul>
            </div>
        </div>
    )
}

const restaurants = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "56497",
          "name": "Maravanthe",
          "uuid": "d7adcf92-5114-47e0-bf33-d2ba565e69f6",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "v06l1tgc4eay4e43wwxu",
          "cuisines": [
            "Seafood"
          ],
          "tags": [
            
          ],
          "costForTwo": 80000,
          "costForTwoString": "₹800 FOR TWO",
          "deliveryTime": 43,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "maravanthe-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "322/1 first floor C.M.H Road, Indiranagar",
          "locality": "CMH Road",
          "parentId": 7368,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5702773~p=1~eid=00000185-9fd6-6b0b-25a2-2efe00af0107",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "56497",
            "deliveryTime": 43,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "3241",
          "name": "Meghana Foods",
          "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
          "city": "1",
          "area": "Ashok Nagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 35,
          "slaString": "25-35 MINS",
          "lastMileTravel": 2.4000000953674316,
          "slugs": {
            "restaurant": "meghana-foods-central-bangalore",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
          "locality": "Residency Road",
          "parentId": 635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.4 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "3241",
            "deliveryTime": 30,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 35,
            "lastMileTravel": 2.4000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "3369",
          "name": "Truffles",
          "uuid": "992d9ef3-bef1-4d1a-8a96-3ced9e363d43",
          "city": "1",
          "area": "St Marks Road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "2c882d39ca1bbee94303787977a4dc09",
          "cuisines": [
            "American",
            "Desserts",
            "Continental",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 45000,
          "costForTwoString": "₹450 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 0.8999999761581421,
          "slugs": {
            "restaurant": "truffles-ice-spice-central-bangalore",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "22, St. Marks Road, Bangalore",
          "locality": "Ashok Nagar",
          "parentId": 218065,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5693958~p=4~eid=00000185-9fd6-6b0b-25a2-2eff00af0439",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "3369",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 0.8999999761581421,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "34301",
          "name": "Sri Udupi Park (100ft Road)",
          "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chaat",
            "Beverages",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 45,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 6,
          "slugs": {
            "restaurant": "sri-udupi-park-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
          "locality": "Defence Colony",
          "parentId": 194697,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "34301",
            "deliveryTime": 45,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 6,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "604781",
          "name": "Goodness To Go",
          "uuid": "c2c220c8-20a3-4c5c-b751-b814e282e28d",
          "city": "1",
          "area": "Ashok Nagar",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "se32x0tesqd1xg5prv8i",
          "cuisines": [
            "European",
            "Italian",
            "American",
            "Pastas",
            "Salads",
            "Juices",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "goodness-to-go-whitefield-central-bangalore",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Smoke House Deli, Toucan Plaza,No. 52& 53, Lavelle Road, Bengaluru,560001, Shanthinagara, B.M.M.P East, Karnataka-560001",
          "locality": "Lavelle Road",
          "parentId": 12021,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5698859~p=7~eid=00000185-9fd6-6b0b-25a2-2f0000af0720",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "604781",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
]

const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",  ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                    return  <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 