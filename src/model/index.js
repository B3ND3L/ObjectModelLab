
/* TODO : Créer le modèle objet ici */

class Data {

}

class TimeSeries extends Data {
  constructor(values, labels) {
    super();
    this.values = values;
    this.labels = labels;
  }

  set value(values) {
    this.ts_values = values;
  }

  get values() {
    return this.ts_values;
  }

  set labels(labels) {
    this.ts_labels = labels;
  }

  get labels() {
    return this.ts_labels;
  }
}

class Datum extends Data {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    this.d_value = value;
  }

  get value() {
    return this.d_value;
  }
}

class Sensor {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  set id(id) {
    this.s_id = id;
  }

  get id() {
    return this.s_id;
  }

  set name(name) {
    this.s_name = name;
  }

  get name() {
    return this.s_name;
  }
}

console.log(new Sensor(1, 'yolo'));
