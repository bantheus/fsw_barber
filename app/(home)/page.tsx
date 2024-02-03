import { Barbershop } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BookingItem } from "../_components/booking-item";
import { Header } from "../_components/header";
import { SectionTitle } from "../_components/section-title";
import { db } from "../_lib/prisma";
import { BarbershopItem } from "./_components/barbershop-item";
import { Search } from "./_components/search";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      {/* Boas vindas */}
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Jhon Doe</h2>
        <p className="text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      {/* Barra de pesquisa */}
      <div className="px-5 mt-6">
        <Search />
      </div>

      {/* Agendamentos */}
      <div className="px-5 mt-6 flex flex-col gap-3">
        <SectionTitle title="Agendamentos" />
        <BookingItem />
      </div>

      {/* Recomendados */}
      <SectionTitle title="Recomendados" className="px-5 mt-6 mb-3" />
      <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop: Barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      {/* Populare */}
      <SectionTitle title="Populares" className="px-5 mt-6 mb-3" />
      <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden mb-[4.5rem]">
        {barbershops.map((barbershop: Barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  );
}
