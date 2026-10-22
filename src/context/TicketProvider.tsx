import type { ReactNode } from 'react';
import { useTicketState } from '../hooks/useTickets.ts';
import { TicketContext } from './TicketContext.ts';

interface TicketProviderProps {
  children: ReactNode;
}

export function TicketProvider({ children }: TicketProviderProps) {
  const ticketState = useTicketState();

  return (
    <TicketContext.Provider value={ticketState}>
      {children}
    </TicketContext.Provider>
  );
}
