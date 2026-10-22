import { useTicketFormAction, useTickets } from '../hooks/useTickets.ts';

export default function TicketForm() {
  const { dispatch } = useTickets();
  const [formState, formAction, isPending] = useTicketFormAction(dispatch);

  return (
    <section className="panel" aria-labelledby="form-title">
      <div className="section-heading"><span className="step">01</span><div><h2 id="form-title">Nueva solicitud</h2><p>Describe brevemente lo que necesitas.</p></div></div>
      <form className="ticket-form" action={formAction} noValidate>
        <div className="field">
          <label htmlFor="requester">Solicitante</label>
          <input id="requester" name="requester" placeholder="Ej. Ana López" autoComplete="name" aria-describedby={formState.errors.requester ? 'requester-error' : undefined} />
          <small>Mínimo 3 caracteres.</small>
          {formState.errors.requester && <span className="field-error" id="requester-error">{formState.errors.requester}</span>}
        </div>
        <div className="field">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" rows={4} placeholder="Ej. No puedo acceder al correo" aria-describedby={formState.errors.description ? 'description-error' : undefined} />
          <small>Mínimo 10 caracteres.</small>
          {formState.errors.description && <span className="field-error" id="description-error">{formState.errors.description}</span>}
        </div>
        <div className="field">
          <label htmlFor="priority">Prioridad</label>
          <select id="priority" name="priority" defaultValue="" aria-describedby={formState.errors.priority ? 'priority-error' : undefined}>
            <option value="">Selecciona una prioridad</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
          {formState.errors.priority && <span className="field-error" id="priority-error">{formState.errors.priority}</span>}
        </div>
        {isPending && <p className="feedback" aria-live="polite">Registrando...</p>}
        {!isPending && formState.feedback && (
          <p className={`feedback ${formState.feedback.type}`} aria-live="polite">
            {formState.feedback.message}
          </p>
        )}
        <button className="button primary" type="submit" disabled={isPending}>
          {isPending ? 'Registrando...' : 'Registrar solicitud'}
        </button>
      </form>
    </section>
  );
}
