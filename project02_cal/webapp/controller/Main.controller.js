sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel, Fragment) {
        "use strict";

        return Controller.extend("project02cal.controller.Main", {
            onInit: function () {
                // var Odata = {
                //     'giho' : [{key :'PLUS', text :'+'},{key:'MINUS', text:'-'},
                //     {key:'MULTIIPLE', text:'*'},{key : 'DIVISION', text:'/'}],
                //     'list' : []                          
                // };
                var oModel = new JSONModel()//새로운 모델 생성 new keyword
                oModel.loadData('../model/viewdata.json',{},false)//true 는 동기 처리, false는 비동기처리
                this.getView().setModel(oModel,'main')
            },
            onClick: function () {
                
                var num1 = Number(this.byId('Number1').getValue())
                var num2 = Number(this.byId('Number2').getValue())
                var sText = this.byId('String')
                var giho = this.byId('Selt').getSelectedItem().getText()
                switch (giho) {
                    case '+':
                        var result = num1 + num2                  
                        break;
                    case '-':
                        var result = num1 - num2                 
                        break;
                    case '*':
                        var result = num1 * num2                 
                        break;
                    case '/':
                        var result = num1 / num2
                        break;
                
                    default:
                        break;
                }
                   sText.setText(result)
                   this.onAdd(result,giho)
                   
            },
            onAdd : function (result,giho) {
                
                var oModel = this.getView().getModel("main")
                var data = oModel.getProperty('/list')
                data.push({Number1 : Number(this.byId('Number1').getValue()) , 
                Operator : giho , Number2: Number(this.byId('Number2').getValue()),
                Result :result});
                oModel.setData({list:data},true)
                
            },
            onDelete : function () {
            var oModel = this.getView().getModel("main")
            var data = oModel.getProperty('/list')
            var tabix = this.byId('table').getSelectedIndices()
            sap.m.MessageBox.confirm("데이터를 삭제 하시겠습니까?", {
            title: "Confirm",                                    // default
            onClose: function (action) {
                switch (action){  
                    case 'okok':
                        var cnt = 0;
                        for (var i = tabix.length-1 ; i >=0 ; i--) {
                            data.splice(tabix[i],1)
                            cnt++;
                            }
                        oModel.setData({list:data},true)
                        sap.m.MessageToast.show(`총 ${cnt} 건이 삭제되었습니다`)
                        break;
                    case 'NO':
                        sap.m.MessageToast.show('변경없음')
                        break;
                        
                    } },                                       // default
                styleClass: "",                                      // default
                actions: [ "okok",
                           sap.m.MessageBox.Action.NO ],         // 버튼 클릭시 활용 액션에서 버튼은 아무거나 이름을 추가해서 지정
                           //가능하다
                emphasizedAction: sap.m.MessageBox.Action.YES,        // 값을 바꿀수 있음
                initialFocus: null,                                  // default
                textDirection: sap.ui.core.TextDirection.Inherit     // default
            } ) 
            
            
            },
            onChange : function(oEvent){
                var nNum = Number(oEvent.getParameters().value);
                var giho = this.byId('Selt').getSelectedItem().getText()
                var butt = this.byId('Butt')
                console.log(butt)
                if (!nNum && giho =='/' ){
                    oEvent.getSource().setValueState('Error')
                    butt.setEnabled(false)
                } else{
                    butt.setEnabled(true)
                    oEvent.getSource().setValueState('Success')
                }
            },
            onRowActionDel : function (oEvent) {
                var aindex = oEvent.getParameters().row.getIndex(),
                oModel = this.getView().getModel('main'),//모델 설정
                aModelData = oModel.getProperty("/list")
                aModelData.splice(aindex,1)
                oModel.setData({list:aModelData},true)
            },
            onOpenDialog : function () {
            //     var oDialog = sap.ui.getCore().byId('idDialog')
            //     if (oDialog){
            //         oDialog.open();
            //     }else{
            //     Fragment.load({
            //         name : 'project02cal.fragment.HelloDialog',//경로
            //         type : 'XML',
            //         controller : this // 이벤트 처리 시 구현하기 위해 컨트롤러 설정
                    
            //     }).then(function (oDialog) {
            //         oDialog.open();
            //     })//함수 종료 시;
            // }
            ///////////////////////////////////////////
            var oDialog = this.byId("idDialog")

            if (oDialog){
                oDialog.open()
            }else{
            this.loadFragment({
                name: "project02cal.fragment.HelloDialog",
                type : 'XML',
            }).then(function(oDialog) {
                
                oDialog.open()
            }.bind(this))}},
            onClose : function(oEvent) {
                /*
                 getsource(): 이벤트 발생 객체
                 getparameters(): 이벤트 관련 정보
                */

               
               debugger;
               var oButton = oEvent.getSource();
               var oDialog = oButton.getParent();

                oDialog.close();
            },
            onOpenDialog2 : function () {
               if( this.byId('idDialogView')) {
                this.byId('idDialogView').open()
               }
                
            }
        });
    }
);