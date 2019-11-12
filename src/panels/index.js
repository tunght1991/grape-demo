import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './../consts';

export default (editor, config) => {
  const pn = editor.Panels;
  pn.removePanel('commands');
  pn.removePanel('options');
  pn.removePanel('views');
  pn.addPanel({
    id: 'panel-devices',
    el: '.panel-devices',
    visible  : true,
    buttons: [{
      id: 'device-desktop',
      label: 'D',
      command: 'set-device-desktop',
      active: true,
      togglable: false,
    }, {
      id: 'device-mobile',
      label: 'M',
      command: 'set-device-mobile',
      togglable: false,
    }]
  })
  editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
  });
  editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
  });
}
