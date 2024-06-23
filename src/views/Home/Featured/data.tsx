import ReactCountryFlag from "react-country-flag";
// import ChessIcon from "../../../assets/Icons/chess.svg?react";
import TrophyIcon from "../../../assets/Icons/trophy.svg?react";
import MembersIcon from "../../../assets/Icons/members.svg?react";
import TennisIcon from "../../../assets/Icons/teniss.svg?react";

import CategoriesIcon from "../../../assets/Icons/categories.svg?react";
import EntriesIcon from "../../../assets/Icons/entries.svg?react";

import { ReactElement } from "react";

type Tag = {
  variant: "primary" | "secondary" | "dark";
  leftIcon: ReactElement;
  textKey: string;
};

type Stat = {
  icon: ReactElement;
  stat: string;
  nameKey: string;
};

type Organizer = {
  title: string;
  avatar: string;
};

type LeagueCardData = {
  type: "league" | "organization";
  logo: string;
  title: { lv: string; en: string };
  sport: string;
  tags: Tag[];
  stats: Stat[];
  organizer: Organizer;
  link: string;
};

export const leagueCardData: LeagueCardData = {
  title: {
    lv: "ASOCIACION DE TENIS DE PLAYA DE PUERTO RICO",
    en: "ASOCIACION DE TENIS DE PLAYA DE PUERTO RICO",
  },
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJgnZFhYXRr0iO0gPQNbYAW6fPXAYhrvDDw&s",
  type: "league",
  sport: "tennis",
  link: "https://rankiaopr.com/en/tours",
  tags: [
    {
      variant: "secondary",
      leftIcon: <TennisIcon />,
      textKey: "beach_tennis",
    },
    {
      variant: "dark",
      leftIcon: (
        <ReactCountryFlag
          countryCode="PR"
          svg
          style={{
            height: "12px",
          }}
          title="PR"
        />
      ),
      textKey: "leagueCard.nationalLeague",
    },
  ],
  stats: [
    {
      icon: <TrophyIcon />,
      stat: "100+",
      nameKey: "leagueCard.tournaments",
    },
    {
      icon: <MembersIcon />,
      stat: "1000+",
      nameKey: "leagueCard.members",
    },
  ],
  organizer: {
    title: "LTS",
    avatar: "https://i.imgur.com/Tb7pS83.png",
  },
};

export const organizationCardData: LeagueCardData = {
  title: { lv: "Latvijas Tenisa Savieniba", en: "Latvian Tennis Union" },
  type: "organization",
  logo: "https://i.imgur.com/Tb7pS83.png",
  sport: "tennis",
  tags: [
    {
      variant: "secondary",
      leftIcon: <TennisIcon />,
      textKey: "tennis",
    },
    {
      variant: "dark",
      leftIcon: (
        <ReactCountryFlag
          countryCode="LV"
          svg
          style={{
            height: "12px",
          }}
          title="LV"
        />
      ),
      textKey: "leagueCard.nationalLeague",
    },
  ],
  link: "https://teniss.lat/",
  stats: [
    {
      icon: <TrophyIcon />,
      stat: "500+",
      nameKey: "leagueCard.tournaments",
    },
    {
      icon: <MembersIcon />,
      stat: "2000+",
      nameKey: "leagueCard.members",
    },
  ],
  organizer: {
    title: "LTS",
    avatar: "https://i.imgur.com/Tb7pS83.png",
  },
};

type TournamentTag = {
  variant: "primary" | "secondary";
  leftIcon?: ReactElement;
  text: string;
};

type TournamentStat = {
  icon: ReactElement;
  stat: string | number;
  nameKey: string;
};

type TournamentData = {
  link: string;
  type: "tournament";
  bannerSrc: string;
  logoSrc: string;
  title: { lv: string; en: string };
  date: string;
  location: string;
  countryCode: string;
  tags: TournamentTag[];
  stats: TournamentStat[];
  participants: string[];
  organizer: Organizer;
  participantsNames: string;
};
export const tournamentData: TournamentData = {
  link: "https://www.tournated.net/tournament/159/Oficial-La-Academia-%2C-14-de-junio-de-2024%2C-La-Academia%2C-Caguas?tab=general;",
  type: "tournament",
  bannerSrc:
    "https://ik.imagekit.io/f2uhfexvf/vertexo/84cc2f70-67a4-4d06-a803-8fcea7609462-download_zif41jJmN.png",
  logoSrc:
    "https://ik.imagekit.io/f2uhfexvf/vertexo/84cc2f70-67a4-4d06-a803-8fcea7609462-download_zif41jJmN.png",
  title: {
    lv: "OFICIAL LA ACADEMIA",
    en: "OFICIAL LA ACADEMIA",
  },
  date: "8-22.06.2024",
  location: "Cancha la Academia",
  countryCode: "PR",
  tags: [
    { variant: "primary", leftIcon: <TennisIcon />, text: "RANKIAOPR" },
    { variant: "secondary", text: "4.5 MD" },
    { variant: "secondary", text: "3.0 MD" },
    { variant: "secondary", text: "2.5 MD" },
    { variant: "secondary", text: "4.0 MD" },
    { variant: "secondary", text: "3.5 MD" },
    { variant: "secondary", text: "3.0 WD" },
    { variant: "secondary", text: "3.5+ WD" },
    { variant: "secondary", text: "2.5 WD" },
  ],
  stats: [
    { icon: <CategoriesIcon />, stat: 8, nameKey: "tournamentCard.Categories" },
    { icon: <EntriesIcon />, stat: 80, nameKey: "tournamentCard.Participants" },
  ],
  participants: [
    "https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692340130~exp=1692340730[%E2%80%A6]924b1b7c050412a0a18473166fc00772c5d26d463bf0462427103a45821a3",
    "https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692340130~exp=1692340730[%E2%80%A6]924b1b7c050412a0a18473166fc00772c5d26d463bf0462427103a45821a3",
    "https://img.freepik.com/free-icon/user_318-159711.jpg?t=st=1692340130~exp=1692340730[%E2%80%A6]924b1b7c050412a0a18473166fc00772c5d26d463bf0462427103a45821a3",
  ],
  participantsNames: "Vanessa, Elsa, Frances L",
  organizer: {
    title: "RANKIAOPR",
    avatar:
      "https://ik.imagekit.io/f2uhfexvf/vertexo/91cf4b15-1b88-4a07-8e61-5948c83a6335-cf56a162-a948-4eaf-b307-5528b1a17564-rankiaopr_safpPY8iG_fG5sfSJiN.png",
  },
};
