sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "user strict";

    new ComponentContainer({
        name: "ui5.walkthrough",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeat("content");
});