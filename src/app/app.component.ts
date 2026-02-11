import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { CtaComponent } from "./components/cta/cta.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GlobalLoaderComponent } from "./components/global-loader/global-loader.component";
import { GlobalToastComponent } from "./components/global-toast/global-toast.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, CtaComponent, PricingComponent, FeaturesComponent, HeroComponent, NavbarComponent, GlobalLoaderComponent, GlobalToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zyct-landing';
}
