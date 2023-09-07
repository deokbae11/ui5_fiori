sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectb0205.controller.HelloPanel", {
            onInit: function () {

            },
            onShowHello : function() {
                sap.m.MessageBox.confirm("누르시겠습니까?", {
                    title: "Confirm",                                    // default
                    onClose: function (action) {
                        switch (action){
                            case 'OK':
                                this.afterok();
                            break;
                            case 'CANCEL':
                                sap.m.MessageToast.show('no change')
                            break;
                            
                        }
                    }.bind(this),                                       // default
                    styleClass: "",                                      // default
                    actions: [ sap.m.MessageBox.Action.OK,
                               sap.m.MessageBox.Action.CANCEL ],         // 버튼 클릭시 활용
                    emphasizedAction: sap.m.MessageBox.Action.OK,        // 버튼강조
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            },
            afterok : function () {
                sap.m.MessageToast.show('confirm');
            }
        });
    });