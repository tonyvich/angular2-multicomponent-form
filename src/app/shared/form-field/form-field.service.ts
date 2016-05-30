import { Injectable } from '@angular/core';
import { Validator } from './validator';
import { FormField, TextFormField, SelectFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name', '', '', [new Validator('required', 'Required..'), new Validator('minLength', 'minimum length should be 5', 5), new Validator('maxLength', 'maximum length should be 15', 15)]),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', 'Couple'),
        new TextFormField('input_age_user', 'Age', '', '', new Validator('custom', 'age must be between (min: 1 and max: 150)', ['^([1-9]|[1-9][0-9]|[1][0-4][0-9]|150)$']))
      ]
    },
    {
      section: 'step2',
      fields: [
        new TextFormField('input_number_of_children', 'Number of children', '0', '', new Validator('custom', 'must be between (min: 0 - max: 9)', '^([0-9])$')),
        new TextFormField('input_savings', 'Savings', '', 'Total savings you currently have', new Validator('custom', 'The savings needs to be a number greater than zero.', ['^([1-9][0-9]*)$'])),
        new TextFormField('input_dependants', 'Number of Dependants', '', '', new Validator('custom', 'must be between 0 - 9', '^([0-9])$'))
      ]
    }];
  }

}
