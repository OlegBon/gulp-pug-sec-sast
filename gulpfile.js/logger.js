import chalk from "chalk";

let summary = {
  totalFiles: 0,
  totalSize: 0,
  totalTime: 0,
};

// Функція форматування розміру файлу в зручний для читання вигляд
const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Kb`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} Mb`;
};

// Функція логування інформації про виконання завдання
const logTask = ({
  env = "dev",
  label = "Operation",
  files = [],
  startTime,
  showSize = true,
}) => {
  const duration = Date.now() - startTime;
  const count = files.length;
  let totalSize = 0;

  console.log(chalk.cyan(`\n[${env}] ${label}`));
  console.log(chalk.gray(`Quantity: ${count}`));

  if (count) {
    files.forEach((f) => {
      const size = f.contents?.length || 0;
      totalSize += size;
      const sizeStr = showSize ? ` (${formatSize(size)})` : "";
      console.log(chalk.green(` - ${f.relative}${sizeStr}`));
    });
  } else {
    console.log(chalk.yellow("Files not found."));
  }

  if (showSize && totalSize > 0) {
    console.log(chalk.gray(`Total size: ${formatSize(totalSize)}`));
  }

  console.log(chalk.magenta(`Execution time: ${duration} ms\n`));

  // Оновлюємо загальну статистику
  summary.totalFiles += count;
  summary.totalSize += totalSize;
  summary.totalTime += duration;
};

// Функція для логування загальної статистики
const logSummary = (env = "dev") => {
  const task = (done) => {
    console.log(chalk.bgBlue.white.bold("\nTotal build statistics"));
    console.log(chalk.white(`Files processed: ${summary.totalFiles}`));
    console.log(chalk.white(`Total size: ${formatSize(summary.totalSize)}`));
    console.log(chalk.white(`Total time: ${summary.totalTime} ms\n`));

    summary = { totalFiles: 0, totalSize: 0, totalTime: 0 };
    console.log(`✔ Task ${env} completed\n`);

    done();
  };

  // Встановлюємо ім'я завдання для кращої ідентифікації
  Object.defineProperty(task, "name", { value: `logSummary:${env}` });

  return task;
};

export { logTask, logSummary };
