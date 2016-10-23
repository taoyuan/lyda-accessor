"use strict";

const Promise = require('bluebird');
const g = require('./globalize');
const Accessor = require('./accessor');
const {DataSource} = require('loopback-datasource-juggler');

class JugglerAccessor extends Accessor {

  constructor(name, settings) {
    super(name, settings);
    this.ds = new DataSource(name, settings);
    this.connector = this.ds.connector;
  }

  connect() {
    return Promise.fromCallback(cb => this.ds.connect(cb));
  }

  disconnect() {
    return Promise.fromCallback(cb => this.ds.disconnect(cb));
  }

  discoverResources(options) {
    throw new Error(g.f('discoverResources() must be implemented by the connector'));
  }

  discoverSchemas(resourceName, options) {
    throw new Error(g.f('discoverSchemas() must be implemented by the connector'));
  }

  aggregate(query, options) {
    throw new Error(g.f('aggregate() must be implemented by the connector'));
  }
}

module.exports = JugglerAccessor;
