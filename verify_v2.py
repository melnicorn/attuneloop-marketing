from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Verify Light Mode
        context_light = browser.new_context(
            color_scheme='light',
            viewport={'width': 1280, 'height': 800}
        )
        page_light = context_light.new_page()
        print("Verifying Light Mode...")
        page_light.goto("http://localhost:8080")
        page_light.wait_for_timeout(1000)
        page_light.screenshot(path="/home/jules/verification/home_light_v2.png")

        # 2. Verify Dark Mode
        context_dark = browser.new_context(
            color_scheme='dark',
            viewport={'width': 1280, 'height': 800}
        )
        page_dark = context_dark.new_page()
        print("Verifying Dark Mode...")
        page_dark.goto("http://localhost:8080")
        page_dark.wait_for_timeout(1000)
        page_dark.screenshot(path="/home/jules/verification/home_dark_v2.png")

        # 3. Verify Font Family and Weight
        print("Verifying Font Family and Weight...")
        style_body = page_light.evaluate("getComputedStyle(document.body).fontFamily")
        weight_body = page_light.evaluate("getComputedStyle(document.body).fontWeight")
        style_h1 = page_light.evaluate("getComputedStyle(document.querySelector('h1')).fontWeight")

        print(f"Body Font Family: {style_body}")
        print(f"Body Font Weight: {weight_body}")
        print(f"H1 Font Weight: {style_h1}")

        browser.close()

if __name__ == "__main__":
    verify_site()
