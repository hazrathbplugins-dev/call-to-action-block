<?php
// This file is generated. Do not modify it manually.
return array(
	'call-to-action-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/call-to-action-block',
		'version' => '0.1.0',
		'title' => 'Call To Action Block',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'A simple, customizable call-to-action block for Gutenberg.',
		'example' => array(
			
		),
		'attributes' => array(
			'contactIcon' => array(
				'type' => 'string',
				'default' => 'ri-megaphone-line'
			),
			'contactLabel' => array(
				'type' => 'string',
				'default' => '0000-000-000'
			),
			'contactNumber' => array(
				'type' => 'string',
				'default' => '0000000000'
			),
			'contactInfo' => array(
				'type' => 'string',
				'default' => 'Business hours: 9:00 - 18:00 (closed on weekends and holidays)'
			),
			'layoutStyle' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'subHeading' => array(
				'type' => 'string',
				'default' => 'Free consultation'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Welcome to Our Web Experience'
			),
			'subHeadingColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'subHeadingBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'descriptionColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Beautiful UI sections, interactive features, and smooth animations.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Get Started'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'sectionPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '100',
						'right' => '0',
						'bottom' => '100',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => '70',
						'right' => '0',
						'bottom' => '70',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => '50',
						'right' => '0',
						'bottom' => '50',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'sectionMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'subHeadingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'subHeadingFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 12
			),
			'subHeadingFontSizeTablet' => array(
				'type' => 'number',
				'default' => 12
			),
			'subHeadingFontSizeMobile' => array(
				'type' => 'number',
				'default' => 12
			),
			'headingFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 40
			),
			'headingFontSizeTablet' => array(
				'type' => 'number',
				'default' => 28
			),
			'headingFontSizeMobile' => array(
				'type' => 'number',
				'default' => 22
			),
			'subHeadingFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'subHeadingTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'headingFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'headingTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'subHeadingLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'subHeadingLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'subHeadingLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'headingLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'headingLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'headingLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'subHeadingPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '10',
						'right' => '12',
						'bottom' => '10',
						'left' => '12',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '10',
						'right' => '12',
						'bottom' => '10',
						'left' => '12',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '10',
						'right' => '12',
						'bottom' => '10',
						'left' => '12',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'subHeadingMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'headingPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '10',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'headingMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'descriptionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 18
			),
			'descriptionFontSizeTablet' => array(
				'type' => 'number',
				'default' => 18
			),
			'descriptionFontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			),
			'descriptionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'descriptionLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'descriptionLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'descriptionLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'descriptionPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '0',
						'right' => '0',
						'bottom' => '30',
						'left' => '0',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'descriptionMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => true
					)
				)
			),
			'buttonFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontSizeTablet' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			),
			'buttonFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'buttonLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'buttonLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'buttonLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'buttonPadding' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => '12',
						'right' => '21',
						'bottom' => '12',
						'left' => '21',
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'buttonMargin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'unit' => 'px',
						'isLinked' => false
					)
				)
			),
			'buttonTextColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgType' => array(
				'type' => 'string',
				'default' => 'gradient'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradient1' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradient2' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgGradientAngle' => array(
				'type' => 'number',
				'default' => 90
			),
			'contactInfoColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'contactInfoFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'contactInfoFontSizeDesktop' => array(
				'type' => 'number',
				'default' => 16
			),
			'contactInfoFontSizeTablet' => array(
				'type' => 'number',
				'default' => 16
			),
			'contactInfoFontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			),
			'contactInfoFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'contactInfoTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'contactInfoLineHeightDesktop' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'contactInfoLineHeightTablet' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'contactInfoLineHeightMobile' => array(
				'type' => 'number',
				'default' => 1.3
			),
			'contactNumberColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'availableInfoColor' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'left',
				'right',
				'full'
			)
		),
		'textdomain' => 'call-to-action-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-view.css',
		'render' => 'file:./render.php',
		'viewScript' => array(
			'file:./view.js',
			'react',
			'react-dom'
		)
	)
);
