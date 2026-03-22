interface ProjectUrl {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  date: string;
  subtext: string;
  longDescription?: string;
  url?: string;
  urls?: ProjectUrl[];
}