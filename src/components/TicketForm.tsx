export default function TicketForm() {
  return (
    <section className="panel" aria-labelledby="form-title">
      <div className="section-heading"><span className="step">01</span><div><h2 id="form-title">Nueva solicitud</h2><p>Describe brevemente lo que necesitas.</p></div></div>
      <form className="ticket-form" noValidate>
        <div className="field"><label htmlFor="requester">Solicitante</label><input id="requester" name="requester" placeholder="Ej. Ana López" autoComplete="name" /><small>Mínimo 3 caracteres.</small></div>
        <div className="field"><label htmlFor="description">Descripción</label><textarea id="description" name="description" rows={4} placeholder="Ej. No puedo acceder al correo" /><small>Mínimo 10 caracteres.</small></div>
        <div className="field"><label htmlFor="priority">Prioridad</label><select id="priority" name="priority"><option value="">Selecciona una prioridad</option><option value="baja">Baja</option><option value="media">Media</option><option value="alta">Alta</option></select></div>
        <div className="feedback" aria-live="polite"></div>
        <button className="button primary" type="button">Registrar solicitud</button>
      </form>
    </section>
  );
}
