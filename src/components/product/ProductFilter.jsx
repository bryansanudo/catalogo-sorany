import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "@/redux/slice/productSlice";
import { useEffect, useState } from "react";
import {
  FILTER_BY_CATEGORY,
  FILTER_BY_COLOR,
  FILTER_BY_PRICE,
} from "@/redux/slice/filterSlice";
import { selectMinPrice, selectMaxPrice } from "@/redux/slice/productSlice";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [price, setPrice] = useState(100000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const allColors = [
    "All",
    ...new Set(products.map((product) => product.color)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY_COLOR({ products, color }));
  }, [dispatch, products, color]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [dispatch, products, price]);

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  return (
    <>
      <h2 className="font-bold text-[#6057ca] text-3xl">Categorias</h2>
      <div className="flex flex-col items-start gap-2">
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? "" : null}
              onClick={() => filterProducts(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <h4 className="font-bold text-[#6057ca] text-3xl my-2">Color</h4>
      <div>
        <select
          name="brand"
          onChange={(e) => setColor(e.target.value)}
          className="select select-bordered  select-sm"
        >
          {allColors.map((color, index) => {
            return (
              <option key={index} value={color}>
                {color}
              </option>
            );
          })}
        </select>
        <h4 className="mt-4">{`${price}`} COP</h4>

        <div>
          <input
            type="range"
            className="range range-primary range-xs"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        {/*  <button className="btn btn-primary">Clear Filter</button> */}
      </div>
    </>
  );
};

export default ProductFilter;
