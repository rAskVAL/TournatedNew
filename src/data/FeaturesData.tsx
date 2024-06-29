import list from "../assets/features/list.png";
import league from "../assets/features/leagues.png";
import entries from "../assets/features/entry.png";
import groups from "../assets/features/groups.png";
import results from "../assets/features/final.png";
import analytics from "../assets/features/analytics.png";

export default [
  {
    title: {
      en: "Customize your League",
      lv: "Pielāgojiet savu līgu",
    },
    description: {
      en: "Setup your team, licences, tournament & ranking categories, points scoring system, photo gallery and more.",
      lv: "Iestatiet savu komandu, licences, turnīru un vērtēšanas kategorijas, punktu skaitīšanas sistēmu, foto galeriju un daudz ko citu.",
    },
    banner: league,
    centered: false,
  },
  {
    title: {
      en: "Entry Management",
      lv: "Ieejas pārvaldība",
    },
    description: {
      en: "Manage entries in couple clicks, accept online payments, set up additional questions, provide promo codes and discounts, and more.",
      lv: "Pārvaldiet ierakstus ar pāris klikšķiem, pieņemiet tiešsaistes maksājumus, iestatiet papildu jautājumus, piedāvājiet reklāmas kodus un atlaides, un daudz ko citu.",
    },
    banner: entries,
    centered: false,
  },
  {
    title: {
      en: "Groups, Draws and OOP",
      lv: "Grupas, izlozes un OOP",
    },
    description: {
      en: "Automatically generate brackets and schedule for all categories under 5 seconds. Main draw, consolation and consolation. Multiple formats. Fully automated.",
      lv: "Automātiski ģenerējiet tabulas un grafikus visām kategorijām zem 5 sekundēm. Galvenā izloze, mierinājuma un mierinājuma. Vairāki formāti. Pilnībā automatizēts.",
    },
    banner: groups,
    centered: false,
  },
  {
    title: {
      en: "List & Results, Pairings, Standings",
      lv: "Saraksts un rezultāti, pāri, stāvokļi",
    },
    description: {
      en: "Tournated is ready for (almost) any sport. Features include generation of lists and results with custom metrics, pairings in swiss system and final standings.",
      lv: "Tournated ir gatavs (gandrīz) jebkuram sportam. Funkcijas ietver sarakstu un rezultātu ģenerēšanu ar pielāgotiem rādītājiem, pārus Šveices sistēmā un galīgos rezultātus.",
    },
    banner: list,
    centered: true,
  },
  {
    title: {
      en: "Final Results & Rankings",
      lv: "Galīgie rezultāti un vērtējumi",
    },
    description: {
      en: "Based on your point system and ranking rules, the final standings are automatically taken from the brackets and updated with one click.",
      lv: "Pamatojoties uz jūsu punktu sistēmu un vērtēšanas noteikumiem, galīgie rezultāti tiek automātiski ņemti no tabulām un atjaunināti ar vienu klikšķi.",
    },
    banner: results,
    centered: false,
  },
  {
    title: {
      en: "Analytics",
      lv: "Analītika",
    },
    description: {
      en: "Track all financial transactions and performance metrics with Tournated Analytics.",
      lv: "Izsekojiet visus finanšu darījumus un veiktspējas rādītājus ar Tournated Analytics.",
    },
    banner: analytics,
    centered: false,
  },
];
