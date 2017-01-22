'use strict';

/**
 * The Undertaker class.
 * @external Undertaker
 * @see https://www.npmjs.com/package/undertaker
 */

/** The Undertaker Registry class. */
const UndertakerRegistry = require('undertaker-registry');

/**
 * Class representing a task registry.
 * @extends UndertakerRegistry
 */
class TasksRegistry extends UndertakerRegistry {

  /**
   * Create a task registry.
   * @param {string=} namespace - An optional namespace to prefix task names
   * with.
   * @param {object} opts - A set of options to pass to each registered task.
   */
  constructor(namespace, opts) {
    super();

    /**
     * The namespace is optional:
     */

    if (!opts) {
      opts = namespace || {};
      namespace = '';
    }

    /**
     * If the namespace was passed in as an option then it takes priority:
     */

    opts.namespace = opts.namespace || namespace;

    /**
     * If there's a namespace for this registry then create a prefix from it:
     */

    opts.prefix = (opts.namespace !== '') ? opts.namespace + ':' : '';

    /**
     * Make the options available to all tasks in this registry:
     */

    let defaults = {};

    this.opts = Object.assign({}, defaults, opts);
  }

  /**
   * Initialise the task registry.
   * @param {external:Undertaker} taker - The Undertaker object that this
   * registry is being attached to.
   */
  init(taker) {
    /**
     * Get the original options:
     */

    let opts = this.opts;

    /**
     * Register a task with the provided prefix:
     */

    taker.task(opts.prefix + 'mytask', (cb) => {
      console.log('Ran', opts.prefix + 'mytask', 'with options:', opts);
      cb();
    });

    /**
     * Set a default task. This will be either the namespace or 'default':
     *
     */

    taker.task(
      opts.namespace || 'default',
      taker.series(opts.prefix + 'mytask')
    );
  }
}

module.exports = TasksRegistry;
