import baseFetch from '@services/baseFetch';
import { ProjectResponse } from './project.model';
import { projectItemAdapter } from './project.adapter';

const ENDPOINT = '/project';

export const getProjects = async () => {
  try {
    // TODO: Change to correct endpoint
    const { data } = await baseFetch.get<ProjectResponse>(
      `${ENDPOINT}/e9fc378f-9a81-4c86-b78f-c89fe0847727`
    );

    return projectItemAdapter(data);
  } catch (err: unknown) {
    const knownError = err as Error;
    throw new Error(knownError.message);
  }
};
