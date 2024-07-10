export type Partner = {
  id: number;
  name: string;
  logo: string;
  url: string;
};

export const partners: Partner[] = [
  {
    id: 1,
    name: "Vertexo",
    logo: "https://i.imgur.com/WoKBpIY.png",
    url: "https://vertexo.net",
  },
  {
    id: 2,
    name: "Gan Bei",
    logo: "https://static.tildacdn.biz/tild3038-3263-4532-b836-613439356662/Logo_GanBei_1080x378.png",
    url: "https://ganbei.lv",
  },
];

export const powering: Partner[] = [
  {
    id: 1,
    name: "LTS",
    logo: "https://i.imgur.com/2hVEm2e.png",
    url: "https://teniss.lat",
  },
];
