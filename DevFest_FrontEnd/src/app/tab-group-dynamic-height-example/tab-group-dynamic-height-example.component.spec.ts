import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupDynamicHeightExample {}

