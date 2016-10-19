
/* TODO : Créer le modèle objet ici */

class Data {}

class TimeSeries extends Data {
  constructor(id, name, values, labels) {
    super(id, name);
    this.values = values;
    this.labels = labels;
  }
}

class Datum extends Data {
  constructor(id, name, value) {
    super(id, name);
    this.value = value;
  }
}

class Sensor {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }
}
