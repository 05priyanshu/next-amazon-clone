"use client";

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "@/components/StateProvider";
import { getBasketTotal } from "@/components/reducer";
import Link from "next/link";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  if (basket.length == 0) return <></>;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Link href="/payment">
        <button className="subtotal__proceed">Proceed To Checkout</button>
      </Link>
    </div>
  );
};

export default Subtotal;
