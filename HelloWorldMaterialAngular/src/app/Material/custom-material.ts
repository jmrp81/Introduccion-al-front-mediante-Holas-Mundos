import { NgModule } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

// imports material
import {
    MatToolbarModule, MatSidenavModule, MatGridListModule, MatIconRegistry
  } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ]
})
export class CustomMaterial {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'earthIcon',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/images/earth.svg'));
            iconRegistry.addSvgIcon(
            'helloIcon',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/images/hello.svg'));
      }
}
