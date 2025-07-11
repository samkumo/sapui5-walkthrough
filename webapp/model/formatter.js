sap.ui.define([], () => {
    "use strict";

    //So what happens here is that this returns an object with a function 'statusText'
    //This function takes in parameter sStatus and returns the appropriate text for that status
    //Fallback-return for unexpected sStatus simply returns it back
    return {
        statusText(sStatus) {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return oResourceBundle.getText("invoiceStatusA");
                case "B":
                    return oResourceBundle.getText("invoiceStatusB");
                case "C":
                    return oResourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
        }
    }
})