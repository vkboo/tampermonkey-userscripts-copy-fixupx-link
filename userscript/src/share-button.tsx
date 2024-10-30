import { createRoot } from "react-dom/client";
import MenuItem from './components/menu-item';

function handleShareButton() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node instanceof HTMLElement && node.querySelector('[role="menu"] [data-testid="Dropdown"]')) {
                    addCustomMenuItem(node);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


    function addCustomMenuItem(menuContainer: HTMLElement) {
        const container = document.createElement("div");
        menuContainer.prepend(container);
        const root = createRoot(container);
        root.render(<MenuItem text="Copy fixupX link" onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url)
            menuContainer.remove();
        }} />);
    }
};

export default handleShareButton;