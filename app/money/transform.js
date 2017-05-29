import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {

    return Number(serialized/100).toFixed(2);
  },

  serialize(deserialized) {
  	if (typeof deserialized.replace == "function") {
	    return Math.round(deserialized.replace(/[^\d\.\-eE+]/g, "")*100);
  	} else {
  		return deserialized/100;
  	}
  }
});