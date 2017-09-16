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


Ext.define('chartV2.view.main.graphPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'graphPanel',

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
                xtype:'rowlist'
            }
        ]
    }]
});


Ext.define('chartV2.view.main.rowlist', {
	extend: 'Ext.container.Container',
    xtype: 'rowlist',

    frame: true,
//    resizable: true,
    width: 610,
    minWidth: 610,
    minHeight: 300,
    border:false,
    
    layout: 'form',
    
    defaults: {
        layout: 'form',
        defaultType: 'textfield',
        style: 'width: 50%',
    },

    items: [{
        items: [
            { fieldLabel: 'Columns ' },
            { fieldLabel: 'Rows' },
        ]
    }]
});