import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActionConfig, TableColumn, TableProperties } from '../models/table.model';

@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule, DatePipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent {
  /**
   * Form control for the search input.
   * This control is used to filter the table data based on user input.
   */
  searchControl: FormControl = new FormControl(null);
  /**
   * Table properties to configure the table's appearance and behavior.
   * @type {TableProperties}
   */
  @Input() tableProperties: TableProperties = { hovered: false, tableStyle: 'default', search: false };
  /**
   * Array of action configurations for the table.
   */
  @Input() actions!: ActionConfig[];
  /**
   * Array of table columns to define the structure of the table.
   */
  @Input() columns!: TableColumn[];
  /**
   * Array of data to be displayed in the table.
   */
  @Input() tableData: any = []
  /**
   * The column to sort the table by.
   */
  sortColumn: string = '';
  /**
   * The direction of the sort operation, either ascending ('asc') or descending ('desc').
   */
  sortDirection: 'asc' | 'desc' = 'asc';

  /**
   * @param sanitizer The DomSanitizer service is used to sanitize HTML content to prevent security vulnerabilities such as XSS (Cross-Site Scripting) attacks.
   */
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * This method uses Angular's DomSanitizer to sanitize the HTML content and return a SafeHtml object.
   * @param content The HTML content to be sanitized.
   * @returns A SafeHtml object that can be safely used in Angular templates.
   */
  getSanitizedHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
  /**
   * This method toggles the sort direction if the same column is clicked again;
   * @param column The column key to sort the table data by.
   */
  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.tableData.sort((a: any, b: any) => {
      const valueA = a[column].toLowerCase?.() ?? a[column];
      const valueB = b[column].toLowerCase?.() ?? b[column];
      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  /**
   * This method returns the CSS class for the image element based on the size and shape properties of the item.
   * @param item The item object containing properties for the image.
   * @returns  A string containing CSS classes for the image element based on its size and shape.
   */
  getImageClass(item: any): string {
    const size = item.size === 'sm' ? 'w-8 h-8' : item.size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
    const shape = item.shape === 'circle' ? 'rounded-full' : item.shape === 'square' ? 'rounded' : '';
    return `${size} ${shape}`;
  }
  /**
   * This method returns the CSS class for the layout type of a column item.
   * @param layout The layout type to determine the CSS class.
   * @returns A string containing the CSS class for the specified layout type.
   */
  getLayoutClass(layout: string): string {
    switch (layout) {
      case 'horizontal': return 'd-flex flex-row gap-2';
      case 'vertical': return 'd-flex flex-column';
      default: return '';
    }
  }
  /**
   * Retrieves a nested property value from an object using a dot-separated key path.
   * @param data - The object to search in.
   * @param key - Dot-separated string representing the property path (e.g., "user.profile.name").
   * @returns The value at the given path or '-' if not found.
   */
  findObjectByLabel(data: any, key: string): any {
    const path = key.split('.');
    let current = data;
    for (const segment of path) {
      if (current && typeof current === 'object' && segment in current) {
        current = current[segment];
      } else {
        return '-';
      }
    }
    return current;
  }
  /**
   * This method checks the type against predefined styles and returns the appropriate class.
   * @param type The type of table style to retrieve the corresponding CSS class.
   * @returns A string containing the CSS class for the specified table style type.
   */
  getTableStyle(type: string | undefined) {
    const tableStyles = [
      { type: 'bordered', class: 'table-bordered' },
      { type: 'striped', class: 'table-striped' },
      { type: 'hover', class: 'table-hover' },
    ];
    const table = tableStyles.find(x => x.type === type);
    return table ? table.class : '';
  }
}