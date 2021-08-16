import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const PUBLIC_COMPONENTS = [];
const PUBLIC_DIRECTIVES = [];
const PUBLIC_PIPES = [];

@NgModule({
  declarations: [
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
  ],
})
export class SharedModule { }
