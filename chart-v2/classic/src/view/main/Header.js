Ext.define("chartV2.view.main.Header", {
  "extend": "Ext.panel.Panel",
   xtype: 'mainheader',

  viewModel: {
    type: 'main'
  },


  height: 35,
  border: false,
  plain: true,
  bodyStyle: 'background:transparent;',

  layout: {
    type: 'hbox',
    pack: 'start',
    align: 'stretch'
  },

  items: [
    {
      plain: true,
      layout: 'fit',
      border: false,
      bodyStyle: 'background:transparent;',
      flex: 1,
      bind: {
        html: '<div class="header"><div class="name">{report.name}</div><div class="description">{report.description}</div></div>'
      }
    },

    {
      width: 135,
      margin: '5px 5px 0 0',
      xtype: 'button',
      text: 'Save Configuration',
      icon: '/images/save.png',
      handler: 'onSaveConfigurationClick'
    }
  ]

});
