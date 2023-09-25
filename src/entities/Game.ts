import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  rating: number;
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
