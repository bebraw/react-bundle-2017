exports.onClientEntry = function() {
    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = "8481241";

    (function() {
        var dc = document.createElement("script");
        dc.type = "text/javascript";
        dc.async = true;
        dc.src = "//tag.getdrip.com/8481241.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(dc, s);
    });
};
