/**
 * Returns a decorator that will only execute the wrapped method if the given feature flag is set.
 * (e.g.: `@FeatureFlag('DEBUG_COLLISIONS')` will only let the method execute if `process.env.DEBUG_COLLISIONS` has been set to a truthy value)
 */
export function FeatureFlag(featureFlagID: string) {
  return function decorator(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    if (typeof original === 'function')
      descriptor.value = function(...args: any[]) {
        if (!!process.env[featureFlagID]) return original.apply(this, args);
      };

    return descriptor;
  };
}
