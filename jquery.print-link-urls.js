/*!
 * jQuery Print Link URLs Plugin v0.9.3
 * https://github.com/terkel/jquery-print-link-urls
 * 
 * Copyright (c) 2012 Takeru Suzuki - http://terkel.jp/
 * Licensed under the MIT license - http://www.opensource.org/licenses/MIT
 */
(function ($) {
    $.fn.printLinkURLs = function () {
        return this.each(function () {
            var $this = $(this),
                $links = $this.find('a[href]').filter(function () {
                    return /^https?:/.test(this.href);
                }),
                html = [],
                urls = [];
            if (!$links.length) {
                return;
            }
            html[html.length] = '<dl class="url-list">';
            $links.each(function () {
                var url = this.href,
                    inArray = $.inArray(url, urls),
                    index;
                if (inArray < 0) {
                    urls[urls.length] = url;
                    index = urls.length;
                    html[html.length] = '<dt>' + index + '</dt><dd>' + url + '</dd>';
                } else {
                    index = inArray + 1;
                }
                $('<sup class="url-ref">' + index + '</sup>').insertAfter($(this));
            });
            html[html.length] = '</dl>';
            $(html.join('')).appendTo($this);
        });
    };
})(jQuery);