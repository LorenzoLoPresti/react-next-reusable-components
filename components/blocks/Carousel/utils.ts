

import { space } from "postcss/lib/list";
import img1 from "../../../public/assets/bottomCarouselImgs/img1.svg";
import img2 from "../../../public/assets/bottomCarouselImgs/img2.svg";
import img3 from "../../../public/assets/bottomCarouselImgs/img3.svg";

export const paragraphText =
  "Un partner affidabile per le aziende che operano nel mondo dell'industria alimentare, una presenza diffusa con un ampio raggio di azione. La nostra gamma di prodotti ci consente di coprire diversi settori di competenza.";

export const items: Items[] = [
    {
    id: "space",
    src: img1,
    button: "space"
    }
]

interface Items {
    id:string,
    src:string,
    button: string
}