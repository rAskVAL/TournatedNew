import TournamentsIcon from "./Assets/tournaments.svg?react";
import LeaguesIcon from "./Assets/leagues.svg?react";

import { colors } from "../GlobalStyles.tsx";

const menu = [
  {
    to: "#",
    title: "Products",
    icon: "",
    submenu: {
      highlightZone: {
        title: "Highlight Zone",
        items: [
          {
            to: "#",
            title: "Tournaments",
            label: "Free",
            labelColor: colors.success,
            icon: <TournamentsIcon />,
          },
          {
            to: "#",
            title: "Leagues",
            label: "Free trial",
            labelColor: colors.success,
            icon: <LeaguesIcon />,
          },
        ],
      },
      links: {
        title: "Links",
        items: [
          {
            title: "Clubs",
            to: "#",
            icon: "",
          },
          {
            title: "Events",
            to: "#",
            icon: "",
          },
          {
            title: "Coaches",
            to: "#",
            icon: "",
          },
          {
            title: "Athletes",
            to: "#",
            icon: "",
          },
          {
            title: "White-labeling",
            to: "#",
            icon: "",
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: "Solutions",
    icon: "",
    submenu: {
      links: {
        title: "Links",
        items: [
          {
            title: "Sport ministries",
            to: "#",
            icon: "",
          },
          {
            title: "Federations",
            to: "#",
            icon: "",
          },
          {
            title: "Clubs",
            to: "#",
            icon: "",
          },
          {
            title: "Organizers",
            to: "#",
            icon: "",
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: "Sports",
    icon: "",
    submenu: {
      links: {
        title: "Links",
        items: [
          {
            title: "Tennis",
            to: "#",
            icon: "",
          },
          {
            title: "Volleyball",
            to: "#",
            icon: "",
          },
          {
            title: "Padel",
            to: "#",
            icon: "",
          },
          {
            title: "Pickleball",
            to: "#",
            icon: "",
          },
          {
            title: "Chess",
            to: "#",
            icon: "",
          },
          {
            title: "Sport fishing",
            to: "#",
            icon: "",
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: "Browse",
    icon: "",
  },
  {
    to: "#",
    title: "More",
    icon: "",
  },
];

export default menu;
