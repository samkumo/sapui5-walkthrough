sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
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

            //Set i18n model which contains translated texts
            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            //Set the i18n model to this view and give it an alias
            this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello() {
            //Read message text from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name"); //s = string
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg)
        }
    }
    );
});