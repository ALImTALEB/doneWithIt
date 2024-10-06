import apiClient from "./client";

export const login = (email, password) =>
  apiClient.post("/auth", { email, password });

export const register = (name, email, password) =>
  apiClient.post("/users", { name, email, password });
