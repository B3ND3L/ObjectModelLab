import expect from 'expect';

// import { ??? } from '../../src/model';
import { Sensor, TimeSeries, Datum, typeEnum } from '../../src/model';
import { data } from './sensors_data';

describe('Sensor model tests', () => {
  /* TODO: Ecrire ici la suite de tests pourle modèle objet.*/
  describe('TimeSeries tests', () => {
    it('Test 1 : Good values', () => {
      expect(() => {
        const s = new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']);
      }).toNotThrow(/Integer needed/);
    });
    it('Test 2 : Good labels', () => {
      expect(() => {
        const s = new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']);
      }).toNotThrow(/String needed/);
    });
    it('Test 3 : Bad values', () => {
      expect(() => {
        const s = new TimeSeries([4, 'coucou', 6, 7], ['un', 'deux', 'trois', 'quatre']);
      }).toThrow(/Integer Needed/);
    });
    it('Test 4 : Bad labels', () => {
      expect(() => {
        const s = new TimeSeries([4, 5, 6, 7], ['un', 2, 'trois', 'quatre']);
      }).toThrow(/String Needed/);
    });
    it('Test 5 : values is not an array', () => {
      expect(() => {
        const s = new TimeSeries(6, ['un', 2, 'trois', 'quatre']);
      }).toThrow(/Not an Array/);
    });
    it('Test 6 : labels is not an array', () => {
      expect(() => {
        const s = new TimeSeries([4, 5, 6, 7], 'coucou');
      }).toThrow(/Not an Array/);
    });
  });
  describe('Datum tests', () => {
    it('Test 1 : Value is an Integer', () => {
      expect(() => {
        const s = new Datum(5);
      }).toNotThrow(/Integer needed/);
    });
    it('Test 2 : Value is not an Integer', () => {
      expect(() => {
        const s = new Datum('coucou');
      }).toThrow(/Integer Needed/);
    });
    it('Test 3 : Value is an Integer\'s Array', () => {
      expect(() => {
        const s = new Datum([1]);
      }).toThrow(/Integer Needed/);
    });
  });
  describe('Sensors tests', () => {
    it('Test 1 : Simple door sensor', () => {
      expect(() => {
        const s = new Sensor();
      }).toNotThrow(Error);
    });
    it('Test 2 : Simple Temperature sensor', () => {
      expect(() => {
        const s = new Sensor();
        s.id = '42'; s.name = 'the answer';
        s.data = new Datum(0); s.type = 'DOOR';
      }).toNotThrow(Error);
    });
    it('Test 3 : Bad data', () => {
      expect(() => {
        const s = new Sensor();
        s.data = 42;
      }).toThrow(/Data Needed/);
    });
    it('Test 4 : Bad id', () => {
      expect(() => {
        const s = new Sensor();
        s.id = 42;
      }).toThrow(/String Needed/);
    });
    it('Test 5 : Bad name', () => {
      expect(() => {
        const s = new Sensor();
        s.name = 42;
      }).toThrow(/String Needed/);
    });
    it('Test 6 : Bad type', () => {
      expect(() => {
        const s = new Sensor();
        s.type = 'QUARANTE DEUX';
      }).toThrow(/Unknown Type/);
    });
  });
  //TODO faire test pour le JSON
  /*describe('Sensors_data tests', () => {
    it('Test 1 : Value is an Integer', () => {
      expect(() => {
        const s = Sensor.parseJSON();
      }).toNotThrow(Error);
    });
  });*/
});
