import axios from 'axios';
import { ProjectResponse } from './project.model';
import { projectItemAdapter } from './project.adapter';

export const getProjects = async () => {
  try {
    const { data } = await axios.get<ProjectResponse>(
      'http://localhost:8080/api/v1/project/94802918-2eab-4c21-9fc1-14345cee09dc'
    );

    return projectItemAdapter(data);
  } catch (e) {
    throw new Error(e.message);
  }
};
