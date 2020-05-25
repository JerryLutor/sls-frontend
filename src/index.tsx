/* eslint-disable @typescript-eslint/camelcase */
// Must be the first import




<<<<<<< Updated upstream
if (process.env.NODE_ENV === 'development') {
=======
import ConnectedDashboard from "./components/dashboard";

if (process.env.NODE_ENV==='development') {
>>>>>>> Stashed changes
    // Must use require here as import statements are only allowed
    // to exist at the top of a file.
    require("preact/debug");

}

// const poly = require("preact-cli/lib/lib/webpack/polyfills");
import "notyf/notyf.min.css";

import habitat from "preact-habitat";
import ConnectedMap from "./components/map";
import ConnectedZigbeeTable from "./components/zigbee";
import ConnectedDiscovery from "./components/discovery";
import ConnectedLogViewer from "./components/log-viewer";
import ConnectedCodeEditor from "./components/code-editor";
import ConnectedDevicePage from "./components/device-page";
import store from "./store";
import { Provider } from "unistore/preact";
import { h } from "preact";
import WebsocketManager from "./websocket";


interface StateChangePayload {
    name: string;
    value: string | number | boolean;
    ieeeAddr: string;

}

const applyStateChange = (data: StateChangePayload): void => {
    const state = store.getState();

    let { devices, forceRender } = state
    const { device } = state;
    const ts = Date.now() / 1000;
    if (device && device.ieeeAddr === data.ieeeAddr) {
        forceRender = ts;
        device.st && (device.st[data.name] = data.value);
        device.last_seen = ts;
    }
    devices = devices.map(d => {
        if (d.ieeeAddr === data.ieeeAddr) {
            forceRender = ts;
            d.st && (d.st[data.name] = data.value);
            d.last_seen = ts;
        }
        return d;
    });
    store.setState({ device, devices, forceRender });
}

const processZigbeData = (data): void => {
    const { event, ...payload } = data;
    switch (event) {
        case "stateChange":
            applyStateChange(payload as StateChangePayload);
            break;
        default:
            break;

    }
}
const processZigbeeEvent = ({ category, payload }): void => {
    switch (category) {
        case "zigbee":
            processZigbeData(payload);
            break;

        default:
            break;
    }
}

const manager = new WebsocketManager();
console.log("use `copy(wsEventsData)` to copy events log");
manager.subscribe("zigbee", processZigbeeEvent);




const DevicePageApp = () => (
    <Provider store={store}><ConnectedDevicePage /></Provider>
);
const ZigbeeTableApp = () => (
    <Provider store={store}><ConnectedZigbeeTable /></Provider>
);

const MapApp = () => (
    <Provider store={store}><ConnectedMap /></Provider>
);
const DiscoveryApp = () => (
    <Provider store={store}><ConnectedDiscovery /></Provider>
);
const LogViewerApp = () => (
    <Provider store={store}><ConnectedLogViewer /></Provider>
);
const CodeEditorApp = () => (
    <Provider store={store}><ConnectedCodeEditor /></Provider>
);

const DashboardApp = () => (
    <Provider store={store}><ConnectedDashboard /></Provider>
);

const initWidgets = (): void => {
    habitat(ZigbeeTableApp).render({
        selector: "[data-widget-host=\"zigbee\"]",
        clean: true
    });

    habitat(DevicePageApp).render({
        selector: "[data-widget-host=\"device-page\"]",
        clean: true
    });

    habitat(MapApp).render({
        selector: "[data-widget-host=\"map\"]",
        clean: true
    });

    habitat(DiscoveryApp).render({
        selector: "[data-widget-host=\"discovery\"]",
        clean: true
    });
    habitat(LogViewerApp).render({
        selector: "[data-widget-host=\"log-viewer\"]",
        clean: true
    });

    habitat(CodeEditorApp).render({
        selector: "[data-widget-host=\"code-editor\"]",
        clean: true
    });

    habitat(DashboardApp).render({
        selector: "[data-widget-host=\"dashboard\"]",
        clean: true
    });


};
document.addEventListener("DOMContentLoaded", initWidgets);