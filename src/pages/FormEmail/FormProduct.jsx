import { useEffect, useState } from "react";

const FormProduct = ({
  productName,
  handleChange,
  productsAvailable,
  categoryTitle,
}) => {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <div style={{ flex: "1" }}>
        <p>{productName}</p>
      </div>

      <div style={{ flex: "1" }} className="text-end">
        <input
          className="w-50"
          placeholder="Cantidad"
          type="number"
          onChange={(e) => {
            handleChange({
              productName: productName,
              value: +e?.target?.value,
              category: categoryTitle,
            });
          }}
          value={
            productsAvailable.find(
              (item) =>
                item.productName === productName &&
                item?.category === categoryTitle
            )?.value || 0
          }
          min={0}
        />
      </div>
    </div>
  );
};

export default FormProduct;
