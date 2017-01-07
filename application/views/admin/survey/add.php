<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>plugins/editors/summernote/summernote.min.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/editor_summernote.js"></script>
<script type="text/javascript" src="<?=DEFAULT_ADMIN_JS_PATH?>pages/form_inputs.js"></script>

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
                            <label class="col-lg-3 control-label">Status:</label>
                            <div class="col-lg-9">
                                <label class="radio-inline">
                                    <input type="radio" name="radio-inline-left" class="styled" checked="checked">
                                    Selected styled
                                </label>

                                <label class="radio-inline">
                                    <input type="radio" name="radio-inline-left" class="styled">
                                    Unselected styled
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="display-block text-semibold">Left inline styled</label>
                            
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Blog Description:</label>
                            <div class="col-lg-12">
                                <textarea name="blog_description" id="blog_description" placeholder="Enter blog Description" class="summernote form-control"><?php echo (isset($record['blog_description'])) ? $record['blog_description'] : set_value('blog_description'); ?></textarea>
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

<script type="text/javascript">
    $(".styled, .multiselect-container input").uniform({
        radioClass: 'choice'
    });
</script>