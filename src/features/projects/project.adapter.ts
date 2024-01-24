import { Project, ProjectResponse } from './project.model';

export const projectItemAdapter = (obj: ProjectResponse): Project => {
  return {
    id: obj.id,
    endsAt: obj.endsAt,
    startsAt: obj.startsAt,
    team: obj.team,
    tickets: obj.tickets,
    title: obj.title,
  };
};
