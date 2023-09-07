sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment,JSONModel) {
        // var urlOdata = 'services/odata/org/northwind/Northwind/svc'
        // var oModel = new JSONModel(urlOdata)
        // this.getView().setModel(oModel)
        // sap.ui.getCore().setModel();
        
        "use strict";

        return Controller.extend("projectb0206.controller.Main", {
            onInit: function () {

            },
            onValueHelp : function () {
            //     var oDialog = sap.ui.getCore().byId('idDialog');//코어에서 다이어로그 가지고 온다
            //     var oModel = this.getView().getModel(); // 데이터 넣기 위한 모델 세팅 이름 있으면 model(이름)
            //     if (oDialog){
            //         oDialog.open();
            //     }else{
            //     Fragment.load({
            //         name : 'projectb0206.view.fragment.Order',//경로
            //         type : 'XML',
            //         controller : this // 이벤트 처리 시 구현하기 위해 컨트롤러 설정
                    
            //     }).then(function (oDialog) {
            //         oDialog.setModel(oModel)//odialog에 setmodel한다(oModel,이름)
            //         oDialog.open();
            //     })
            // }},
            // var oDialog = this.byId('idDialog')

            if (oDialog){
                oDialog.open()
            }else{
            this.loadFragment({
                name: "projectb0206.view.fragment.Order",
                type : 'XML'
            }).then(function(oDialog) 
                {oDialog.open()
                }.bind(this))
            }}, //구버전에서는 바로 모델이 세팅된다.
            onClose : function(oEvent) {
            /*
             getsource(): 이벤트 발생 객체
             getparameters(): 이벤트 관련 정보
            */

           
           var oButton = oEvent.getSource();
           var oDialog = oButton.getParent();

            oDialog.close();
        }
    });
    });
