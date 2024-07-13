import baseFetch from '@services/baseFetch';
import { ProjectResponse } from './project.model';
import { projectItemAdapter } from './project.adapter';

const ENDPOINT = '/project';

export const getProjects = async () => {
  try {
    // TODO: Change to correct endpoint
    const { data } = await baseFetch.get<ProjectResponse>(
      `${ENDPOINT}/59e76e54-b20e-4397-8cba-c9141fffa45b`
    );

    return projectItemAdapter(data);
  } catch (err: unknown) {
    const knownError = err as Error;
    throw new Error(knownError.message);
  }
};
