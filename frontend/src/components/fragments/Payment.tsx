import { Product } from "@/types/product.type";
import React from "react";

type Props = {
  order: string;
};

export default function Payment({ order }: Props) {
  return (
    <div>
      Payment
      <ul>
        {JSON.parse(order).map((e: Product) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
