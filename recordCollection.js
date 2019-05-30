
var collection = {
  "1985": {
    "album": "hadaad diido hadalkeyga",
    "artist": "Xassan Adan",
    "tracks": [
      "jaceyl","qaraami"
    ]
  },
  "2009": {
    "album": "barni",
    "artist": "Ahmed Biif",
    "tracks": [
      "12008",
      "casri"
    ]
  },
  "1879": {
    "artist": "muxidin",
    "tracks": []
  },
  "1999": {
    "album": "nebidaa naas lanuuge leh"
  }
};

// keeping a copy of the original collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateCollection (id, prop, value) {
  if (value === ""){
    delete collection[id][prop];
  }
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][id] || [];
    collection[id][prop].push(value);

  }
  else {
    collection[id][prop] = value;
  }

  return collection;
};
updateCollection(1999,"tracks","AMAANDHOOREY")
console.log(updateCollection(1999,"artist","Djabouti"));
