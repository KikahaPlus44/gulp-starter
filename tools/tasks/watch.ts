import config from '../config';
import * as gulp from 'gulp';
import { join } from 'path';
import * as watch from 'gulp-watch';
import * as _ from 'lodash';

gulp.task('watch', ['browser-sync'], () => {
  // javascript wathing handled in the javascripts task
  const watchableTasks = ['html', 'assets', 'fonts', 'images', 'css'];

  _.forEach(watchableTasks, (taskName) => {
    const task = config[taskName];
    if (!task) return;

    const source = join(config.SRC_DIR, task.src, task.glob);

    watch(source, () => gulp.start(taskName));
  });
});
