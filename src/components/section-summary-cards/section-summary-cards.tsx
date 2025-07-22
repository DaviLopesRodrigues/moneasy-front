import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { SummaryCard } from "../summary-card/summary-card";

export function SectionSummaryCards() {
  const handleTeste = () => {
    console.log("Teste");
  };
  return (
    <div className="flex flex-row gap-5">
      <SummaryCard
        background="bg-blue-700"
        icon={<PiggyBank />}
        cardTitle="Investimentos"
        amount="R$ 2.000,00"
        hover="bg-blue-800"
        button={true}
        handleModalTransaction={handleTeste}
      />

      <SummaryCard
        background="bg-green-700"
        icon={<BanknoteArrowUp />}
        cardTitle="Receita"
        amount="R$ 10.000,00"
        hover="bg-green-800"
        button={true}
        handleModalTransaction={handleTeste}
      />

      <SummaryCard
        background="bg-red-700"
        icon={<BanknoteArrowDown />}
        cardTitle="Despesa"
        amount="R$ 3.000,00"
        hover="bg-red-800"
        button={true}
        handleModalTransaction={handleTeste}
      />

      <SummaryCard
        background="bg-yellow-600"
        icon={<Wallet />}
        cardTitle="Saldo"
        amount="R$ 7.000,00"
        button={false}
      />
    </div>
  );
}
