type SummaryCardType = {
  background: string;
  icon: React.ReactNode;
  cardTitle: string;
  amount: string;
  hover?: string;
  button: boolean;
  handleModalTransaction?: () => void;
};

export function SummaryCard({
  background,
  icon,
  cardTitle,
  amount,
  hover,
  button,
  handleModalTransaction,
}: SummaryCardType) {
  return (
    <div className="flex flex-col items-center justify-center p-2 w-54 h-54 gap-2 rounded-xl bg-zinc-800">
      <div
        className={`flex items-center justify-center ${background} w-16 h-16 rounded-full text-[#fafafa]`}
      >
        {icon}
      </div>
      <p className="text-zinc-50 font-normal">{cardTitle}</p>
      <p className="text-zinc-50 text-xl font-bold">{amount}</p>
      {button && (
        <button
          onClick={handleModalTransaction}
          className={`${background} p-1.5 w-48 hover:${hover} rounded-md text-zinc-50 font-medium`}
        >
          Adicionar {cardTitle}
        </button>
      )}
    </div>
  );
}
