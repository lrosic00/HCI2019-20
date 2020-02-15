import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ApartmentCard from "../components/ApartmentCard"
import ApartmentButtonGroup from "../components/ApartmentButtonGroup"
import ApartmentCardGroup from "../components/ApartmentCardGroup"

//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin
const apartman1 = {
  title: "Flora Chiado Apartments",
  shortDesc:
    "Set 1.1 km from Dona Maria II National Theatre in Lisbon, Flora Chiado Apartments offers accommodation with air conditioning and free WiFi",
  longDesc:
    "Set 1.1 km from Dona Maria II National Theatre in Lisbon, Flora Chiado Apartments offers accommodation with air conditioning and free WiFi Each unit is fitted with a microwave, fridge, a kettle, as well as a oven and coffee machine. Some of the units feature a cable TV, a fully equipped kitchenette with a dishwasher, and a private bathroom with a shower and a hair dryer. Guests at the apartment can enjoy a continental breakfast. Bairro Alto is 1.4 km from Flora Chiado Apartments, while Liberty Avenue is 2.2 km from the property.",
  price: "450 $",
  age: "1980",
  city: "Lisbon",
  country: "Portugal",
  owner: "Christiano Ronaldo",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://r-cf.bstatic.com/images/hotel/max1024x768/100/100210804.jpg",
  img2: "https://q-cf.bstatic.com/images/hotel/max1024x768/100/100205800.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1024x768/926/92610480.jpg",
}
const apartman2 = {
  title: "Park West Hotel",
  shortDesc:
    "Located 61 m from Central Park, Park West Hotel on Central Park offers WiFi and laundry services. Park West on Central Park is 0.7 mi from Columbia",
  longDesc:
    "Located 61 m from Central Park, Park West Hotel on Central Park offers WiFi and laundry services. Park West on Central Park is 0.7 mi from Columbia University and 1.4 mi from the American Museum of Natural History. Each of the room at the Park West includes a TV, radio, alarm clock and air conditioning. The private bathroom is equipped with a shower, bath tub and offers C.O. Bigelow toiletries for all guests.  Park West on Central Park has a 24-hour front desk and a business center. The Cathedral Parkway Subway Station is 161 m away and provides access to Lines B and C. The Broadway Theater District, Rockefeller Center, Radio City Music Hall and Columbus Circle are within a 3.7 mi radius. LaGuardia Airport is 8.4 mi from Park West on Central Park. Upper West Side is a great choice for travelers interested in parks, museums and culture.",
  price: "500 $",
  age: "1990",
  city: "New York",
  country: "USA",
  owner: "Brad Pitt",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/157/157471036.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/834/83471737.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/127/127194962.jpg",
}
const apartman3 = {
  title: "Hotel Gat Point Charlie",
  shortDesc:
    "This design hotel is centrally located in Berlin's central Mitte district, just 50 m from Checkpoint Charlie and the Friedrichstrasse shopping street. ",
  longDesc:
    "This design hotel is centrally located in Berlin's central Mitte district, just 50 m from Checkpoint Charlie and the Friedrichstrasse shopping street. It offers free WiFi, modern rooms and great transport connections.Located in the Stasi secret police headquarters in the former East Germany, Gat Point Charlie is an industrial structure featuring minimalist-style rooms. Each features satellite TV and a desk, and the private bathrooms have toiletries and a hairdryer.A healthy and balanced breakfast is provided every morning in the hotel’s stylish breakfast room. Tapas and light meals are available in the evenings, and the bar is a great place to enjoy cocktails and make friends.Stadtmitte Underground Station is a 3-minute walk away. From here, guests can reach Potsdamer Platz in 2 minutes or Alexanderplatz Square in 6 minutes.Mitte is a great choice for travelers interested in museums, history and monuments.",
  price: "350 $",
  age: "1986",
  city: "Berlin",
  country: "Germany",
  owner: "Angela Merkel",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/196/19634872.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/665/66575127.jpg",
  img3: "https://q-cf.bstatic.com/images/hotel/max1280x900/196/19634782.jpg",
}
const apartman4 = {
  title: "Villa Dard",
  shortDesc:
    "Villa Dard is only a 5 minute walk from Dubrovnik’s Old Town and the nearest beach. Featuring free Wi-Fi and free parking, it offers air-conditioned ",
  longDesc:
    "Villa Dard is only a 5 minute walk from Dubrovnik’s Old Town and the nearest beach. Featuring free Wi-Fi and free parking, it offers air-conditioned accommodations with a TV.The historic center is full of various cafés, restaurants and shops. Some of the most notable sights include the Stradun Promenade, Onofrio’s Fountain and Orlando’s Column.There is a cable car overlooking the surrounding islands half a kilometer away. Banje, Dubrovnik’ s most popular beach with great views of the Town Walls, is a 15 minute walk away.    A local bus stop is 92 m from the property. Dubrovnik Bus Station as well as the Ferry Port, with frequent services to numerous Dalmatian destinations, are 2.4 km away. Dubrovnik Airport is 19.3 km from the Dard.",
  price: "410 $",
  age: "1977",
  city: "Dubrovnik",
  country: "Croatia",
  owner: "Ruder Boskovic",
  contactNumber: "XXX-XXX-XXX",
  img1: "https://q-cf.bstatic.com/images/hotel/max1280x900/190/190408048.jpg",
  img2: "https://r-cf.bstatic.com/images/hotel/max1280x900/190/190420172.jpg",
  img3: "https://r-cf.bstatic.com/images/hotel/max1280x900/190/190418040.jpg",
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
