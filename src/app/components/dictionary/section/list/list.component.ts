import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section-list',
  imports: [],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
