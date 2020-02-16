import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ApartmentCard from "../components/ApartmentCard"
import ApartmentButtonGroup from "../components/ApartmentButtonGroup"
import ApartmentCardGroup from "../components/ApartmentCardGroup"

//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin
const apartman1 = {
  title: "Flora Chiado Apartments",
  longDesc: `Just 5 minutes' drive from the Las Vegas Strip, this 100% nonsmoking hotel offers a free shuttle service to the adjacent McCarran International Airport and the Las Vegas Strip. It features an outdoor pool and free WiFi.

   The contemporary guest rooms at Best Western McCarran Inn are equipped with flat-screen cable TV. A coffee maker and a work desk with ergonomic chair are provided.
   
   A full hot breakfast is served every morning at this Las Vegas hotel.
   
   Laundry facilities are available at the hotel. An exercise room is also available onsite.
   
   The Thomas and Mac Center at UNLV is located across from the McCarran Best Western Inn. The Las Vegas Convention Center is 10 minutes' drive away.
   
   We speak your language!
   
   Best Western McCarran Inn has been welcoming Booking.com guests since Feb 2, 2010`,
  price: "450 $",
  age: "1980",
  city: "Las Vegas",
  country: "USA",
  owner: "Tommy Lee Jones",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/139/139249589.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/139/139132076.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/139/139251406.jpg",
}
const apartman2 = {
  title: "Hotel Galaxy",
  longDesc: `Located 10 minutes’ drive from McCarran International Airport and less than 1 mi from Interstate 15, Hotel Galaxy offers guest rooms with free WiFi. A lush blue outdoor pool is offered to guests and a weekend breakfast is provided.

    Guest rooms at Hotel Galaxy are equipped with a cable TV, a microwave and a refrigerator.
    
    A 24-hour front desk greets guests of this hotel. Free guest parking is available.
    
    The Las Vegas Strip is less than 5 minutes’ drive from Hotel Galaxy. The Bali Hai Golf Club is 1.9 mi away from the hotel.
    
    We speak your language!
    
    Hotel Galaxy has been welcoming Booking.com guests since Jan 11, 2012`,
  price: "500 $",
  age: "1990",
  city: "New York",
  country: "USA",
  owner: "Brad Pitt",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/697/69734924.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/697/69734935.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/697/69734936.jpg",
}
const apartman3 = {
  title: "The Mirage",
  longDesc: `A tropical refuge in the center of Las Vegas, this elegant resort features a unique dolphin and wild animal habitat. It features large pools, a full-service casino, and a spa.

 At The Mirage, guest rooms include modern furnishings with a 42-inch flat-screen cable TV.
 
 Guests at The Mirage Las Vegas can find a large variety of dining options, including classic buffet-style dining at Cravings, fine cuisine at Tom Colicchio Heritage Steak House and STACK Restaurant. Guests can enjoy casual meals at LVB Burgers & Bar, or Pantry, a 24-hour restaurant. A number of exciting nightclubs, bars and lounges are also on site.
 
 The Beatles Love by Cirque du Soleil and 1 Oak nightclub are at The Mirage. The hotel features a replica lava-flowing volcano.
 
 The Mirage is located on the Las Vegas Strip, 6.4 km from McCarran International Airport.
 
 Las Vegas Strip is a great choice for travelers interested in shopping, nightlife and entertainment.
 
 This is our guests' favorite part of Las Vegas, according to independent reviews.
 
 We speak your language!
 
 The Mirage has been welcoming Booking.com guests since Dec 19, 2009`,
  price: "350 $",
  age: "1986",
  city: "Las Vegas",
  country: "USA",
  owner: "Tom Cruise",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/193/193379550.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/193/193379603.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/193/193379767.jpg",
}
const apartman4 = {
  title: "Trump International Hotel Las Vegas",
  longDesc: `Located in Las Vegas, this all-suite hotel offers luxury spa services, an outdoor pool and suites with kitchenette facilities and free Wi-Fi. The hotel is adjacent to the Fashion Show Mall.

   Every suite at Trump International Hotel Las Vegas is furnished with an iPod docking station and seating area.
   
   Las Vegas Trump International Hotel features an on-site spa with 9 treatment rooms and a full-service hair and nail salon. Guests can also use the state-of-the-art gym.
   
   Trump Hotel’s signature restaurant, DJT, offers casual American cuisine. H2(eau) also offers casual American favorites in a vibrant, poolside atmosphere. Private gourmet meals are available through the hotel’s convenient in-suite dining.
   
   Las Vegas Boulevard is within a 5-minute walk from the hotel. Trump International Hotel has free shuttle services that run to the shopping center and casinos.
   
   Las Vegas Strip is a great choice for travelers interested in shopping, nightlife and entertainment.
   
   We speak your language!
   
   Trump International Hotel Las Vegas has been welcoming Booking.com guests since Jul 18, 2008`,
  price: "410 $",
  age: "1977",
  city: "Las Vegas",
  country: "USA",
  owner: "Donald Trump",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/188/188489297.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/188/188491576.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/188/188490387.jpg",
}

const Index3 = () => (
  <Layout activePage="./">
    <ApartmentCard apartman={apartman1} />
    <ApartmentCard apartman={apartman2} />
    <ApartmentCard apartman={apartman3} />
    <ApartmentCard apartman={apartman4} />

    <ApartmentButtonGroup />
    <ApartmentCardGroup />
  </Layout>
)

export default Index3
