sap.ui.define([
    "sap/ui/core/mvc/Controller",//모델 셍성 시 라이브러리 import
    "sap/ui/model/json/JSONModel"//.이 아니라 /로 변경해야한다 함수에 넣을 때는 순서대로 삽입
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel) {
        "use strict";

        return Controller.extend("test.projectb0203.controller.Main", {
            onInit: function () {
                var oDatas ={"title" : "newcastle", 
                            "list": [{'player':'sandro tonali','back_number':'8'},{'player':'nick pope','back_number':'1'}],
                            "list1":[],
                            "age" : 20 };// json data를 포함한 json model 생성

                var oModel = new JSONModel(oDatas)//새로운 모델 생성 new keyword

                this.getView().setModel(oModel, "main");//model 을 view에서 사용 할 수 있도록 세팅
            },
            onClick: function(oEvent){
                var num1 = Number(this.byId('Number1').getValue())
                var num2 = Number(this.byId('Number2').getValue())
                var giho1 = this.byId('Selt').getSelectedItem()
                var giho = giho1.getText()//selected item에서 텍스트에 관련된 깂을 추출한다
                var txt = this.byId('String')
                switch (giho) {
                
                    case '+'://기호가 아니라 단어로 출력해야한다
                        var num3 = num1 + num2
                    
                        break;
                    case '-':
                        var num3 = num1 - num2
                
                        break;
                    case '*':
                        var num3 = num1*num2
                        // txt.setText(String(num3)) 
                        break;
                    case '/':
                        var num3 = num1/num2
                        // txt.setText(String(num3))
                        break;        
                
                    default:
                        break;
                }
                txt.setText(String(num3))

                this.onAdd(num3); // 새함수 생성 시
            },
            onChange : function(oEvent) {
                var nNum = Number(oEvent.getParameters().value);
                var giho1 = this.byId('Selt').getSelectedItem()
                var butto = this.byId('Btn5')
                var giho = giho1.getText()//selected item에서 텍스트에 관련된 깂을 추출한다
                if (!nNum && giho =='/' ){
                    //조건에 따라 입력값처리
                    console.log(nNum);
                    oEvent.getSource().setValueState('Error')
                    butto.setEnabled(false)
                }else{ oEvent.getSource().setValueState('None')
                butto.setEnabled(true)}
            },
            onAdd : function(num3) {
                // main model의 리스트 가져오는 방법
                var oModel = this.getView().getModel("main"),//main 모델 가져오기
                    //aList  = oModel.getData().list1, // list 배열 가져오기
                    /*
                    aList2에 새로운 데이터 추가 한다
                    */
                    aList2 = oModel.getProperty("/list1") // list 배열 가져오기2 경로를 통해 데이터 가져오기
                    aList2.push({num1 : Number(this.byId('Number1').getValue()) , 
                    operator : this.byId('Selt').getSelectedItem().getText() ,num2: Number(this.byId('Number2').getValue()),
                    result : num3});
                    oModel.setProperty("/list1",aList2)
                    debugger;
                    // 모델 생성 시 데이터를 넣어준다 -> view로 model에서 데이터 가지고와 데이터를 뷰에 띄우고 controler에서
                    // 뷰로부터 떠와 데이터 변경 시 property 이용하여 model property에서 추가
            }
        });

    });


    //김동훈. 지켜보고있다. 잘해라. 
    // 잘하라고. 잘해. 어?. 그래. 
    // 그럼. 건강해라. 
