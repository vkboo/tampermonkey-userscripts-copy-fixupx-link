import { createRoot } from "react-dom/client";
import MenuItem from './components/menu-item';

const SELECTOR_MENU_CONTAINER = '[role="menu"] [data-testid="Dropdown"]';
const DATA_TEST_ID = 'data-testid';
const FIXUP_SHARE_ITEM = 'fixup-share-item';

function handleShareButton() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node instanceof HTMLElement && node.querySelector(SELECTOR_MENU_CONTAINER)) {
                    const existingMenuItem = node.querySelector(`[${DATA_TEST_ID}=${FIXUP_SHARE_ITEM}]`);
                    if (!existingMenuItem) {
                        addCustomMenuItem(node);
                    }
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
        container.setAttribute(DATA_TEST_ID, FIXUP_SHARE_ITEM);
        menuContainer.prepend(container);
        const root = createRoot(container);
        root.render(<MenuItem text="Copy fixupX link" onClick={() => {
            const url = window.location.href;
            // TODO
            // feat: 获取当条推文的真实url，并加上fixup前缀
            navigator.clipboard.writeText(url)
            container.remove();
            menuContainer.remove();

            // TODO
            // feat: twitter原生弹窗提示复制成功
        }} />);
    }
};

export default handleShareButton;