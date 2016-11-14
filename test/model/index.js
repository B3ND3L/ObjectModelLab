import expect from 'expect';

// import { ??? } from '../../src/model';
import { Sensor, TimeSeries, Datum, Types, Parser } from '../../src/model';
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
        const s = new Sensor(42, 'theAnswer', new Datum(0), 'DOOR');
      }).toNotThrow(Error);
    });
    it('Test 2 : Simple Temperature sensor', () => {
      expect(() => {
        const s = new Sensor(42, 'theAnswer', new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']), 'TEMPERATURE');
      }).toNotThrow(Error);
    });
    it('Test 3 : Bad data', () => {
      expect(() => {
        const s = new Sensor(42, 'theAnswer', 8, 'TEMPERATURE');
      }).toThrow(/Data Needed/);
    });
    it('Test 4 : Bad id', () => {
      expect(() => {
        const s = new Sensor('42', 'theAnswer', new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']), 'TEMPERATURE');
      }).toThrow(/Integer Needed/);
    });
    it('Test 5 : Bad name', () => {
      expect(() => {
        const s = new Sensor(42, 42, new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']), 'TEMPERATURE');
      }).toThrow(/String Needed/);
    });
    it('Test 6 : Bad type', () => {
      expect(() => {
        const s = new Sensor(42, 'theAnswer', new TimeSeries([4, 5, 6, 7], ['un', 'deux', 'trois', 'quatre']), 'ELEVATOR');
      }).toThrow(/Unknown Type/);
    });
  });
  describe('Sensors_data tests', () => {
    it('Test 1 : Good TEMPERATURE Parsing', () => {
      expect(() => {
        const p = new Parser(data[0]);
        const s = p.makeSensor();
      }).toNotThrow(Error);
    });
    it('Test 2 : Good DOOR Parsing', () => {
      expect(() => {
        const p = new Parser(data[1]);
        const s = p.makeSensor();
      }).toNotThrow(Error);
    });
    it('Test 3 : Good FAN_SPEED Parsing', () => {
      expect(() => {
        const p = new Parser(data[2]);
        const s = p.makeSensor();
      }).toNotThrow(Error);
    });
    it('Test 4 :Bad Data Parsing', () => {
      expect(() => {
        const p = new Parser(data[3]);
        const s = p.makeSensor();
      }).toThrow(/Data Needed/);
    });
  });
});
