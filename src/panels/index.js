import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './../consts';

export default (editor, config) => {
  const pn = editor.Panels;
  const commands = editor.Commands;
  editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
  });
  editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
  });
  editor.Commands.add('run:export-template:before', opts => {
    if (0 /* some condition */) {
      opts.abort = 1;
    }
  });
  editor.Commands.add('run:export-template', () => console.log('After the command run'));
  editor.Commands.add('abort:export-template', () => console.log('Command aborted'));
  // editor.Commands.add('run:undo-template', () => console.log('After the command undo'));
}
