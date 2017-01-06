
<script type="text/javascript" src="<?php echo base_url().'public/back/'; ?>ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/editor_ckeditor.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>plugins/editors/ace/ace.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/editor_code.js"></script>

<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold"><?php echo $heading; ?></span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/cms'); ?>"><i class="icon-file-text position-left"></i> Cms Page</a></li>
            <li class="active"><?php echo $heading; ?></li>
        </ul>
    </div>
</div>
<?php
if ($this->session->flashdata('success')) {
    ?>
    <div class="content pt0">
        <div class="alert alert-success">
            <a class="close" data-dismiss="alert">X</a>
            <strong><?= $this->session->flashdata('success') ?></strong>
        </div>
    </div>
    <?php
    $this->session->set_flashdata('success', false);
} else if ($this->session->flashdata('error')) {
    ?>
    <div class="content pt0">
        <div class="alert alert-danger">
            <a class="close" data-dismiss="alert">X</a>
            <strong><?= $this->session->flashdata('error') ?></strong>
        </div>
    </div>
    <?php
    $this->session->set_flashdata('error', false);
} 
?>
<div class="content">
    <div class="row">
        <div class="col-md-12">
            <form class="form-horizontal form-validate" action="" id="frmcms" method="POST">
                <input type="hidden" name="slug" id="slug" value="<?php echo (isset($record['slug'])) ? $record['slug'] : set_value('slug'); ?>">
                <div class="panel panel-flat">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Page Title:</label>
                            <div class="col-lg-9">
                                <input type="text" name="title" id="title" placeholder="Enter page title" class="form-control" value="<?php echo (isset($record['title'])) ? $record['title'] : set_value('title'); ?>">
                            </div>
                        </div>
                       <div class="form-group">
                            <label class="col-lg-3 control-label">SEO Title:</label>
                            <div class="col-lg-9">
                                <input type="text" name="seo_title" id="seo_title" placeholder="Enter SEO title" class="form-control" value="<?php echo (isset($record['seo_title'])) ? $record['seo_title'] : set_value('seo_title'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">SEO Keyword:</label>
                            <div class="col-lg-9">
                                <input type="text" name="seo_keyword" id="seo_keyword" placeholder="Enter SEO Keyword" class="form-control" value="<?php echo (isset($record['seo_keyword'])) ? $record['seo_keyword'] : set_value('seo_keyword'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">SEO Description:</label>
                            <div class="col-lg-9">
                                <input type="text" name="seo_description" id="seo_description" placeholder="Enter SEO Description" class="form-control" value="<?php echo (isset($record['seo_description'])) ? $record['seo_description'] : set_value('seo_description'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Status:</label>
                            <div class="col-lg-3">
                                <label class="radio-inline">
                                    <input type="radio" class="styled" name="is_blocked" value="1" checked <?php
                                    if (isset($record['is_blocked']) && $record['is_blocked'] == '1') {
                                        echo 'checked';
                                    }
                                    ?>>
                                    Block
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" class="styled" name="is_blocked" value="0" <?php
                                    if (isset($record['is_blocked']) && $record['is_blocked'] == '0') {
                                        echo 'checked';
                                    }
                                    ?>>
                                    Unblock
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Page Description:</label>
                            <div class="col-lg-12">
                                <textarea name="blog_description" id="editor-full" placeholder="Enter blog Description"><?php echo (isset($record['blog_description'])) ? $record['blog_description'] : set_value('blog_description'); ?></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Page Css:</label>
                            <div class="col-lg-12">
                                <textarea name="css_style" id="css_editor" placeholder="Enter Page Style"><?php echo (isset($record['css_style'])) ? $record['css_style'] : set_value('css_style'); ?></textarea>
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