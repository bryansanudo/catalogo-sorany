import { Link } from "react-router-dom";
import IconWpp from "@/components/icons/IconWpp";
const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <div className={grid ? "" : "flex justify-between gap-6"}>
      <Link to={`/product-details/${id}`}>
        <img
          className="object-contain h-[200px] w-[200px]"
          src={imageURL}
          alt={name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-primary text-lg font-bold">{`$${price}`}</p>
          <h2 className="text-2xl md:text-lg">{shortenText(name, 20)}</h2>
        </div>
        {!grid && <p>{shortenText(desc, 200)}</p>}
        <a
          href="https://wa.me/573205332259"
          target="_blank"
          className="animate-pulse hover:scale-125 duration-300 "
        >
          <IconWpp />
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
