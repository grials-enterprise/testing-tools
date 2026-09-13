import { model, Schema } from 'mongoose';
import { EXECUTE } from '../setup';
/*
const whiteList = ['practitionerMedicalBoard', 'specimenType'];

describe('mock', function () {
  if (EXECUTE !== '2' && EXECUTE !== 'ALL') {
    console.log('skipping containers tests');
    return;
  }
  this.timeout(60000);
  let ajv: any;

  before(() => {
    const hl7Module = require('@pegasimed.com/hl7-dev');
    ajv = hl7Module.startSchemasValidators();
  });

  it('suecces, schema validator', () => {
    const mocks = require('../../src/mocks');
    const hl7Module = require('@pegasimed.com/hl7-dev');
    const keys = Object.keys(mocks)
      .map((item) => item.replace('Mock', ''))
      .sort();

    for (const key of keys) {
      const schemaValidator = hl7Module[`${key}SchemaValidator`];
      if (!schemaValidator) {
        throw `SchemaValidator not found for ${key}`;
      }
      try {
        const propertiesInSchema = Object.keys(schemaValidator.properties);
        const propertiesInMock = Object.keys(mocks[`${key}Mock`]);
        for (const property of propertiesInSchema) {
          if (!propertiesInMock.includes(property)) {
            console.log(`Property ${property} not found in ${key}Mock`);
            // throw `Property ${property} not found in ${key}Mock`;
          }
        }
      } catch (error) {
        throw `invalid schema validator for ${key}Mock | errors => ${error}`;
      }
      try {
        ajv.validateData(schemaValidator.$id, mocks[`${key}Mock`]);
      } catch (error: any) {
        console.log(error.errors);
        throw `invalid schema validator for ${key}Mock | errors => ${JSON.stringify(error.errors)}`;
      }
    }
  });

  it('suecces, schema definition', async () => {
    const mocks = require('../../src/mocks');
    const hl7Module = require('@pegasimed.com/hl7-dev');
    const keys = Object.keys(mocks)
      .map((item) => item.replace('Mock', ''))
      .sort();

    for (const key of keys) {
      if (whiteList.includes(key)) {
        continue;
      }
      const schemaValidator = hl7Module[`${key}SchemaValidator`];
      const schemaDefinition = hl7Module[`${key}SchemaDefinition`];
      if (!schemaDefinition) {
        throw `SchemaDefinition not found for ${key}`;
      }
      try {
        const schemaModel = new Schema(schemaDefinition, {
          timestamps: true,
          strict: false,
        });
        const testModel = model(key, schemaModel);
        const modelSave = await testModel
          .create(mocks[`${key}Mock`])
          .then((data) => JSON.parse(JSON.stringify(data.toJSON())));

        try {
          ajv.validateData(schemaValidator.$id, modelSave);
        } catch (error: any) {
          console.log(error.errors);
          throw `invalid schema validator for ${key}Mock | errors => ${JSON.stringify(error.errors)}`;
        }
      } catch (error: any) {
        console.log(error);
        throw `invalid schema definition for ${key}Mock | errors => ${error}`;
      }
    }
  });
});
*/
