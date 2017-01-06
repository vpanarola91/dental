<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/form_inputs.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/editor_ckeditor.js"></script>


<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold"><?php echo $heading; ?></span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/users'); ?>"><i class="icon-users4 position-left"></i> Blogs</a></li>
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
} else {
    echo validation_errors();
}
?>
<div class="content">
    <div class="row">
        <div class="col-md-12">
            <form class="form-horizontal form-validate" action="" id="frmblog" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="blog_slug" id="blog_slug" value="<?php echo (isset($record['blog_slug'])) ? $record['blog_slug'] : set_value('blog_slug'); ?>">
                <div class="panel panel-flat">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Blog Title:</label>
                            <div class="col-lg-9">
                                <input type="text" name="blog_title" id="blog_title" placeholder="Enter blog title" class="form-control" value="<?php echo (isset($record['blog_title'])) ? $record['blog_title'] : set_value('blog_title'); ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Blog Image:</label>
                            <div class="col-lg-9">
                                <input type="file" name="img_path" class="file-styled" tabindex="4">
                                <input type="hidden" value="<?= isset($record['img_path']) ? $record['img_path'] : '' ?>" name="Himg_path">
                            </div>
                        </div>    
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Is Block:</label>
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
                            <label class="col-lg-3 control-label">Blog Description:</label>
                            <div class="col-lg-12">
                                <textarea name="blog_description" id="editor-full" placeholder="Enter blog Description"><?php echo (isset($record['blog_description'])) ? $record['blog_description'] : set_value('blog_description'); ?></textarea>
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
$("#blog_title").blur(function () {
    var Text = $(this).val();
    Text = Text.toLowerCase();
    Text = Text.replace(/[^a-zA-Z0-9]+/g, '-');
    $("#blog_slug").val(Text);
});

//---------------------- Validation -------------------
$("#frmblog").validate({
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
        blog_title: {
            required: true,
            remote: {
                url: "<?php echo base_url('admin/blogs/check_blog_title_exists/' . (isset($record['id']) ? $record['id'] : '0')); ?>",
                type: "post",
                data: {
                    blog_title: function () {
                        return $("#blog_title").val();
                    }
                }
            }
        },
        blog_description: {
            required: true
        }

    },
    messages: {
        blog_title: {
            required: "Please provide a Title",
            remote: "Title is already exist, please choose diffrent Title"
        },
        blog_description: {
            required: "Please provide a Description"
        }

    }
});

//$(element).closest('.form-group').removeClass('has-error');

</script>