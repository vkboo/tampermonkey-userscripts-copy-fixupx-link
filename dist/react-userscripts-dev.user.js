// ==UserScript==
// @name     FixupX share link
// @namespace https://github.com/vkboo/tampermonkey-userscripts-copy-fixupx-link
// @version  1.0.1
// @description Copy FixupX link when click share button in X.com
// @include https://x.com
// @include https://x.com/*
// @grant    none
// ==/UserScript==


"use strict";

function log(...args) {
    console.log("%cUserscript:", "color: purple; font-weight: bold", ...args);
}

log("Dev mode started");

async function main() {
    const resp = await fetch("http://localhost:8124/react-userscripts.user.js");
    const script = await resp.text();
    if (script.trim() === "") {
        log("No user script found");
        return;
    }
    log("Got Dev script");
    eval(script);
    log("Dev script evaled");
}

// Make sure we run once at the start
main.bind({})().catch((e) => {
    log("ERROR", e);
});
