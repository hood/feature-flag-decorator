# feature-flag-decorator

A simple decorator that will only execute the wrapped method if the given feature flag is set.
(e.g.: `@FeatureFlag('DEBUG_COLLISIONS')` will only let a method execute if `process.env.DEBUG_COLLISIONS` has been set to a truthy value)

---

#### Installation

`yarn add feature-flag-decorator`
or
`npm install feature-flag-decorator`

---

#### Usage example

```typescript
import FeatureFlag from 'feature-flag-decorator';

class MyClass {
  @FeatureFlag('DEBUG_COLLISIONS')
  debugMyCollisions(): void {
    console.log("Hey, I'm debugging some collisions here!");
  }
}
```
