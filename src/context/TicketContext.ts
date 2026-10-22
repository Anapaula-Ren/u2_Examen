import { createContext } from 'react';
import type { Dispatch } from 'react';
import type { Ticket } from '../types/Ticket.ts';

export type TicketAction =
  | { type: 'ticket/added'; ticket: Ticket }
  | { type: 'ticket/resolved'; ticketId: string }
  | { type: 'ticket/deleted'; ticketId: string };

export interface TicketContextValue {
  tickets: Ticket[];
  dispatch: Dispatch<TicketAction>;
}

export const TicketContext = createContext<TicketContextValue | null>(null);
