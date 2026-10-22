export default function TicketItem() {
  return (
    <article className="ticket">
      <div className="ticket-top"><span className="ticket-id">Solicitud de ejemplo</span><div className="badges"><span className="badge priority-alta">Alta</span><span className="badge status-pendiente">Pendiente</span></div></div>
      <h3>No puedo acceder al correo</h3><p className="requester">Solicitante: Ana López</p>
      <div className="ticket-actions"><button className="button secondary" type="button">Marcar como resuelta</button><button className="button danger" type="button">Eliminar</button></div>
    </article>
  );
}
