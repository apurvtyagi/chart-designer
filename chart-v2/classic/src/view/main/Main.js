/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('chartV2.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-horizontal-box',
    bodyStyle: 'background:#e0e0e0',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.layout.container.HBox',
        'chartV2.view.main.Panel1',
        'chartV2.view.main.graphPanel',
        'chartV2.view.main.rowlist'
    ],

    controller: 'main',
    viewModel: 'main',


    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },

    defaults: {
        bodyPadding: 10,
        border: true,
        color:'blue'
    },

    items: [    
        
    {
        title: 'Row & Column',
        flex: 2,
        height:500,
        margin: '0 10 0 0',
        items:[{
             xtype:'mainpanel1'   
        }]
    }, {
        border:false,
        xtype:'mainlist3'
    }, {
        title: 'Graph',
        width:200,
        flex: 2.5,
        margin: '0 10 0 10',
        items:[
            {
                xtype: 'graphPanel'
            }
        ]
    }]
});
