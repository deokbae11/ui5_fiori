sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Fragment,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("zbcppbom.controller.Main", {
            onInit: function () {

            },
            formatter:{
                fnDateString : function (oDate) {
                    if(oDate){
                        var oDateTime = sap.ui.core.format.DateFormat.getDateTimeInstance({
                            pattern: "yyyy-MM-dd"
                        })
                        return oDateTime.format(oDate)
                    }
                }
            },onSearch : function () {
                debugger;
                var bomId = this.byId('combo1').getValue()
                var matcode = this.byId('combo2').getValue()
                var bindItem = this.byId("idMemberSet").getBinding('items')
                var aFilter = []
                if (bomId && matcode){
                    aFilter.push(new Filter({
                        path: "BomId",
                        operator: "EQ",
                        value1: bomId,
                        }))
                    aFilter.push(new Filter({
                        path: "MatCd",
                        operator: "EQ",
                        value1: matcode,
                        }))
                        bindItem.filter(aFilter)
                }else if (matcode) {
                    aFilter.push(new Filter({
                        path: "MatCd",
                        operator: "EQ",
                        value1: matcode,
                        }))
                        bindItem.filter(aFilter)
                }else if (bomId) {
                    aFilter.push(new Filter({
                        path: "BomId",
                        operator: "EQ",
                        value1: bomId
                        }))
                    bindItem.filter(aFilter)
                }

               
        }
    
    });
    });
