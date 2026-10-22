import TicketItem from './TicketItem.tsx';

export default function TicketList() {
  return (
    <section className="panel list-panel" aria-labelledby="list-title">
      <div className="section-heading"><span className="step">02</span><div><h2 id="list-title">Solicitudes registradas</h2><p>Consulta su prioridad y actualiza su estado.</p></div></div>
      <div className="ticket-list">
        <TicketItem />
      </div>
    </section>
  );
}
