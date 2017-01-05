<div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4><i class="icon-user"></i> <span class="text-semibold">Add page</span></h4>
        </div>
    </div>
    <div class="breadcrumb-line">
        <ul class="breadcrumb">
            <li><a href="<?php echo site_url('admin/home'); ?>"><i class="icon-home2 position-left"></i> Home</a></li>
            <li><a href="<?php echo site_url('admin/users'); ?>"><i class="icon-users4 position-left"></i> Users</a></li>
            <li class="active">Add page</li>
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
            <form action="" method="post" id="page_info" class="validate-form" enctype="multipart/form-data">
                <div class="panel panel-flat form_eng">
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Select Parent Page:</label>
                            <select name="parent_id" id="parent_id" class="form-control">
                                <option value="">None</option>
                                <?php
                                if (isset($pages)) {
                                    foreach ($pages as $key => $value) {
                                        $selected = '';
                                        if ($page_data['parent_id'] == $value['id']) {
                                            $selected = 'selected';
                                        }
                                        ?>
                                        <option <?php echo $selected; ?> value="<?php echo $value['id'] ?>"><?php echo $value['title']; ?></option>
                                        <?php
                                    }
                                }
                                ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Navigation Name (English):</label>
                            <input type="text" name="navigation_name" id="navigation_name" class="form-control" value="<?php echo isset($page_data['navigation_name']) ? $page_data['navigation_name'] : set_value('navigation_name'); ?>">
                        </div>
                        <div class="form-group">
                            <label>Navigation Name (German):</label>
                            <input type="text" name="de_navigation_name" id="de_navigation_name" class="form-control" value="<?php echo isset($page_data['de_navigation_name']) ? $page_data['de_navigation_name'] : set_value('de_navigation_name'); ?>">
                        </div>
                        <div class="form-group">
                            <label>Page Title (English):</label>
                            <input type="text" name="title" id="title" class="form-control" value="<?php echo isset($page_data['title']) ? $page_data['title'] : set_value('title'); ?>">
                        </div>
                        <div class="form-group">
                            <label>Page Title (German):</label>
                            <input type="text" name="de_title" id="de_title" class="form-control" value="<?php echo isset($page_data['de_title']) ? $page_data['de_title'] : set_value('de_title'); ?>">
                        </div>
                        <div class="form-group">
                            <label>Description (English):</label>
                            <textarea name="description" id="description" rows="4" cols="4">
                                <?php echo isset($page_data['description']) ? htmlentities($page_data['description']) : set_value('description'); ?>
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Description (German):</label>
                            <textarea name="de_description" id="de_description" rows="4" cols="4">
                                <?php echo isset($page_data['de_description']) ? htmlentities($page_data['de_description']) : set_value('de_description'); ?>
                            </textarea>
                        </div>
                        <div class="row">
                            <?php
                            if (isset($page_data['banner_image'])) {
                                ?>
                                <div class="col-md-3">
                                    <img heigth="100" width="170" src="<?php echo base_url('uploads/banners/' . $page_data['banner_image']) ?>" alt="">
                                </div>
                                <?php
                            }
                            ?>
                            <div class="col-md-9">
                                <div class="form-group">
                                    <label>Banner Image:</label>
                                    <div class="uploader">
                                        <input type="file" name="banner_image" id="banner_image" class="file-styled">
                                        <span class="filename" style="">No file selected</span>
                                        <span class="action btn bg-pink-400" style="">Choose File</span>
                                    </div>
                                    <span class="help-block">Accepted formats: png, jpg, jpeg. Max file size 700Kb</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Button Text (English):</label>
                            <input type="text" name="ext_txt" id="ext_txt" class="form-control" value="<?php echo isset($page_data['ext_txt']) ? $page_data['ext_txt'] : set_value('ext_txt'); ?>"> 
                        </div>
                        <div class="form-group">
                            <label>Button Text (German):</label>
                            <input type="text" name="de_ext_txt" id="de_ext_txt" class="form-control" value="<?php echo isset($page_data['de_ext_txt']) ? $page_data['de_ext_txt'] : set_value('de_ext_txt'); ?>"> 
                        </div>
                        <div class="form-group">
                            <label>Banner Url:</label>
                            <input type="text" name="ext_url" id="ext_url" class="form-control" value="<?php echo isset($page_data['ext_url']) ? $page_data['ext_url'] : set_value('ext_url'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta title (English):</label>
                            <input type="text" name="meta_title" id="meta_title" class="form-control" value="<?php echo isset($page_data['meta_title']) ? $page_data['meta_title'] : set_value('meta_title'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta title (German):</label>
                            <input type="text" name="de_meta_title" id="de_meta_title" class="form-control" value="<?php echo isset($page_data['de_meta_title']) ? $page_data['de_meta_title'] : set_value('de_meta_title'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta keyword (English):</label>
                            <input type="text" name="meta_keyword" id="meta_keyword" class="form-control" value="<?php echo isset($page_data['meta_keyword']) ? $page_data['meta_keyword'] : set_value('meta_keyword'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta keyword (German):</label>
                            <input type="text" name="de_meta_keyword" id="de_meta_keyword" class="form-control" value="<?php echo isset($page_data['de_meta_keyword']) ? $page_data['de_meta_keyword'] : set_value('de_meta_keyword'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta Description (English):</label>
                            <input type="text" name="meta_description" id="meta_description" class="form-control" value="<?php echo isset($page_data['meta_description']) ? $page_data['meta_description'] : set_value('meta_description'); ?>">
                        </div>
                        <div class="form-group">
                            <label>SEO Meta Description (German):</label>
                            <input type="text" name="de_meta_description" id="de_meta_description" class="form-control" value="<?php echo isset($page_data['de_meta_description']) ? $page_data['de_meta_description'] : set_value('de_meta_description'); ?>">
                        </div>
                        <div class="text-right">
                            <button class="btn btn-primary" type="submit">Save<i class="icon-arrow-right14 position-right"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    $('document').ready(function () {

        CKEDITOR.replace('description', {
            height: '400px'
        });
        CKEDITOR.replace('de_description', {
            height: '400px'
        });
        $("#page_info").validate({
            rules: {
                navigation_name: {
                    required: true,
                },
                title: {
                    required: true,
                },
                description: {
                    required: true,
                },
                ext_url: {
                    url: true
                },
                meta_title: {
                    required: true
                },
                meta_description: {
                    required: true,
                },
                meta_keyword: {
                    required: true,
                },
                de_navigation_name: {
                    required: true,
                },
                de_title: {
                    required: true,
                },
                de_description: {
                    required: true,
                },
                de_ext_url: {
                    url: true
                },
                de_meta_title: {
                    required: true
                },
                de_meta_description: {
                    required: true,
                },
                de_meta_keyword: {
                    required: true,
                },
//                banner_image: {
//                    required: true,
//                    extension: "jpg|png|jpeg",
//                    maxFileSize: {
//                        "unit": "KB",
//                        "size": 700
//                    }
//                },
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") == "banner_image") {
                    error.insertAfter($(".uploader"));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            },
        });
    });

    document.getElementById('banner_image').onchange = function () {
        $('.filename').html(this.value);
    };
</script>