'use strict';
const uuid = require('node-uuid');

const newAccountEntry = () => {
  return {
    accountNumber: uuid.v1(),
    tenantId: '593709f02ad06137df88fc09',
  };
};

const newAccountEntryMissingAccountNumber = () => {
  let acc = newAccountEntry();
  acc.accountNumber = null;
  return acc;
};

const newAccountEntryMissingTenantId = () => {
  let acc = newAccountEntry();
  acc.tenantId = null;
  return acc;
};

const newAccountEntryInvalidId = () => {
  let acc = newAccountEntry();
  acc.id = '11213dr';
  return acc;
};

const newAccountEntryInvalidTenantId = () => {
  let acc = newAccountEntry();
  acc.tenantId = '3e2qd3';
};

module.exports.newAccountEntry = newAccountEntry;
module.exports.newAccountEntryMissingAccountNumber = newAccountEntryMissingAccountNumber;
module.exports.newAccountEntryInvalidId = newAccountEntryInvalidId;
module.exports.newAccountEntryInvalidTenantId = newAccountEntryInvalidTenantId;
module.exports.newAccountEntryMissingTenantId = newAccountEntryMissingTenantId;
