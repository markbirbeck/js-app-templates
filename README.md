# task-registry-mytask

A task registry provides one or more tasks to a Gulpfile by way of a self-registering registry. This particular task registry provides support for the 'MyTask' collection of tasks.

To use the task in your project simply do the following:

```javascript
'use strict';
const gulp = require('gulp');

const MyTaskTaskRegistry = require('task-registry-mytask');

gulp.registry(new MyTaskTaskRegistry());
```

The task name defaults to 'mytask' so this is all that is necessary to add the following command to your Gulpfile:

```shell
gulp mytask
```

The task can also be namespaced by adding a namespace option:

```javascript
gulp.registry(new MyTaskTaskRegistry({
  namespace: 'my'
}));
```

or an inital parameter to the call to the constructor:

```javascript
gulp.registry(new MyTaskTaskRegistry('my'));
```

The result is that the task is now available via the following command:

```shell
gulp my:mytask
```
