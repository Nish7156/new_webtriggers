/**
 * Example usage of the API Gateway
 * This file demonstrates how to use the API utility functions
 * You can reference this when integrating with your other project
 */

import api, { apiRequestWithAuth } from './api';

// Example: Fetching data from your other project
export const fetchProjects = async () => {
  try {
    const projects = await api.get('/projects');
    return projects;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
};

// Example: Creating a new project
export const createProject = async (projectData) => {
  try {
    const newProject = await api.post('/projects', projectData);
    return newProject;
  } catch (error) {
    console.error('Failed to create project:', error);
    throw error;
  }
};

// Example: Updating a project
export const updateProject = async (projectId, projectData) => {
  try {
    const updatedProject = await api.put(`/projects/${projectId}`, projectData);
    return updatedProject;
  } catch (error) {
    console.error('Failed to update project:', error);
    throw error;
  }
};

// Example: Deleting a project
export const deleteProject = async (projectId) => {
  try {
    await api.delete(`/projects/${projectId}`);
    return true;
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw error;
  }
};

// Example: Authenticated request
export const fetchUserProfile = async (token) => {
  try {
    const profile = await apiRequestWithAuth('GET', '/user/profile', null, token);
    return profile;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
};

// Example: Using in a React component
/*
import React, { useState, useEffect } from 'react';
import { fetchProjects, createProject } from '../utils/apiExample';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (projectData) => {
    try {
      const newProject = await createProject(projectData);
      setProjects([...projects, newProject]);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
*/
