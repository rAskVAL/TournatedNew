import List from "./assets/list.svg?react";
import League from "./assets/league.svg?react";
import Entries from "./assets/entry.svg?react";
import Groups from "./assets/groups.svg?react";
import Results from "./assets/results.svg?react";

export default [
  {
    title: "Customize your League",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    banner: <League />,
    centered: false,
  },
  {
    title: "Entry Management",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    banner: <Entries />,
    centered: false,
  },
  {
    title: "Groups, Draws and OOP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    banner: <Groups />,
    centered: true,
  },
  {
    title: "List & Results, Pairings, Standings",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    banner: <List />,
    centered: false,
  },
  {
    title: "Final Results & Rankings",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    banner: <Results />,
    centered: false,
  },
];
