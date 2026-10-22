import TicketItem from './TicketItem.tsx';
import EmptyState from './EmptyState.tsx';
import { useTickets } from '../hooks/useTickets.ts';

export default function TicketList() {
  const { tickets, dispatch } = useTickets();

  return (
    <section className="panel list-panel" aria-labelledby="list-title">
      <div className="section-heading"><span className="step">02</span><div><h2 id="list-title">Solicitudes registradas</h2><p>Consulta su prioridad y actualiza su estado.</p></div></div>
      <div className="ticket-list">
        {tickets.length === 0 ? (
          <EmptyState />
        ) : (
          tickets.map((ticket) => (
            <TicketItem
              key={ticket.id}
              ticket={ticket}
              onResolve={() => dispatch({ type: 'ticket/resolved', ticketId: ticket.id })}
              onDelete={() => dispatch({ type: 'ticket/deleted', ticketId: ticket.id })}
            />
          ))
        )}
      </div>
    </section>
  );
}

/*{tockets.length === 0 ?(
<EmptyState />
):)
tickets.map((ticket)=>(
<TicketItem))} */