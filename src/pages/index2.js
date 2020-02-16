import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ApartmentCard from "../components/ApartmentCard"
import ApartmentButtonGroup from "../components/ApartmentButtonGroup"
import ApartmentCardGroup from "../components/ApartmentCardGroup"

//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin
const apartman1 = {
  title: "The Wink",

  longDesc: `Located just 5 mi from the Ronald Reagan Washington National Airport, this hotel has a modern gym and several dining options. Each room has a tea/coffee maker.

  The Wink features the Brasserie Wink, which serves hot and cold dishes for breakfast. It also has the Bar Wink, where guests can have refreshing drinks and appetizers. For Italian coffee and snacks, guests can visit the Illy Cafe, which has an indoor and outdoor seating area.
  
  The fitness center at The Wink has modern equipment, including treadmills and elliptical equipment.
  
  This Washington, DC hotel is 1.1 mi from the White House and within a 2.5 mi radius of the Newseum and the International Spy Museum.
  
  Northwest is a great choice for travelers interested in cleanliness, culture and city walks.
  
  This is our guests' favorite part of Washington, D.C., according to independent reviews.
  
  We speak your language!
  
  The Wink has been welcoming Booking.com guests since May 9, 2011`,
  price: "911 $",
  age: "1980",
  city: "Washington DC",
  country: "USA",
  owner: "George W. Bush",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/241/241334929.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/241/241334846.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/241/241334837.jpg",
}
const apartman2 = {
  title: "Midtown Hotel",
  longDesc: `Located 0.9 mi from Fenway Park, this downtown Boston hotel is adjacent to Northeastern University. It features an on-site beauty salon and an outdoor swimming pool. All rooms offer a cable TV.

  A work desk and a small dining table are provided in all simply styled rooms at Midtown Hotel. In-room coffee and a clock radio are included.
  
  Hotel Midtown provides an on-site gift shop for guest convenience. Meeting rooms and laundry services are also available.
  
  The Shops at the Prudential Center are 0.7 mi from this hotel. The Boston Museum of Fine Arts is a 5-minute drive away.
  
  Back Bay is a great choice for travelers interested in shopping, architecture and restaurants.
  
  This is our guests' favorite part of Boston, according to independent reviews.
  
  We speak your language!
  
  Midtown Hotel has been welcoming Booking.com guests since Jun 29, 2007`,
  price: "500 $",
  age: "1990",
  city: "Boston",
  country: "USA",
  owner: "Larry Bird",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/940/94079613.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/940/94079578.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/940/94079553.jpg",
}
const apartman3 = {
  title: "Riviere South Beach Hotel",
  longDesc: `Only 4 minutes' walk from beautiful beaches and set in South Beach's Art Deco district, this hotel offers instant access to top attractions and features modern in-room amenities, including flat-screen TVs. WiFi is free to guests.

   Within 6 minutes' drive of the Riviere South Beach Hotel is the Miami Beach Convention Center and the infamous Versace House. The famed restaurants, luxury boutiques and exiting nightclubs of Ocean Drive are also only steps away.
   
   On-site at the Riviere, guests can enjoy relaxing in the cozy outdoor garden area. The hotel also offers limited hour, complimentary transfer service from the Miami International Airport for guests' convenience.
   
   Guests receive private beach access, complete with 2 complimentary beach chairs.
   Daily complimentary continental breakfast is provided.
   
   Guestrooms feature a microwave and small refrigerator. Additional amenities include an en suite safe, private bathroom, and a desk.
   
   This is our guests' favorite part of Miami Beach, according to independent reviews.
   
   We speak your language!`,
  price: "350 $",
  age: "1986",
  city: "Miami",
  country: "USA",
  owner: "Dwayne Wade",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1280x900/130/130845356.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/220/220012195.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/160/160033339.jpg",
}
const apartman4 = {
  title: "Corinthia Budapest",
  longDesc: `The 5-star Corinthia Budapest on the Grand Boulevard offers access to its Royal Spa, 3 restaurants, an elegant café and free Wi-Fi in all rooms.

    The UNESCO-protected Andrassy Avenue and the Oktogon metro station are only 300 m away from the Corinthia Budapest.
    
    In the historic Royal Spa you can enjoy several relaxation areas, saunas, steam baths, hot tubs, a fitness room and a wide variety of treatments. Guests have free access to the Royal Spa when booking most of the rooms, while the spa area can be used for an additional fee when booking the Superior room.
    
    The large guest rooms of the Corinthia Budapest are all air-conditioned and feature a flat-screen TV with satellite channels.
    
    Gourmet Hungarian, Asian and international cuisine can be enjoyed in the restaurants and you can choose from a selection of home-made cakes in the café. Throughout the day you can listen to live piano music in the lobby bar.
    
    07. Erzsébetváros is a great choice for travelers interested in hot springs, riverside walks and restaurants.
    
    This is our guests' favorite part of Budapest, according to independent reviews.
    
    We speak your language!
    
    Corinthia Budapest has been welcoming Booking.com guests since Aug 20, 2004`,
  price: "410 $",
  age: "1977",
  city: "Budapest",
  country: "Hundary",
  owner: "Viktor Orban",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/249/24962271.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1280x900/182/182758622.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/182/182761757.jpg",
}

const Index2 = () => (
  <Layout activePage="./">
    <ApartmentCard apartman={apartman1} />
    <ApartmentCard apartman={apartman2} />
    <ApartmentCard apartman={apartman3} />
    <ApartmentCard apartman={apartman4} />

    <ApartmentButtonGroup />
    <ApartmentCardGroup />
  </Layout>
)

export default Index2
