/**
 * Demonstrates usage of a vbox layout.
 */
Ext.define('chartV2.view.main.Panel1', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainpanel1',

    requires: [
        'Ext.layout.container.VBox',
    ],

    bodyPadding: 10,
    defaultType: 'panel',
    
    layout: {
        type: 'vbox'
    },

    defaults: {
        bodyPadding: 10,
        border: false
    },

    items: [{
        width:400,
        height:200,
        items:[
            {
                xtype:'mainlist'
            }
        ]
    }, {
        width:400,
        height:200,
        items:[
            {
                xtype:'mainlist2'
            }
        ]
    }]
});