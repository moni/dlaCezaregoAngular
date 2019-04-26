import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePickerComponent {

  @Output() onSelectValue = new EventEmitter<{ dateFrom: Date, dateTo: Date }>();
  public dateFrom: Date;
  public dateTo: Date;

  onDateChange(): void {
    this.onSelectValue.emit({dateFrom: this.dateFrom, dateTo: this.dateTo});
  }
}
