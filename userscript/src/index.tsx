import { awaitElement, log, addLocationChangeCallback } from "./utils";
import handleShareButton from "./share-button";

// Do required initial work. Gets called every time the URL changes,
// so that elements can be re-inserted as a user navigates a page with
// different routes.
async function main() {
    // Find <body/>. This can be any element. We wait until
    // the page has loaded enough for that element to exist.
    await awaitElement("body > div");
    // for SPA host page, body > div may be overwrite by SPA render engine, so use document.body to appendChild
    handleShareButton();
}

// Call `main()` every time the page URL changes, including on first load.
addLocationChangeCallback(() => {
    // Greasemonkey doesn't bubble errors up to the main console,
    // so we have to catch them manually and log them
    main().catch((e) => {
        log(e);
    });
});