import { SectionSummaryCards } from "./components/section-summary-cards/section-summary-cards";

function App() {
  return (
    <div className="h-full w-full">
      <div className="m-10 flex flex-col gap-8">
        <p className="text-zinc-50 text-3xl font-bold">Dashboard</p>
        <SectionSummaryCards />
      </div>
    </div>
  );
}

export default App;
