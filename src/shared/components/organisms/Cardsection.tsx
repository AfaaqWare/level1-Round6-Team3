import React from "react";
import Cards from "../molecules/Cards";
import { dataCards } from "@/shared/utils/data";
export default function Cardsection() {
  return (
    <div className="ds-container grid-col-1 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {dataCards.map(card => (
        <Cards key={card.id} src={card.img} alt={card.alt} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
