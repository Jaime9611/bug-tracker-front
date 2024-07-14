import { Team } from '@features/teams';
import { Ticket } from '@features/tickets';

export interface ProjectResponse {
  id: string;
  title: string;
  team: Team;
  startsAt: Date;
  endsAt: Date;
  tickets: Ticket[];
  status: Status;
}

export interface Project {
  id: string;
  title: string;
  team: Team;
  startsAt: Date;
  endsAt: Date;
  tickets: Ticket[];
  status: Status;
}

export interface Status {
  id: string;
  title: string;
}
