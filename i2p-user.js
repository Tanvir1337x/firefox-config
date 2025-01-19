// Required for i2p to work properly on Firefox based browsers
// <https://geti2p.net/en/about/browser-config#firefox>
user_pref("dom.security.https_only_mode", false);
user_pref("dom.security.https_only_mode_pbm", false);
user_pref("network.proxy.http", "127.0.0.1");
user_pref("network.proxy.http_port", 4444);
user_pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1");
user_pref("network.proxy.socks", "127.0.0.1");
user_pref("network.proxy.socks_port", 4447);
user_pref("network.proxy.socks_version", 5);
user_pref("media.peerConnection.ice.proxy_only", true);
user_pref("keyword.enabled", false);

user_pref("browser.contentblocking.category", "standard");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage", "http://127.0.0.1:7070");

// Recommended
// user_pref("browser.contentblocking.category", "safest"); // Mullvad Browser
// user_pref("browser.contentblocking.category", "strict"); // Firefox Browser
