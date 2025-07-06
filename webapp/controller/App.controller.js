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