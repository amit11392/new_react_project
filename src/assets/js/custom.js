$(document).ready(function() {
    $(document).on("click", ".sidebar-dropdown > a", function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("open-sub")
        ) {
            $(".sidebar-dropdown").removeClass("open-sub");
            $(this)
                .parent()
                .removeClass("open-sub");
        } else {
            $(".sidebar-dropdown").removeClass("open-sub");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("open-sub");
        }
    });

    $(document).on("click", "#close-sidebar", function() {
        $(".page-wrapper").removeClass("show");
        $(".content-section").removeClass("show");
    });
    $(document).on("click", "a#show-sidebar", function() {
        $(".page-wrapper").addClass("show");
        $(".content-section").addClass("show");
    });
    $(document).on("click", "a.tab_link", function() {

        $('.tab_bgclr').removeClass('tab_active');

        $('.tab_link').removeClass('tab_title_active');

        $($(this).attr('href')).addClass('tab_active');

        $(this).addClass('tab_title_active');

        var tabDataY = $($(this).attr('href')).offset().top - 120

        $('html, body').animate({

            scrollTop: tabDataY

        }, 500);

        return false;

    });
    $(document).on("click", ".sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li", function() {
        $(".sidebar-wrapper .sidebar-menu .sidebar-submenu").css("display", "none");
        $(".sidebar-wrapper .sidebar-menu > ul > li.sidebar-dropdown").removeClass("open-sub");
    });

    // $(document).on("click", ".right-icon-sub a img", function() {
    //     $("body").addClass("popup-over");
    // });
    // $(document).on("click", "span.body_bg", function() {
    //     $("body").removeClass("popup-over");
    // });
    // $(document).on("click", ".sd_header a img", function() {
    //     $("body").removeClass("popup-over");
    // });
});

const get_HeaderInterval = setInterval(get_Header_Section, 1000);
function get_Header_Section(){
    if ($(".header-section").length) {
        var tabLinkY = $(".header-section").offset().top;
        var num = tabLinkY;
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > num) {
                $('.tab_list_main').addClass('fixed_tab');
            } else {
                $('.tab_list_main').removeClass('fixed_tab');
            }
        });
        get_Header_Section_Get();
    }
}
function get_Header_Section_Get() {
    clearInterval(get_HeaderInterval);
}