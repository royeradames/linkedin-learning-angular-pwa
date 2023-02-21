import {TastingRating} from "./TastingRating";
import {PlaceLocation} from "./PlaceLocation";

export class Coffee {

  // Properties
  type: string = ""
  rating: number = 0
  notes: string = ""
  tastingRating: TastingRating | null = null

  constructor(public name: string = "", public place: string = "", public location: PlaceLocation = new PlaceLocation()) {

  }

}
