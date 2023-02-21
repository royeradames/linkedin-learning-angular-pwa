import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Coffee } from "../logic/Coffee";
import { GeolocationService } from "../geolocation.service";
import { TastingRating } from "../logic/TastingRating";
import { DataService } from "../data.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {

  coffeeForm!: FormGroup;
  coffee!: Coffee;
  tastingEnabled: boolean = false;
  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
  ) { }
  routingSubscription: Subscription = new Subscription();

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  onCancel() {
    this.router.navigate(["/"]);
  }

  onSave() {
    const formData = this.coffeeForm.value;
    this.coffee = { ...this.coffee, ...formData };
    this.data.save(this.coffee, (result: any) => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit() {
    this.coffee = new Coffee();
    this.initForm();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if (params["id"]) {
          this.data.get(params["id"], (response: any) => {
            this.coffee = response;
            this.initForm();
            if (this.coffee.tastingRating) {
              this.tastingEnabled = true;
            }
          });
        }
      });
    this.geolocation.requestLocation((location: any) => {
      if (!location) return;
      if (!this.coffee.location || !this.coffee.location) return;
      this.coffee.location.latitude = location.latitude;
      this.coffee.location.longitude = location.longitude;
      this.initForm();
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

  private initForm() {
    const location = this.coffee.location ?? { address: null, city: null, latitude: null, longitude: null };
    const tastingRating = this.coffee.tastingRating ?? { aroma: null, flavor: null, intensity: null, sweetness: null, aftertaste: null };
    this.coffeeForm = new FormGroup({
      name: new FormControl(this.coffee.name),
      type: new FormControl(this.coffee.type),
      place: new FormControl(this.coffee.place),
      address: new FormControl(location.address),
      city: new FormControl(location.city),
      rating: new FormControl(this.coffee.rating),
      notes: new FormControl(this.coffee.notes),
      tastingEnabled: new FormControl(this.tastingEnabled),
      tastingRating: new FormGroup({
        aromaRating: new FormControl(tastingRating.aroma),
        flavorRating: new FormControl(tastingRating.flavor),
        intensityRating: new FormControl(tastingRating.intensity),
        sweetnessRating: new FormControl(tastingRating.sweetness),
        aftertasteRating: new FormControl(tastingRating.aftertaste)
      })
    });
  }

}

