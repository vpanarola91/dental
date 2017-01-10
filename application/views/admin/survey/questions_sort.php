<script type="text/javascript" src="<?php echo DEFAULT_ADMIN_JS_PATH . "plugins/tables/datatables/datatables.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo DEFAULT_ADMIN_JS_PATH . "plugins/forms/selects/select2.min.js"; ?>"></script>
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
        <div class="panel panel-flat">
            <div class="panel-heading text-right">
                <a href="<?php echo site_url('admin/survey/add'); ?>" class="btn btn-success btn-labeled">
                    <b><i class="icon-stats-growth"></i></b>
                    Add New Survey
                </a>
            </div>
            <table class="table datatable-basic">
                <thead>
                    <tr>
                        <th>User ID.</th>
                        <th>Survey Name</th>
                        <th width="500px">Survey Description</th>
                        <th>Status</th>                        
                        <th>Created Date</th>                        
                        <th width="100px">Action</th>
                    </tr>
                </thead>
            </table>        
        </div>
    </div>

    <div class="row">                    
        <!-- Drop placeholder -->
        <div class="panel panel-flat col-sm-6">
            <div class="panel-heading">
                <h6 class="panel-title text-semibold">Drop placeholder</h6>                
            </div>

            <div class="panel-body">
                <p class="content-group">You can sort questions order.Drag and drop as you like to set to order.</p>
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

<script type="text/javascript">
    
    $(function () {
        $('.datatable-basic').dataTable({
            processing: true,
            serverSide: true,
            language: {
                search: '<span>Filter:</span> _INPUT_',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: {'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;'}
            },
            dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
            order: [[0, "asc"]],
            ajax: '<?php echo base_url()."admin/survey/list_questions/".$survey_id; ?>',
            columns: [
                {
                    orderable : false, 
                    aTargets : [0],
                    data: "test_id",
                    visible: true
                },
                {
                    sortable: false,
                    data: "ques",
                    visible: true
                },
                {
                    sortable: false,
                    data: "opt_type",
                    visible: true
                },
                {
                    sortable: false,
                    data: "opt_choice",
                    visible: true
                },
                {
                    sortable: false,
                    data: "order",
                    visible: true
                },
                {                    
                    visible: true,
                    searchable: false,
                    sortable: false,
                    render: function (data, type, full, meta) {
                        var new_str = '';
                        new_str += '<div class="btn-group"><button type="button" class="btn btn-primary btn-icon dropdown-toggle" data-toggle="dropdown">';
                        new_str += '<i class="icon-menu7"></i> &nbsp;<span class="caret"></span></button>';
                        new_str += '<ul class="dropdown-menu dropdown-menu-right"><li><a href="<?php echo base_url();?>admin/survey/questions/'+full['id']+'"><i class="icon-question4"></i> View Questions </a></li>';
                        new_str += '<li><a href="<?php echo base_url();?>admin/survey/edit/'+full['id']+'"><i class="icon-pencil7"></i>Edit</a></li>';
                        new_str += '<li><a class="for_pointer" onclick="delete_confirm('+full['id']+')" ><i class="icon-trash"></i> Delete</a></li>';
                        new_str += '</ul></div>';
                        return new_str;
                    }
                }
            ]
        });

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            width: 'auto'
        });
    });

    // Sortable || Placeholder
    $( "#sortable-list-placeholder" ).sortable({
        placeholder: "sortable-placeholder",
        start: function(e, ui){
            ui.placeholder.height(ui.item.outerHeight());
        }
    });
    $( "#sortable-list-placeholder" ).disableSelection();

</script>

