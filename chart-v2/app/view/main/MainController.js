/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('chartV2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    afterRender: function (view) {
        // Constrain to the direct parent element
        this.toParentSource = new Ext.drag.Source({
            element: view.el.down('.constrain-parent'),
            constrain: {
                // True means constrain to the parent element
                element: true
            }
        });

        // Allow only vertical dragging. Constrain to the owner panel.
        this.verticalSource = new Ext.drag.Source({
            element: view.el.down('.constrain-vertical'),
            constrain: {
                element: view.body,
                vertical: true
            }
        });

        // Allow only horizontal dragging. Constrain to the owner panel.
        this.horizontalSource = new Ext.drag.Source({
            element: view.el.down('.constrain-horizontal'),
            constrain: {
                // Constrain dragging vertically only. Also to the parent container.
                element: view.body,
                horizontal: true
            }
        });

        // Snap drag to a [30, 50] grid. Constrain to the owner panel.
        this.snapSource = new Ext.drag.Source({
            element: view.el.down('.constrain-snap'),
            constrain: {
                element: view.body,
                snap: {
                    x: 60,
                    y: 50
                }
            }
        });
    },

    destroy: function () {
        this.toParentSource = Ext.destroy(this.toParentSource);
        this.verticalSource = Ext.destroy(this.verticalSource);
        this.horizontalSource = Ext.destroy(this.horizontalSource);
        this.snapSource = Ext.destroy(this.snapSource);

        this.callParent();
    }
});

Ext.define('chartV2..view.drag.SimpleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.drag-simple',

    afterRender: function (view) {
        this.source = new Ext.drag.Source({
            element: view.el.down('.simple-source'),
            constrain: view.body,

            listeners: {
                dragmove: function(source, info) {
                    var pos = info.element.current,
                        html = Ext.String.format('X: {0}, Y: {1}', pos.x, pos.y);

                    source.getElement().setHtml(html);
                },

                dragend: function(source) {
                    source.getElement().setHtml('Drag Me!');
                }
            }
        });
    },

    destroy: function() {
        this.source = Ext.destroy(this.source);

        this.callParent();
    }
});