/**
 * This view is an example list of people.
 */
Ext.define('chartV2.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'chartV2.store.Personnel'
    ],

    title: 'Dimension',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
