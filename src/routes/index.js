import { Blog, RedirectionPage, Details } from "../views";

export const routes = [
  { path: "/", Component: Blog, name: "home" },
  { path: "/post/:id", Component: Details, name: "update" },
  { path: "*", Component: RedirectionPage, name: "404" },
];
