import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if(!serialized || serialized.indexOf("/") != -1) {
      return serialized;
    }
    return moment(serialized, "YYYY-MM-DD").format("MM/DD/YYYY");
  },

  serialize(deserialized) {
    if(!deserialized) {
      return deserialized;
    }
    
    return moment(deserialized, "MM/DD/YYYY").format("YYYY-MM-DD");
  }
});
