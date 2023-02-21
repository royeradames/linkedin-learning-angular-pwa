import {TastingRating} from "./TastingRating";
import {PlaceLocation} from "./PlaceLocation";

export class Coffee {

  // Properties
  type = ""
  rating = 0
  notes = ""


  constructor(public name: string = "",
              public place: string = "",
              public location: PlaceLocation = new PlaceLocation(),
              public tastingRating: TastingRating = new TastingRating()) {

  }

}
