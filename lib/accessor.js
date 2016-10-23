"use strict";

var g = require('./globalize');

class Accessor {

  constructor(name, settings) {
    this.name = name;
    this.settings = settings;
  }

  connect() {
    throw new Error(g.f('connect() must be implemented by the connector'));
  }

  disconnect() {
    throw new Error(g.f('disconnect() must be implemented by the connector'));
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

module.exports = Accessor;
