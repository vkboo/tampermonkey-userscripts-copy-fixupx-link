import { createRoot } from "react-dom/client";
import MenuItem from './components/menu-item';

const SELECTOR_MENU_CONTAINER = '[role="menu"] [data-testid="Dropdown"]';
const DATA_TEST_ID = 'data-testid';
const FIXUP_SHARE_ITEM = 'fixup-share-item';

const addCustomMenuItem = (menuContainer: HTMLElement) => {
    const copyLinkButton = menuContainer.firstElementChild! as HTMLElement;
    const container = document.createElement("div");
    container.setAttribute(DATA_TEST_ID, FIXUP_SHARE_ITEM);
    menuContainer.prepend(container);
    const root = createRoot(container);
    const onMenuItemClick = async () => {
        copyLinkButton.click();
        const originXUrl = await navigator.clipboard.readText();
        const fixupXUrl = originXUrl
            .replace('x.com', 'fixupx.com')
            .replace('twitter.com', 'fxtwitter.com');
        navigator.clipboard.writeText(fixupXUrl)
        container.remove();
        menuContainer.remove();
    };
    root.render(
        <MenuItem text="Copy fixupX link" onClick={onMenuItemClick} />
    );
};

const handleShareButton = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                const menuContainer = (node instanceof HTMLElement && node.querySelector(SELECTOR_MENU_CONTAINER)) as HTMLElement;
                if (menuContainer) {
                    const existingMenuItem = menuContainer.querySelector(`[${DATA_TEST_ID}=${FIXUP_SHARE_ITEM}]`);
                    if (!existingMenuItem) {
                        addCustomMenuItem(menuContainer);
                    }
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
};

export default handleShareButton;