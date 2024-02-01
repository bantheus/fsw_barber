import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BookingItem } from "../_components/booking-item";
import { Header } from "../_components/header";
import { SectionTitle } from "../_components/ui/section-title";
import { Search } from "./_components/search";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Jhon Doe</h2>
        <p className="text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6 flex flex-col gap-3">
        <SectionTitle title="Agendamentos" />
        <BookingItem />
      </div>
    </div>
  );
}
