/**
 * Demonstrates usage of a vbox layout.
 */
Ext.define('chartV2.view.main.List3', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist3',

    requires: [
        'Ext.layout.container.VBox',
    ],

    bodyPadding: 10,
    defaultType: 'panel',
    border: 'none',
    
    layout: {
        type: 'vbox'
    },

    defaults: {
        bodyPadding: 10,
        border: 'none'
    },

    items: [
        {
            width:400,
            height:200,
            title:'Filters',
            border:true
        }, 
        {
            width:400,
            height:200,
            title:'Customization of Graph',
            border:true,
            margin:'38 0 0 0'
        }
    ]
});