import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {NewsService} from '../../news.service';

@Component({
  selector: 'app-sources-multi-select-dropdown',
  templateUrl: './sources-multi-select-dropdown.component.html',
  styleUrls: ['./sources-multi-select-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SourcesMultiSelectDropdownComponent implements OnInit {
  @Output() sources = new EventEmitter<string>();
  public newsSourcesNames: Array<object> = [];
  public selectedNewsSourcesNames: Array<object> = [];
  public dropdownSettings: object = {};
  public multiSelectForm: FormGroup;

  constructor(private newsService: NewsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.newsService.getNewsSourcesNames().subscribe(sourcesNames => {
      const names = sourcesNames as Array<string>;
      this.newsSourcesNames = names.map((name, idx) => ({item_id: idx, item_text: name}));
      this.selectedNewsSourcesNames = this.newsSourcesNames;
      this.multiSelectForm = this.fb.group({
        newsSourceNames: [this.selectedNewsSourcesNames]
      });
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'Zaznacz Wszystkie',
      unSelectAllText: 'Odznacz Wszystkie',
      itemsShowLimit: 3,
    };
  }

  onItemSelect(item: { item_id: string, item_text: string }): void {
    this.selectedNewsSourcesNames.push(item);
    this.changeSources();
  }

  onItemDeSelect(item: { item_id: string, item_text: string }): void {
    const itemIndex = this.selectedNewsSourcesNames.map((source: { item_id: string, item_text: string }) => source.item_id).indexOf(item.item_id);
    this.selectedNewsSourcesNames.splice(itemIndex, 1);
    this.changeSources();
  }

  onSelectAll(): void {
    this.selectedNewsSourcesNames = this.newsSourcesNames;
    this.changeSources();
  }

  onDeSelectAll(): void {
    this.selectedNewsSourcesNames = [{item_id: '', item_text: ''}];
    this.changeSources();
  }

  formatSourcesNamesToRequest(): string {
    return this.selectedNewsSourcesNames
      .map((item: { item_id: string, item_text: string }) => item.item_text
        .valueOf())
      .toString();
  }

  changeSources(): void {
    const sourcesNames = this.formatSourcesNamesToRequest();
    this.sources.emit(sourcesNames);
  }
}
