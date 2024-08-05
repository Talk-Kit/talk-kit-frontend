"use client";

import Card from "./_components/Card";
import MenuBox from "./_components/MenuBox";
import { DUMMY_CARD_DATA } from "./_constants/constants";

export default function Community() {
  return (
    <div className="full-screen flex justify-center">
      <div className="max-w-[1200px] w-full px-4 py-8 flex flex-col gap-8">
        <MenuBox />
        <section className="w-full flex flex-col">
          {DUMMY_CARD_DATA.map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </section>
      </div>
    </div>
  );
}
