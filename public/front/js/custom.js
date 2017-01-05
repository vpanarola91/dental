$(document).ready(function() {

    $('ul.nav.nav-tabs  a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
    (function($) {
        fakewaffle.responsiveTabs(['xs', 'sm']);
    })(jQuery);


});

function show_notification(noti_title,noti_message,noti_url,noti_alert_type) {
    $.notify({
        // options
        icon: 'fa fa-warning',
        title: noti_title,
        message: noti_message,
        url: noti_url,
        target:'_self'
    }, {
        // settings
        delay:10000000,
        element: 'body',
        position: null,
        type: noti_alert_type,
        allow_dismiss: true,
        newest_on_top: true,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: {x:20,y:100},
        spacing: 10,
        animate: {
            enter: 'animated fadeInRightBig',
            exit: 'animated fadeOutRightBig'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}

function show_notification_message(noti_title,noti_message,noti_url,noti_alert_type) {
    $.notify({
        // options
        icon: 'fa fa-warning',
        title: noti_title,
        message: noti_message,
        url: noti_url,
        target:'_self'
    }, {
        // settings
        delay:3000,
        element: 'body',
        position: null,
        type: noti_alert_type,
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: {x:20,y:100},
        spacing: 10,
        animate: {
            enter: 'animated fadeInRight',
            exit: 'animated fadeOutRight'
        },
        onShow: function(){
            $.ajax({
                url:base_url_js+"user/notification/clear_message_notification",
                type:"GET",
                dataType:"JSON",
                success:function(data){
                    console.log(data);
                }
            });
        },
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });
}
