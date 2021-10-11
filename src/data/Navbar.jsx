import { v4 as uuidv4 } from "uuid";

export const navbar = [
  { id: uuidv4(), title: "Homepage", url: "/" },
  { id: uuidv4(), title: "Project", url: "/project" },
  { id: uuidv4(), title: "Contact", url: "/contact" },
];
