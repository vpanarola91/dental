<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>plugins/forms/tags/tokenfield.min.js"></script>
<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold"><?php echo $heading; ?></span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/settings'); ?>"><i class="icon-file-text position-left"></i> Settings</a></li>
            <li class="active"><?php echo $heading; ?></li>
        </ul>
    </div>
</div>

<div class="content">
    <div class="row">
        <div class="col-md-12">
            <form class="form-horizontal form-validate" action="" id="frmcms" method="POST">
                <input type="hidden" name="slug" id="slug" value="<?php echo (isset($record['slug'])) ? $record['slug'] : set_value('slug'); ?>">
                <div class="panel panel-flat">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Site Name:</label>
                            <div class="col-lg-9">
                                <input type="text" name="site_name" id="site_name" placeholder="Enter Site Name" class="form-control" value="<?php echo (isset($record['site_name'])) ? $record['site_name'] : set_value('site_name'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Site Title:</label>
                            <div class="col-lg-9">
                                <input type="text" name="site_title" id="site_title" placeholder="Enter Site title" class="form-control" value="<?php echo (isset($record['site_title'])) ? $record['site_title'] : set_value('site_title'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Contact Email:</label>
                            <div class="col-lg-9">
                                <input type="text" name="contact_email" id="contact_email" placeholder="Enter Contact Email" class="form-control" value="<?php echo (isset($record['contact_email'])) ? $record['contact_email'] : set_value('contact_email'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Site Keyword:</label>
                            <div class="col-lg-9">
                                <input type="text" name="site_keywords" id="site_keywords" placeholder="Enter Site Keyword" class="form-control tokenfield-teal" value="<?php echo (isset($record['site_keywords'])) ? $record['site_keywords'] : set_value('site_keywords'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">SEO Description:</label>
                            <div class="col-lg-9">
                                <textarea name="seo_description" id="seo_description" placeholder="Enter SEO Description" class="form-control"><?php echo (isset($record['seo_description'])) ? $record['seo_description'] : set_value('seo_description'); ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Status:</label>
                            <div class="col-lg-3">
                                <label class="radio-inline">
                                    <input type="radio" class="styled" name="is_blocked" value="0" checked <?php
                                    if (isset($record['is_blocked']) && $record['is_blocked'] == '0') {
                                        echo 'checked';
                                    }
                                    ?>>
                                    Unblock
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" class="styled" name="is_blocked" value="1" <?php
                                    if (isset($record['is_blocked']) && $record['is_blocked'] == '1') {
                                        echo 'checked';
                                    }
                                    ?>>
                                    Block
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Page Description:</label>
                            <div class="col-lg-12">
                                <textarea name="description" id="description" placeholder="Enter Page Description" class="summernote form-control"><?php echo (isset($record['description'])) ? $record['description'] : set_value('description'); ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Page Css:</label>
                            <div class="col-lg-12">
                               <textarea name="css_style" id="css_style" placeholder="Enter Page Style" class="form-control" rows="15"><?php echo (isset($record['css_style'])) ? $record['css_style'] : set_value('css_style'); ?></textarea>
                           </div>
                       </div>
                       <div class="text-right">
                        <button class="btn btn-success" type="submit">Save <i class="icon-arrow-right14 position-right"></i></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
<script>
 $(".styled, .multiselect-container input").uniform({
        radioClass: 'choice'
    });

$(function(){
     // Add class on init
     $('.tokenfield-teal').on('tokenfield:initialize', function (e) {
        $(this).parent().find('.token').addClass('bg-teal')
    });

    // Initialize plugin
    $('.tokenfield-teal').tokenfield();

    // Add class when token is created
    $('.tokenfield-teal').on('tokenfield:createdtoken', function (e) {
        $(e.relatedTarget).addClass('bg-teal')
    });

    // CSS editor
    // var css_editor = ace.edit("css_editor");
    // css_editor.setTheme("ace/theme/monokai");
    // css_editor.getSession().setMode("ace/mode/css");
    // css_editor.setShowPrintMargin(false);
});

$("#title").blur(function () {
    var Text = $(this).val();
    Text = Text.toLowerCase();
    Text = Text.replace(/[^a-zA-Z0-9]+/g, '-');
    $("#slug").val(Text);
});

//---------------------- Validation -------------------
$("#frmcms").validate({
    errorClass: 'validation-error-label',
    successClass: 'validation-valid-label',
    highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },
    unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
    },
    validClass: "validation-valid-label",
    success: function(label) {
        label.addClass("validation-valid-label").text("Success.")
    },
    rules: {
        title: {
            required: true,
            remote: {
                url: "<?php echo base_url('admin/cms/check_cms_title_exists/' . (isset($record['id']) ? $record['id'] : '0')); ?>",
                type: "post",
                data: {
                    title: function () {
                        return $("#title").val();
                    }
                }
            }
        }

    },
    messages: {
        title: {
            required: "Please provide a Title",
            remote: "Title is already exist, please choose diffrent Title"
        }

    }
});
</script>