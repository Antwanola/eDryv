import Product_Cta from "./Product_Cta";
import services from "../../assets/Folti_Mockups/all_services.png";
import billings from "../../assets/Folti_Mockups/billings.png";
import vehicle from "../../assets/Folti_Mockups/car-removebg.png";
import trip_Monitoring from "../../assets/Folti_Mockups/trip_Monitoring.png";

interface ProductPropFace {
  title: string;
  text: string;
  image: string;
  colour: string;
}

export default function Display_CTA() {
  const product_Props: Array<ProductPropFace> = [
    {
      title: "All-in-One Services for Every Need",
      text: "Choose from a variety of services. From quick rides to vehicle rentals, reservations, and even proxy services—we’ve got it all covered.",
      image: services,
      colour: "rgb(251, 248, 233)",
    },
    { title: "Rewards, Referrals, and More.",
      text: "Enjoy a fully customized experience. Track your Green Coin rewards, refer friends to earn more, and manage your payments and profile effortlessly.", 
      image: billings, 
      colour: "rgb(86, 240, 159)" 
    },
    {
      title: "Free Wi-Fi, Always Clean Rides",
      text: "Stay connected on the go with complimentary in-vehicle Wi-Fi. Plus, enjoy spotless rides every single time.",
      image: vehicle,
      colour: "rgb(212, 255, 232)",
    },
    {
      title: "Why Ride With Us?",
      text: "With over a decade of combined experience in the industry, we’ve crafted every aspect of your journey to prioritize comfort, safety, and security. From meticulously vetted drivers to real-time trip monitoring, we’re committed to delivering the best experience, every time.",
      image: trip_Monitoring,
      colour: "rgb(234, 255, 241)",
    }
  ];
  return (
    <>
      {product_Props.map((item: ProductPropFace) => (
        <Product_Cta
          key={item.title}
          title={item.title}
          text={item.text}
          image={item.image}
          colour={item.colour}
        />
      ))}
    </>
  );
}
