Ext.define('chartV2.view.main.Panel2', {
    extend: 'Ext.Panel',
    xtype: 'mainpanel2',

    viewModel: {
        data: {
            title: 'Dimensions',
            html: '',
            margin: '0 10 0 0',
            flex:1
        }
    },

    bodyPadding: 20,
    width: 400,
    autoSize: true,

    bind: {
        title: '{title}',
        html: '{html}'
    }
});