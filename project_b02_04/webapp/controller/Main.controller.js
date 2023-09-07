sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("projectb0204.controller.Main", {
            onInit: function () {
                var oDatas ={"title" : "newcastle", 
                            "list":[],
                            "age" : 20 };// json data를 포함한 json model 생성

                 var oModel = new JSONModel(oDatas)//새로운 모델 생성 new keyword

                this.getView().setModel(oModel);//model 을 view에서 사용 할 수 있도록 세팅
            },
            
            onClick : function () {
                var oModel = this.getView().getModel(),
                    aList2 = oModel.getProperty("/list");

                aList2.push({Name:'해리 마구이레', Address :'맨체스터',
                 Phone :this.byId('Phone').getValue(), Department :'서울'})
                oModel.setProperty("/list",aList2)
                

            },
            onDelete : function(){
                /*
                1.table 객체 model의 배열데이터 추출
                2.get selectedIndices 로 선택된 row index 가져온다
                3.반복문 통해 model 배열 데이터 삭제
                4.위에서 부터 인덱스 지정 시 인덱스가 꼬이기 때문에 변수 지정
                */
                
                var oTable = this.byId("idTable"),//테이블 객체 추출
                oModel = this.getView().getModel(),//모델 설정
                aModelData = oModel.getProperty("/list"),// 모델 데이터 추출
                aIndex = oTable.getSelectedIndices();//테이블에서 인덱스 추출
             debugger;
               for(var i = aIndex.length-1 ;i >=0  ; i-- ){
                  aModelData.splice(aIndex[i] , 1)//for문으로 인덱스에 해당하는 값 삭제
                }
               oModel.setProperty('/list',aModelData);
            },
            onRowActionDel : function(oEvent) {
                debugger;
                var aindex = oEvent.getParameters().row.getIndex(),
                oModel = this.getView().getModel(),//모델 설정
                aModelData = oModel.getProperty("/list")
                debugger;
                aModelData.splice(aindex,1)
                oModel.setData({list:aModelData},true)

                
            }
        });
    });
