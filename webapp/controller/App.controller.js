sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    //This returns Controller-object which we have extended with new functions
    return Controller.extend("ui5.walkthrough.controller.App", {
        //Here we define the functions and implement the functions
        //Different from ABAP where definition and implementation
        //are clearly separated.

        onInit() {
            //Set the data model for the view using this controller

            //Define object to describe the data
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            //Initialize JSOMModel of this data
            const oModel = new JSONModel(oData);
            //Set the model for current view
            this.getView().setModel(oModel);
        },
        onShowHello() {
            MessageToast.show("Hello UI5!")
        }
    }
    );
});