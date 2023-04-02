---
title: 'WordPress code snippets'
abstract: "Usefull WordPress code snippets I've been using for years."
createdAt: 20200912
createdAtDisplay: 'September 12, 2020'
published: true
tags: ['cms']
heroImage: 'garda2.jpg'
---

## Get the Content

```php
// Get the content of the current post
$content = apply_filters('the_content', get_the_content());

// Get the content of a $post_id:
$content = apply_filters('the_content', get_post_field('post_content', $post_id));
```

## Working with images

In WordPress images are entities with id and data attached to them.

```php
// get post thumbnail src (using 'full' as image size)
$post_thumb_src = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full')[0];

// same as above, bu using reset function to read array's first element
$post_thumb_src = reset(wp_get_attachment_image_src(get_post_thumbnail_id(), 'full'));

// Get image alt text
$post_thumb_alt = get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);

// Get image caption
$post_thumb_caption = get_post(get_post_thumbnail_id())->post_excerpt;

// Get image description
$post_thumb_description = get_post($get_post_thumbnail_id())->post_content;

// Get image title
$post_thumb_title = get_the_title(get_post_thumbnail_id());
```

## Add style select to WordPress editor

Sometimes it's very useful to add a select widget to the WordPress allowing authors to choose from custom styles (classes) to be applied to selected text (eg. button, text-style, headings classes, etc.).

```php
// 1) Reveal the hidden "Styles" dropdown in the advanced toolbar.
function berry_mce_buttons_2( $buttons ) {
    array_unshift( $buttons, 'styleselect' );
    return $buttons;
}
add_filter('mce_buttons_2', 'berry_mce_buttons_2');


// 2) Add links styles
function berry_add_link_styles( $init_array ) {
    $style_formats = array(
        // Each array child is a format with it's own settings
        array(
            'title' => 'Styled link',
            'selector' => 'a',
            'classes' => 'link--styled'
        ),
        array(
            'title' => 'Button',
            'selector' => 'a',
            'classes' => 'button'
        )
    );

    $init_array['style_formats'] = json_encode( $style_formats );
    return $init_array;
}
add_filter( 'tiny_mce_before_init', 'berry_add_link_styles' );
```
