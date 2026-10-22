export type TicketPriority = 'baja' | 'media' | 'alta';

export type TicketStatus = 'pendiente' | 'resuelta';

export interface Ticket {
  id: string;
  requester: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
}

export interface TicketFormValues {
  requester: string;
  description: string;
  priority: string;
}

export type TicketFormErrors = Partial<Record<keyof TicketFormValues, string>>;

export interface TicketFormState {
  errors: TicketFormErrors;
  feedback: {
    type: 'success' | 'error';
    message: string;
  } | null;
}
