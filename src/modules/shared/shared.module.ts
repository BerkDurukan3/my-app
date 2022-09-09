import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { InputTextComponent } from './components/input-text/input-text.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [InputBoxComponent, DropdownComponent, InputTextComponent, IconBoxComponent],
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,MatIconModule],
  exports: [InputBoxComponent, DropdownComponent, InputTextComponent, IconBoxComponent],
})
export class SharedModule {}
