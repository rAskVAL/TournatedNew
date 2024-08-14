import { PLATFORM_URL } from "../consts.ts";
import { colors } from "../components/GlobalStyles.tsx";
import tournamentsIcon from "../components/Navbar/Assets/tournaments.svg";
import leaguesIcon from "../components/Navbar/Assets/leagues.svg";

export default [
  {
    to: `${PLATFORM_URL}/tournaments`,
    title: { en: "Tournaments", lv: "Turnīri" },
    label: { en: "Free", lv: "Bezmaksas" },
    labelColor: colors.success,
    icon: tournamentsIcon,
    desc: {
      en: "Enhance tournaments with automated brackets and easy sign-ups.",
      lv: "Uzlabojiet turnīrus ar automatizētām izlozēm un vienkāršu reģistrēšanos.",
    },
  },
  {
    to: `${PLATFORM_URL}/leagues`,
    title: { en: "Leagues", lv: "Līgas" },
    label: { en: "Free Trial", lv: "Bezmaksas izmēģinājums" },
    labelColor: colors.success,
    icon: leaguesIcon,
    desc: {
      en: "Streamline league operations with scheduling, standings, and ranking tools.",
      lv: "Vienkāršojiet līgu darbību ar plānošanas, rezultātu un reitingu rīkiem.",
    },
  },
  {
    title: { en: "Clubs", lv: "Klubi" },
    label: { en: "Coming soon", lv: "Drīzumā" },
    labelColor: colors.grey700,
    icon: tournamentsIcon,
    desc: {
      en: "Manage your club efficiently with registration and communication tools.",
      lv: "Efektīvi pārvaldiet savu klubu ar reģistrācijas un saziņas rīkiem.",
    },
  },
  {
    title: { en: "Events", lv: "Pasākumi" },
    label: { en: "Coming soon", lv: "Drīzumā" },
    labelColor: colors.grey700,
    icon: tournamentsIcon,
    desc: {
      en: "Simplify event management with integrated planning tools.",
      lv: "Vienkāršojiet pasākumu pārvaldību ar integrētiem plānošanas rīkiem.",
    },
  },
];
