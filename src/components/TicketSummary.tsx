import { useTickets } from '../hooks/useTickets.ts';

export default function TicketSummary() {
  const { tickets } = useTickets();
  const pendingCount = tickets.filter((ticket) => ticket.status === 'pendiente').length;
  const resolvedCount = tickets.filter((ticket) => ticket.status === 'resuelta').length;

  return (
    <section className="summary" aria-label="Resumen de solicitudes">
      <article className="stat"><span>Total de solicitudes</span><strong>{tickets.length}</strong></article>
      <article className="stat"><span>Pendientes</span><strong className="text-amber">{pendingCount}</strong></article>
      <article className="stat"><span>Resueltas</span><strong className="text-green">{resolvedCount}</strong></article>
    </section>
  );
}
