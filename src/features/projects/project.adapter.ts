import { Project, ProjectResponse } from './project.model';

export const projectAdapter = (obj: ProjectResponse): Project => {
  return {
    id: obj.id,
    endsAt: obj.endsAt,
    startsAt: obj.startsAt,
    team: obj.team,
    tickets: obj.tickets,
    status: obj.status,
    title: obj.title,
  };
};
