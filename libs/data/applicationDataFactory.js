'use strict';

const newApplicationEntry = (clientId, clientSecret) => {
  return {
    locale: 'en-US',
    name: 'MyApplication',
    status: 'Live',
    apiKey: clientId,
    apiSecret: clientSecret,
    accountId: '593709f02ad06137df88fc09',
    tenantId: '593709f02ad06137df88fc09',
    scope: ['all'],
  };
};

const newApplicationEntryMissingName = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.name = null;
  return app;
};

const newApplicationEntryMissingStatus = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.status = null;
  return app;
};

const newApplicationEntryMissingScope = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.scope = null;
  return app;
}

const newApplicationEntryMissingAccountId = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.accountId = null;
  return app;
}

const newApplicationEntryInvalidAccountId = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.accountId = '2222323';
  return app;
}

const newApplicationEntryMissingTenantId = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.tenantId = null;
  return app;
}

const newApplicationEntryInvalidTenantId = (clientId, clientSecret) => {
  let app = newApplicationEntry(clientId, clientSecret);
  app.tenantId = '2222323';
  return app;
}

exports.newApplicationEntry = newApplicationEntry;
exports.newApplicationEntryMissingAccountId = newApplicationEntryMissingAccountId;
exports.newApplicationEntryMissingTenantId = newApplicationEntryMissingTenantId;
exports.newApplicationEntryInvalidAccountId = newApplicationEntryInvalidAccountId;
exports.newApplicationEntryInvalidTenantId = newApplicationEntryInvalidTenantId;
exports.newApplicationEntryMissingName = newApplicationEntryMissingName;
exports.newApplicationEntryMissingScope = newApplicationEntryMissingScope;
exports.newApplicationEntryMissingStatus = newApplicationEntryMissingStatus;
