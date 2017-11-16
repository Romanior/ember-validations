import Ember from 'ember';

const {
  A: emberArray,
  Object: EmberObject,
  get,
  set
} = Ember;

export default EmberObject.extend({
  init() {
    this._super(...arguments);
    let { _validators } = this;

    _validators.forEach((validator) => {
      if (!get(this, validator.property)) {
        set(this, validator.property, emberArray());
      }
    })
  },
});
