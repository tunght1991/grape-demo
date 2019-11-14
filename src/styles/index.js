export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(csm && csm.length ? csm : [{
    name: config.textGeneral,
    open: true,
    buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
  },
  // {
  //   name: config.textLayout,
  //   open: true,
  //   buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
  // },
  {
    name: config.textTypography,
    open: true,
    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
    properties: [{
      property: 'text-align',
      list: [
          { value: 'left', className: 'fa fa-align-left' },
          { value: 'center', className: 'fa fa-align-center'  },
          { value: 'right', className: 'fa fa-align-right' },
          { value: 'justify', className: 'fa fa-align-justify' },
      ],
    }]
  },
  // {
  //   name: config.textDecorations,
  //   open: true,
  //   buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
  // },
  // {
  //   name: config.textExtra,
  //   open: true,
  //   buildProps: ['transition', 'perspective', 'transform'],
  // }
  ]);
}
