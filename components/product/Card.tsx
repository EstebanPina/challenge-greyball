import React from "react";
import { currency_options } from "@/constants/currency_options";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Button_Buy from "@/components/product/Button_Buy";
type Props = {
  Id: number;
  ProductName: string;
  Currency: string;
  Price: number;
  Description: string;
  Img: string;
  Rating_Value: number;
};

const customStyles = {
  itemShapes: ThinStar,
  activeBoxColor: ["#77DAF5", "#3F99F5", "#487CF5", "#255CF6", "#0045F5"],
  inactiveBoxColor: "#C7C7C7",
  inactiveFillColor: "white",
};

export const Card: React.FC<Props> = ({
  Id = 0,
  ProductName = "",
  Currency = "USD",
  Price = 0,
  Description = "",
  Img = "",
  Rating_Value = 0,
}) => {
  const currencyData = currency_options[Currency];
  if (!currencyData) {
    return <div>Error: Currency data not available.</div>;
  }
  const showed_price = (
    Price * currency_options[Currency ? Currency : "USD"].conversion_value
  ).toFixed(2);
  return (
    <section className="grid grid-cols-2 content-center gap-4 bg-slate-100 shadow-md shadow-black/20 px-8 py-4 rounded-lg">
      <img className="row-span-5 col-span-1 object-cover w-32 h-32" src={Img} />
      <h3 className="grid col-span-1 text-center font-bold text-xl">
        {ProductName}
      </h3>
      <h4 className="text-xl text-right text-blue-500 font-bold">
        <span className="text-sm font-normal">
          {currency_options[Currency ? Currency : "USD"].prefix}
        </span>{" "}
        {showed_price}
      </h4>
      <div className=" w-full flex justify-end">
        <Rating
          style={{ maxWidth: 180 }}
          value={Rating_Value}
          readOnly
          itemStyles={customStyles}
          spaceBetween="small"
          halfFillMode="box"
        />
      </div>
      <h5 className="text-sm p-1 w-full h-20 bg-slate-200">{Description}</h5>
      <Button_Buy Id={Id} ProductName={ProductName} Price={Price} />
    </section>
  );
};
