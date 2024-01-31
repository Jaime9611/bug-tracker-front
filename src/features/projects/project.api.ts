import baseFetch from '@services/baseFetch';
import { ProjectResponse } from './project.model';
import { projectItemAdapter } from './project.adapter';

const ENDPOINT = '/project';

export const getProjects = async () => {
  try {
    // TODO: Change to correct endpoint
    const { data } = await baseFetch.get<ProjectResponse>(
      `${ENDPOINT}/94802918-2eab-4c21-9fc1-14345cee09dc`
    );

    return projectItemAdapter(data);
  } catch (err: unknown) {
    const knownError = err as Error;
    throw new Error(knownError.message);
  }
};
