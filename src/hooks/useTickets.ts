import {useActionState, useContext, useReducer,} from 'react';
import type { Dispatch } from 'react';
import { TicketContext } from '../context/TicketContext.ts';
import type { TicketAction } from '../context/TicketContext.ts';
import type {Ticket, TicketFormErrors, TicketFormState, TicketPriority,} from '../types/Ticket.ts';

const initialTickets: Ticket[] = [];

function ticketReducer(tickets: Ticket[], action: TicketAction): Ticket[] {
  switch (action.type) {
    case 'ticket/added':
      return [...tickets, action.ticket];
    case 'ticket/resolved':
      return tickets.map((ticket) =>
        ticket.id === action.ticketId && ticket.status === 'pendiente'
          ? { ...ticket, status: 'resuelta' }
          : ticket,
      );
    case 'ticket/deleted':
      return tickets.filter((ticket) => ticket.id !== action.ticketId);
    default:
      return tickets;
  }
}

export function useTicketState() {
  const [tickets, dispatch] = useReducer(ticketReducer, initialTickets);
  return { tickets, dispatch };
}

export function useTickets() {
  const ticketContext = useContext(TicketContext);

  if (ticketContext === null) {
    throw new Error('useTickets debe utilizarse dentro de TicketProvider.');
  }

  return ticketContext;
}

const initialFormState: TicketFormState = {
  errors: {},
  feedback: null,
};

function validateForm(formData: FormData): {
  errors: TicketFormErrors;
  requester: string;
  description: string;
  priority: TicketPriority | null;
} {
  const requesterValue = formData.get('requester');
  const descriptionValue = formData.get('description');
  const priorityValue = formData.get('priority');

  const requester = typeof requesterValue === 'string' ? requesterValue.trim() : '';
  const description = typeof descriptionValue === 'string' ? descriptionValue.trim() : '';
  const priority =
    priorityValue === 'baja' || priorityValue === 'media' || priorityValue === 'alta'
      ? priorityValue
      : null;
  const errors: TicketFormErrors = {};

  if (requester.length < 3) {
    errors.requester = 'El solicitante debe tener al menos 3 caracteres.';
  }

  if (description.length < 10) {
    errors.description = 'La descripción debe tener al menos 10 caracteres.';
  }

  if (priority === null) {
    errors.priority = 'Selecciona una prioridad válida.';
  }

  return { errors, requester, description, priority };
}

export function useTicketFormAction(dispatch: Dispatch<TicketAction>) {
  return useActionState(
    async (_previousState: TicketFormState, formData: FormData): Promise<TicketFormState> => {
      const { errors, requester, description, priority } = validateForm(formData);

      if (Object.keys(errors).length > 0 || priority === null) {
        return { errors, feedback: null };
      }

      const ticket: Ticket = {
        id: crypto.randomUUID(),
        requester,
        description,
        priority,
        status: 'pendiente',
      };

      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1000);
      });

      dispatch({ type: 'ticket/added', ticket });

      return {
        errors: {},
        feedback: {
          type: 'success',
          message: 'Solicitud registrada correctamente.',
        },
      };
    },
    initialFormState,
  );
}
