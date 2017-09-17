/**
 * Demonstrates usage of a vbox layout.
 */

var store = Ext.create('Ext.data.TreeStore',{
    // Sets up root node
    root : {
        text: 'Dimensions',
        expanded : true, // Expands true node on initialization
        children :[{ // Specifies child nodes
            text:'Child 1',
            leaf : true // Specifies node as leaf
        },{
            text:'Child 2',
            leaf : true
        },{
            text : 'Child 3',
            children: [{
                text : 'Grand Child 1',
                children : [{
                    text: 'etc.',
                    leaf : true
                }]
            }]
        }]
    }
});

Ext.define('chartV2.view.main.Panel1', { 
	extend: 'Ext.Container',
    xtype: 'basic-trees',

    requires: [
        'chartV2.store.Files'
    ],
    width: 640,

    layout: {
        type: 'table',
        columns: 1,
        tdAttrs: { style: 'padding: 10px;' }
    },

    
    defaults: {
        xtype: 'treepanel',
        width: 300,
        height: 200,
        rootVisible: true,
        // Sharing the store synchronizes the views:
        store: store
    },

    items: [{
        title: 'Rows'
    },{
        title: 'Columns',
        colspan: 2
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


Ext.define('chartV2.view.drag.Constraint', {
    extend: 'Ext.panel.Panel',
    xtype: 'drag-constraint',
    requires: [
        'chartV2..view.drag.SimpleController',
    ],
    controllers: ['drag-simple'],

    title: 'Drag Constraints',
    width: 800,
    height: 500,
    bodyPadding: 5,

    html: '<div class="simple-source">Drag Me!</div>'
});