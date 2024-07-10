import { useState, useEffect } from 'react';

import { Project } from './project.model';
import { getProjects } from './project.api';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchProjects = () => {
    const response = getProjects().then((data) => {
      if (response !== undefined && response !== null) {
        setProjects([data]); // TODO: Change to the correct data
        setIsLoading(false);
      } else {
        setProjects([] as Project[]);
      }
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return [projects, isLoading] as [Project[], boolean];
};
