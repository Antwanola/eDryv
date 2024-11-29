import Product_Cta from "./Product_Cta";
import phone from "../../assets/phone2.avif";

interface ProductPropFace {
  title: string;
  text: string;
  image: string;
  colour: string;
}

export default function Display_CTA() {
  const product_Props: Array<ProductPropFace> = [
    {
      title: "Manage All Your Credit Cards in One Place.",
      text: "Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts",
      image: phone,
      colour: "rgb(251, 248, 233)",
    },
    { title: "Goal-Oriented Financial Planning.", text: "Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams.", image: phone, colour: "rgb(86, 240, 159)" },
    {
      title: "Smart Spending Insights.",
      text: "Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.",
      image: phone,
      colour: "rgb(212, 255, 232)",
    },
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
