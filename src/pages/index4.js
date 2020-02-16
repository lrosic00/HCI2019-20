import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ApartmentCard from "../components/ApartmentCard"
import ApartmentButtonGroup from "../components/ApartmentButtonGroup"
import ApartmentCardGroup from "../components/ApartmentCardGroup"

//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin
const apartman1 = {
  title: "Tahiti Village Resort & Spa",
  longDesc: `This Nevada 4-star resort features Mahana, a full-service spa, shuttle services to the Las Vegas Strip and a lazy river. 17° South Booze & Bites restaurant is on site.

  Every suite at the Tahiti Village Resort and Spa includes a full kitchen or kitchenette. The suites provide a seating and dining area for the guest’s convenience. Select suites feature a spa tub, a washing machine and a balcony or patio.
  
  The Tahiti Village resort features an outdoor pool. Available activities include bracelet making, cookie decorating, sand castle contests and bingo.
  
  The McCarran International Airport is 6.4 km from the Tahiti Village Spa. The University of Nevada is 8 km away. Local restaurants, casinos and shopping are also located near the hotel.
  
  We speak your language!
  
  Tahiti Village Resort & Spa has been welcoming Booking.com guests since Feb 2, 2010`,
  price: "450 $",
  age: "1980",
  city: "Los Angeles",
  country: "USA",
  owner: "LL Cool J",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/956/95624639.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/956/95625100.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/956/95624921.jpg",
}
const apartman2 = {
  title: "Golden Gate Casino Hotel",
  longDesc: `Built in 1906, this historic hotel in downtown Las Vegas features vintage décor. It is located right on the Fremont Street Experience, which features DJs and live bands and offers 2 restaurants.

 Guest rooms at Golden Gate Casino Hotel are modern and offer flat-screen cable TVs and a radio. A private bathroom with toiletries is also included.
 
 This casino hotel offers a large casino with traditional slot machines such as Monopoly. Table games include blackjack, craps and roulette. Guests can use the pool and fitness center located at The D Las Vegas right across the street.
 
 Guests can enjoy Golden Gate Casino Hotel’s signature shrimp cocktail at the Deli.
 
 T-Mobile Arena is a 20 minute drive from the property. The Mob Museum is a 5 minute walk from Golden Gate Casino Hotel. The Las Vegas Convention Center and Las Vegas Premium Outlets Mall are just minutes away.
 
 We speak your language!
 
 Golden Gate Casino Hotel has been welcoming Booking.com guests since Apr 19, 2009`,
  price: "500 $",
  age: "1990",
  city: "New York",
  country: "USA",
  owner: "Carl Johnson",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/195/19516891.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/195/19516892.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/195/19516909.jpg",
}
const apartman3 = {
  title: "Spacious Apartment in Kings Cross St Pancras",
  longDesc: `In the Camden district of London, close to King's Cross Theatre, Spacious Apartment in Kings Cross St Pancras has free WiFi and a washing machine. Guests staying at this apartment can use a fully equipped kitchen.

  With 2 bedrooms and 2 bathrooms, this apartment features a flat-screen TV.
  
  Emirates Stadium is 2.1 km from the apartment, while Camden Market is 2.1 km from the property. The nearest airport is London City Airport, 16.1 km from Spacious Apartment in Kings Cross St Pancras.
  
  Camden is a great choice for travelers interested in theater, shopping and entertainment.
  
  We speak your language!
  
  Spacious Apartment in Kings Cross St Pancras has been welcoming Booking.com guests since Jan 30, 2020`,
  price: "007 $",
  age: "1986",
  city: "London",
  country: "UK",
  owner: "James Bond",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/243/243561121.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/243/243561099.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/243/243560305.jpg",
}
const apartman4 = {
  title: "Native Monument",
  longDesc: `Company info
 Camden Studios Serviced Apartments offers luxury apartments for short stays in London. If you plan to arrive outside reception working hours, the Front of House Team will send you an email with all the necessary instructions on how to access the property, the Wi-Fi details and any other relevant information.
 
 Property info
 All our Camden studio apartments has been designed to offer comfort and privacy in a stylish environment. Each room is fully equipped with everything you would need for your holiday or business stay. Housekeeping visits our apartment's every 3 nights of your stay. Please be aware that there is not a lift/elevator available.
 
 Neighborhood info
 Camden Town is renowned for it's vibrant nightlife and bustling day markets. It is an area of London thats always changing and constantly has something happening for you to do - whether eating, drinking or shopping! Our location places you a 15 minute walk from the heart of Camden Town with bus stops on our front door to take you directly into the city.`,
  price: "410 $",
  age: "1977",
  city: "London",
  country: "UK",
  owner: "Frank Lampard",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/164/164086898.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/178/178165356.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/178/178165322.jpg",
}

const Index4 = () => (
  <Layout activePage="./">
    <ApartmentCard apartman={apartman1} />
    <ApartmentCard apartman={apartman2} />
    <ApartmentCard apartman={apartman3} />
    <ApartmentCard apartman={apartman4} />

    <ApartmentButtonGroup />
    <ApartmentCardGroup />
  </Layout>
)

export default Index4
