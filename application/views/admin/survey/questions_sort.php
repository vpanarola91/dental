
<script type="text/javascript" src="<?php echo DEFAULT_ADMIN_JS_PATH; ?>core/libraries/jquery_ui/interactions.min.js"></script>

<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold">Website Survey Questions Sort</span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/survey'); ?>"> Survey</a></li>
            <li class="active">Questions Sort</li>
        </ul>
    </div>
</div>
<div class="content">
    <div class="row">
        <div class="col-md-6">

            <!-- Default functionality -->
            <div class="panel panel-flat">
                <div class="panel-heading">
                    <h6 class="panel-title text-semibold">Default functionality</h6>
                    <div class="heading-elements">
                        <ul class="icons-list">
                            <li><a data-action="collapse"></a></li>
                            <li><a data-action="reload"></a></li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="panel-body">
                    <p class="content-group">Enable a group of DOM elements to be sortable. Click on and drag an element to a new spot within the list, and the other items will adjust to fit. By default, sortable items share draggable properties.</p>

                    <div class="text-center">
                        <ul class="selectable-demo-list" id="sortable-list-basic">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /default functionality -->

        </div>

        <div class="col-md-6">
            
            <!-- Drop placeholder -->
            <div class="panel panel-flat">
                <div class="panel-heading">
                    <h6 class="panel-title text-semibold">Drop placeholder</h6>
                    <div class="heading-elements">
                        <ul class="icons-list">
                            <li><a data-action="collapse"></a></li>
                            <li><a data-action="reload"></a></li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="panel-body">
                    <p class="content-group">To fill the empty room for a sortable item, pass a class into the placeholder option to style that space to be visible. Use the boolean <code>forcePlaceholderSize</code> option to set dimensions on the placeholder.</p>

                    <div class="text-center">
                        <ul class="selectable-demo-list" id="sortable-list-placeholder">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /drop placeholder -->

        </div>
    </div>
</div>

<script type="text/javascript">
    
     // Sortable
    // -------------------------

    // Basic functionality
    $("#sortable-list-basic").sortable();
    $("#sortable-list-basic").disableSelection();


    // Placeholder
    $( "#sortable-list-placeholder" ).sortable({
        placeholder: "sortable-placeholder",
        start: function(e, ui){
            ui.placeholder.height(ui.item.outerHeight());
        }
    });
    $( "#sortable-list-placeholder" ).disableSelection();


    // Connected lists
    $("#sortable-list-first, #sortable-list-second").sortable({
        connectWith: ".selectable-demo-connected"
    }).disableSelection();


    //
    // Include/exclude items
    //

    // Specify sort items
    $("#sortable-list-specify").sortable({
        items: "li:not(.ui-state-disabled)"
    });

    // Exclude items
    $("#sortable-list-cancel").sortable({
        cancel: ".ui-state-disabled"
    });

    // Disable selections
    $("#sortable-list-specify li, #sortable-list-cancel li").disableSelection();

</script>

