export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;

  toAdd('link-block') && bm.add('link-block', {
    category: 'Basic',
    label: 'Link Block',
    attributes: { class: 'fa fa-link' },
    content: {
      type:'link',
      editable: false,
      droppable: true,
      style:{
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px'
      }
    },
  });
}
