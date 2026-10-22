export default function TicketSummary() {
  return (
    <section className="summary" aria-label="Resumen de solicitudes">
      <article className="stat"><span>Total de solicitudes</span><strong>1</strong></article>
      <article className="stat"><span>Pendientes</span><strong className="text-amber">1</strong></article>
      <article className="stat"><span>Resueltas</span><strong className="text-green">0</strong></article>
    </section>
  );
}
