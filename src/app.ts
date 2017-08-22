import {LazyLoaded} from "./lazy-loaded";
import {autoinject, lazy, inject, Lazy} from "aurelia-dependency-injection";


// @inject(Lazy.of(LazyLoaded)) // this works
@autoinject                     // this doesn't
export class App {
  message = 'Hello World!';

  constructor(@lazy(LazyLoaded) private lazyLoaded: () => LazyLoaded) {
    setTimeout(() => this.beLazy(), 300)
  }

  private beLazy() {
    console.log("I'm lazy!");
    this.lazyLoaded().foo();
  }
}
