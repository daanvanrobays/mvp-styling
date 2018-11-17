import { Injectable, HostListener, HostBinding } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"]
})

@Injectable()
export class LayoutComponent {
  @HostBinding('style.height.px') screenHeight: number;
  @HostBinding('style.width.px') screenWidth: number;

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor() {
    this.onResize();
  }
}
