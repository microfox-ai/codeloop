import { Command } from 'commander';
import { version } from '../package.json';
import { track } from './commands/track.js';
import { trackCi } from './commands/track-ci.js';

const program = new Command();

program
  .name('microfox')
  .description('Universal CLI tool for creating and managing Microfox projects')
  .version(version);

program.addCommand(track);
program.addCommand(trackCi);

program.action(() => {
  // Show help if no command is provided
  if (process.argv.length <= 2) {
    program.help();
  }
});

program.parse(process.argv);
