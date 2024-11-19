/* -*- mode: javascript; tab-width: 8; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

browser.runtime.onInstalled.addListener(aInstall => {
  if (aInstall.reason == "install") {
    console.log("MV3 Notification Demo: Extension installed.");
  }
  init();
});


browser.runtime.onStartup.addListener(() => {
  init();
});


function init()
{
  // Show the demo notification
  browser.notifications.create("demo-notifcn", {
    type: "basic",
    title: "Notification Demo",
    message: "Click this notification to open a popup window.",
  });
}


browser.notifications.onClicked.addListener(aNotifID => {
  if (aNotifID == "demo-notifcn") {
    openPopupWindow();
  }
});


function openPopupWindow()
{
  browser.windows.create({
    url: "pages/popup.html",
    type: "detached_panel",
    width: 400,
    height: 160,
  });
}
