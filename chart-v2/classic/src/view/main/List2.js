/**
 * This view is an example list of people.
 */
Ext.define('chartV2.view.main.List2', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist2',

    requires: [
        'chartV2.store.Personnel'
    ],

    title: 'Measures',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
