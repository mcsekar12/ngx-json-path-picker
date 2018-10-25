import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

export interface Segment {
  key: string;
  value: any;
  type: undefined | string;
  description: string;
  expanded: boolean;
}

@Component({
  selector: 'ngx-json-path-picker',
  templateUrl: './json-path-picker.component.html',
  styleUrls: ['./json-path-picker.component.scss']
})
export class JsonPathPickerComponent implements OnChanges {
  @Output()
  key = new EventEmitter<string>();

  @Input()
  json: any = {
    'simple key': 'simple value',
    numbers: 1234567,
    'simple list': ['value1', 22222, 'value3'],
    owner: null,
    'simple obect': {
      'simple key': 'simple value',
      numbers: 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        key1: 'value1',
        key2: 22222,
        key3: 'value3'
      }
    }
  };
  @Input()
  expanded = true;
  /**
   * @deprecated It will be always true and deleted in version 3.0.0
   */
  @Input()
  cleanOnChange = true;

  segments: Segment[] = [];

  ngOnChanges() {
    if (this.cleanOnChange) {
      this.segments = [];
    }

    if (typeof this.json === 'object') {
      Object.keys(this.json).forEach(key => {
        this.segments.push(this.parseKeyValue(key, this.json[key]));
      });
    }
  }

  isExpandable(segment: Segment) {
    return segment.type === 'object' || segment.type === 'array';
  }

  toggle(segment: Segment) {
    if (this.isExpandable(segment)) {
      segment.expanded = !segment.expanded;
    }
  }

  private parseKeyValue(key: any, value: any): Segment {
    const segment: Segment = {
      key: key,
      value: value,
      type: undefined,
      description: '' + value,
      expanded: this.expanded
    };

    switch (typeof segment.value) {
      case 'number': {
        segment.type = 'number';
        break;
      }
      case 'boolean': {
        segment.type = 'boolean';
        break;
      }
      case 'function': {
        segment.type = 'function';
        break;
      }
      case 'string': {
        segment.type = 'string';
        segment.description = '"' + segment.value + '"';
        break;
      }
      case 'undefined': {
        segment.type = 'undefined';
        segment.description = 'undefined';
        break;
      }
      case 'object': {
        // yea, null is object
        if (segment.value === null) {
          segment.type = 'null';
          segment.description = 'null';
        } else if (Array.isArray(segment.value)) {
          segment.type = 'array';
          segment.description =
            'Array[' +
            segment.value.length +
            '] ' +
            JSON.stringify(segment.value);
        } else if (segment.value instanceof Date) {
          segment.type = 'date';
        } else {
          segment.type = 'object';
          segment.description = 'Object ' + JSON.stringify(segment.value);
        }
        break;
      }
    }

    return segment;
  }

  selectKey(key) {
    key = key.replace('.[', '[');
    const keys = key.split('.');
    if (!isNaN(keys[0])) {
      keys[0] = `[${keys[0]}]`;
    }
    this.key.emit(keys.join('.'));
  }
  keySelect(event) {
    this.selectKey(event);
  }
}
