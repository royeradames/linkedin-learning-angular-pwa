import { TastingRating } from "./TastingRating";
import { PlaceLocation } from "./PlaceLocation";

export class Coffee {

    // Properties
    _id!: string;
    type!: string;
    rating!: number;
    notes!: string;
    tastingRating: TastingRating | null;

    constructor(public name: string = "",
                public place: string = "",
                public location: PlaceLocation | null = null) {

        this.location = new PlaceLocation();
        this.tastingRating = new TastingRating();
    }

}
