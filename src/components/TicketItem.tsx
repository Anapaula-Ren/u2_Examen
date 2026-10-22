import type { Ticket } from '../types/Ticket.ts';

interface TicketItemProps {
  ticket: Ticket;
  onResolve: () => void;
  onDelete: () => void;
}

export default function TicketItem({ ticket, onResolve, onDelete }: TicketItemProps) {
  return (
    <article className="ticket">
      <div className="ticket-top">
        <span className="ticket-id">Solicitud #{ticket.id.slice(0, 8)}</span>
        <div className="badges">
          <span className={`badge priority-${ticket.priority}`}>{ticket.priority}</span>
          <span className={`badge status-${ticket.status}`}>{ticket.status}</span>
        </div>
      </div>
      <h3>{ticket.description}</h3>
      <p className="requester">Solicitante: {ticket.requester}</p>
      <div className="ticket-actions">
        {ticket.status === 'pendiente' && (
          <button className="button secondary" type="button" onClick={onResolve}>
            Marcar como resuelta
          </button>
        )}
        <button className="button danger" type="button" onClick={onDelete}>Eliminar</button>
      </div>
    </article>
  );
}
