import TournamentsIcon from "../components/Navbar/Assets/tournaments.svg?react";
import LeaguesIcon from "../components/Navbar/Assets/leagues.svg?react";
import { colors } from "../components/GlobalStyles.tsx";
import { PLATFORM_URL } from "../consts.ts";

const menu = [
  {
    to: "#",
    title: { en: "Products", lv: "Produkti" },
    icon: "",
    submenu: {
      highlightZone: {
        title: { en: "Management of", lv: "Pārvaldība" },
        items: [
          {
            to: `${PLATFORM_URL}/tournaments`,
            title: { en: "Tournaments", lv: "Turnīri" },
            label: { en: "Free", lv: "Bezmaksas" },
            labelColor: colors.success,
            icon: <TournamentsIcon />,
          },
          {
            to: `${PLATFORM_URL}/leagues`,
            title: { en: "Leagues", lv: "Līgas" },
            label: { en: "Free Trial", lv: "Bezmaksas izmēģinājums" },
            labelColor: colors.success,
            icon: <LeaguesIcon />,
          },
          {
            title: { en: "Clubs", lv: "Klubi" },
            label: { en: "Coming soon", lv: "Drīzumā" },
            labelColor: colors.grey700,
            icon: <TournamentsIcon />,
          },
          {
            title: { en: "Events", lv: "Pasākumi" },
            label: { en: "Coming soon", lv: "Drīzumā" },
            labelColor: colors.grey700,
            icon: <TournamentsIcon />,
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: { en: "Solutions", lv: "Risinājumi" },
    icon: "",
    submenu: {
      links: {
        title: { en: "For", lv: "Priekš" },
        items: [
          {
            title: { en: "Sport Ministries", lv: "Sporta ministrijām" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Federations", lv: "Federācijām" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Clubs", lv: "Klubiem" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Organizers", lv: "Organizatoriem" },
            to: "#",
            icon: "",
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: { en: "Sports", lv: "Sporta veidi" },
    icon: "",
    submenu: {
      links: {
        title: { en: "Active ones", lv: "Aktīvi" },
        items: [
          {
            title: { en: "Tennis", lv: "Teniss" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Beach Tennis", lv: "Pludmales teniss" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Pickleball", lv: "Piklbols" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Padel", lv: "Padel" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Chess", lv: "Šahi" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Sport Fishing", lv: "Sporta makšķerēšana" },
            to: "#",
            icon: "",
          },
          {
            title: { en: "Beach Volleyball", lv: "Pludmales volejbols" },
            to: "#",
            icon: "",
          },
        ],
      },
    },
  },
  {
    to: "#",
    title: { en: "Browse", lv: "Pārlūkot" },
    icon: "",
    submenu: {
      links: {
        title: { en: "Check out", lv: "Apskatiet" },
        items: [
          {
            title: { en: "Leagues", lv: "Līgas" },
            to: `${PLATFORM_URL}/leagues`,
            icon: "",
          },
          {
            title: { en: "Tournaments", lv: "Turnīrus" },
            to: `${PLATFORM_URL}/tournaments`,
            icon: "",
          },
          {
            title: { en: "Clubs", lv: "Klubus" },
            to: `${PLATFORM_URL}/clubs`,
            icon: "",
          },
          {
            title: { en: "Coaches", lv: "Trenerus" },
            to: `${PLATFORM_URL}/coaches`,
            icon: "",
          },
          {
            title: { en: "News", lv: "Ziņas" },
            to: `${PLATFORM_URL}/news`,
            icon: "",
          },
        ],
      },
    },
  },
  // {
  //   to: "#",
  //   title: { en: "More", lv: "Vairāk" },
  //   icon: "",
  // },
];

export default menu;
