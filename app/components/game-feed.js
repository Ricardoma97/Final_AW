import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameFeedComponent extends Component {
  @tracked state={
  	selectedOption : 3
  }
  
  @action
  setSelection(selectedOption) {
  	selectedOption=Ember.String.w(selectedOption);
      console.log(selectedOption[0])
      this.state={
      	selectedOption : parseInt(selectedOption[0])
      }
      console.log(this.state.selectedOption)
    }
  
  }

