import baseFetch from '@services/baseFetch';
import { ProjectResponse } from './project.model';
import { projectAdapter } from './project.adapter';

const ENDPOINT = '/project';

export const getProjects = async () => {
  try {
    const { data } = await baseFetch.get<ProjectResponse[]>(ENDPOINT);

    return data.map((project) => projectAdapter(project));
  } catch (err: unknown) {
    const knownError = err as Error;
    throw new Error(knownError.message);
  }
};
