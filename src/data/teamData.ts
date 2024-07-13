import nick from "../views/About/Team/assets/nick.png";
import julia from "../views/About/Team/assets/julia.png";
import mihails from "../views/About/Team/assets/mihails.png";
import rob from "../views/About/Team/assets/rob.png";

type Social = {
  name: string;
  icon: string;
  link: string;
};

type TeamMember = {
  fullName: string;
  role: { en: string; lv: string };
  socials: Social[];
  photo: string;
};

type TeamData = TeamMember[];

export const teamData: TeamData = [
  {
    fullName: "Nikita Ribakovs",
    role: { en: "Founder & CEO", lv: "Dibinātājs un izpilddirektors" },
    socials: [
      {
        name: "LinkedIn",
        icon: "ti ti-brand-linkedin",
        link: "https://www.linkedin.com/in/nick-fisher-655865106/",
      },
      { name: "X", icon: "ti ti-brand-x", link: "https://x.com/nick_azero" },
      {
        name: "Instagram",
        icon: "ti ti-brand-instagram",
        link: "https://www.instagram.com/nikitaribakovs/",
      },
    ],
    photo: nick,
  },
  {
    fullName: "Julia Chubarova",
    role: { en: "CMO", lv: "Mārketinga vadītāja" },
    socials: [
      {
        name: "Instagram",
        icon: "ti ti-brand-instagram",
        link: "https://www.instagram.com/rrribakovs/",
      },
      {
        name: "LinkedIn",
        icon: "ti ti-brand-linkedin",
        link: "https://www.linkedin.com/in/julia-chubarova-3bb5b517a/",
      },
    ],
    photo: julia,
  },
  {
    fullName: "Roberts Ribakovs",
    role: { en: "IT Department Lead", lv: "IT nodaļas vadītājs" },
    socials: [
      {
        name: "LinkedIn",
        icon: "ti ti-brand-linkedin",
        link: "https://www.linkedin.com/in/roberts-ribakovs-81a33616a/",
      },
      {
        name: "Instagram",
        icon: "ti ti-brand-instagram",
        link: "https://www.instagram.com/rrribakovs/",
      },
      { name: "X", icon: "ti ti-brand-x", link: "https://x.com/rAskVAL" },
    ],
    photo: rob,
  },
  {
    fullName: "Mihails Samoilovs",
    role: { en: "Board Member", lv: "Valdes loceklis" },
    socials: [{ name: "Instagram", icon: "ti ti-brand-instagram", link: "" }],
    photo: mihails,
  },
];

export default teamData;
