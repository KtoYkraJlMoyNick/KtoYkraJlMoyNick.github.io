// сервис infoBlock
filterApp.service('infoBlock', function() {
  var _item = {
        "name" : "item1",
        "flags": [
          "heart",
      		"flower",
      		"flash",
      		"sun"
        ]
      };

  return {
    setInfo: function(item) {
      _item.name = item.name;
      _item.flags = item.flags;
    },
    getInfo: function() {
      return _item;
    }
  }
})
