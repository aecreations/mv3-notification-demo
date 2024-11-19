# MV3 Notification Demo #

This is a demo of a Firefox bug with notifications from a Manifest V3 extension.

**Instructions:**
1. Install this extension into Firefox.
2. A notification should appear immediately upon installation. Do NOT click on it!
3. Wait for the extension's background script to be suspended.
4. Once the background script is suspended, click on the notification.  On Windows, it can be found in the Action Center; on macOS, it can be found in the sidebar that appears when clicking on the date and time on the right-hand side of the desktop menu bar.

Clicking on the notification should open an extension page in a popup window.  But if the background script is suspended, then clicking on the notification in step 4 will have no effect.
