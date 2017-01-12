<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/form_inputs.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>plugins/forms/selects/bootstrap_select.min.js"></script>

<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold">Website Survey</span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/survey'); ?>"> Survey</a></li>
            <li class="active">Add</li>
        </ul>
    </div>
</div>
<div class="content">
    <div class="row">
        <div class="col-md-12">
            <form class="form-horizontal form-validate" id="form_survey" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="blog_slug" id="blog_slug" value="<?php echo (isset($record['blog_slug'])) ? $record['blog_slug'] : set_value('blog_slug'); ?>">
                <div class="panel panel-flat">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Question text:</label>
                            <div class="col-lg-9">
                                <input type="text" name="ques" id="ques" placeholder="Enter Question Text" class="form-control" >
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Answer Type:</label>
                            <div class="col-lg-3">
                                <select class="bootstrap-select" data-width="100%" onchange="change_opt_val(this)" name="opt_type">
                                    <option value="textbox">Textbox</option>
                                    <option value="radio">Radio</option>
                                    <option value="checkbox">Checkbox</option>
                                    <option value="textarea">Textarea</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-lg-3 control-label">Is Required ? :</label>
                            <div class="col-lg-9">
                                <label class="radio-inline">
                                    <input type="radio" name="is_required" class="styled" value="1">
                                    Yes
                                </label>

                                <label class="radio-inline">
                                    <input type="radio" name="is_required" class="styled" checked="checked" value="0">
                                    No
                                </label>
                            </div>
                        </div> 
                        
                        <div class="survey_options">                            
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Answer Options :</label>
                                <div class="col-lg-4">
                                    <input type="text" name="" id="" class="form-control ">
                                </div>
                                <a class="btn btn-info btn-float" title="Delete"> <i class="icon-cross2"></i> </a>
                            </div> 
                        </div>

                        <div class="form-group">
                            <label class="col-lg-3 control-label">Status? :</label>
                            <div class="col-lg-9">
                                <label class="radio-inline">
                                    <input type="radio" name="status" class="styled" value="1">
                                    Active
                                </label>

                                <label class="radio-inline">
                                    <input type="radio" name="status" class="styled" checked="checked" value="0">
                                    In-active
                                </label>
                            </div>
                        </div> 


                        <div class="form-group text-right">
                            <div class="col-lg-5">

                            </div>
                            <div class="col-lg-5">
                                <button class="btn btn-success" type="submit">
                                    Save<i class="icon-arrow-right14 position-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script type="text/javascript">

    $(function() {
        // Override defaults
        $.fn.selectpicker.defaults = {
            iconBase: '',
            tickIcon: 'icon-checkmark3'
        }
        // Basic select
        $('.bootstrap-select').selectpicker();
    });

    function change_opt_val(obj){
        console.log($(obj).val());
    }

    // v! Create fancy radio buttons
    $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });

    //---------------------- Validation -------------------
    $("#form_survey").validate({
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        },
        validClass: "validation-valid-label",
        rules: {
            survey_title: {
                required: true
            },
            survey_description: {
                required: true
            }
        },
        messages: {
            survey_title: {
                required: "Please provide a Title"                
            },
            survey_description: {
                required: "Please provide a Description"
            }
        }
    });

</script>