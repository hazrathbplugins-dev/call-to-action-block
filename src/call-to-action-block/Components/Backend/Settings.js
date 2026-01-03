import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { TypographyControl } from './Style/TypographyControl';
import ColorControl from './Style/ColorControl';
import DimensionControl from './Style/DimensionControl';
import BackgroundColor from './Style/BackgroundColor';
import IconSelector from './Style/IconSelector';
function Settings({ attributes, setAttributes }) {
    const { layoutStyle, headingTag, alignment, headingColor, buttonText, buttonUrl, headingPadding, headingMargin, sectionPadding, sectionMargin, contactIcon, contactLabel, contactNumber, contactInfo } = attributes;
    {/* Inspector Settings */ }
    return (
        <>
            <InspectorControls>
                <PanelBody title={__('General', 'call-to-action-block')} initialOpen={true}>
                    <SelectControl
                        label={__('Heading HTML Tag', 'call-to-action-block')}
                        value={headingTag}
                        options={[
                            { label: 'H1', value: 'h1' },
                            { label: 'H2', value: 'h2' },
                            { label: 'H3', value: 'h3' },
                            { label: 'H4', value: 'h4' },
                            { label: 'H5', value: 'h5' },
                            { label: 'H6', value: 'h6' },
                        ]}
                        onChange={(value) => setAttributes({ headingTag: value })}
                    />
                    <TextControl
                        label={__('Heading Text', 'call-to-action-block')}
                        value={attributes.heading}
                        onChange={(value) => setAttributes({ heading: value })}
                    />
                    <TextControl
                        label={__('Description Text', 'call-to-action-block')}
                        value={attributes.description}
                        onChange={(value) => setAttributes({ description: value })}
                    />
                    <SelectControl
                        label={__('Alignment', 'call-to-action-block')}
                        value={alignment}
                        options={[
                            { label: 'Left', value: 'start' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'end' },
                        ]}
                        onChange={(value) => setAttributes({ alignment: value })}
                    />
                    { layoutStyle == 'simple' && <TextControl
                        label={__('Contact Label', 'call-to-action-block')}
                        value={contactLabel}
                        onChange={(value) => setAttributes({ contactLabel: value })}
                    />}
                    { layoutStyle == 'simple' && <IconSelector
                        value={contactIcon}
                        onChange={(contactIcon) => setAttributes({ contactIcon })}
                    />}
                    { layoutStyle == 'simple' && <TextControl
                        label={__('Contact Number', 'call-to-action-block')}
                        value={contactNumber}
                        onChange={(value) => setAttributes({ contactNumber: value })}
                    />}
                    { layoutStyle == 'simple' && <TextControl
                        label={__('Contact Info', 'call-to-action-block')}
                        value={contactInfo}
                        onChange={(value) => setAttributes({ contactInfo: value })}
                    />}
                </PanelBody>
                <PanelBody title={__('Button', 'call-to-action-block')} initialOpen={false}>
                    <TextControl
                        label={__('Button Text', 'call-to-action-block')}
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                    />
                    <TextControl
                        label={__('Button URL', 'call-to-action-block')}
                        value={buttonUrl}
                        onChange={(value) => setAttributes({ buttonUrl: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <InspectorControls group="styles">
                <PanelBody title={__('Section Layout', 'call-to-action-block')} initialOpen={true}>
                    <BackgroundColor attributes={attributes} setAttributes={setAttributes} />
                    <DimensionControl
                        label="Padding"
                        value={sectionPadding}
                        onChange={(newVal) => setAttributes({ sectionPadding: newVal })}
                    />
                    <DimensionControl
                        label="Margin"
                        value={sectionMargin}
                        onChange={(newVal) => setAttributes({ sectionMargin: newVal })}
                    />
                </PanelBody>
                { layoutStyle == 'simple' && <PanelBody title={__('Sub Heading Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="subHeading" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={attributes.subHeadingColor}
                        onChange={(color) => setAttributes({ subHeadingColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <ColorControl
                        label={__('Background Color', 'call-to-action-block')}
                        value={attributes.subHeadingBgColor}
                        onChange={(color) => setAttributes({ subHeadingBgColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <DimensionControl
                        label="Padding"
                        value={attributes.subHeadingPadding}
                        onChange={(newVal) => setAttributes({ subHeadingPadding: newVal })}
                    />
                    <DimensionControl
                        label="Margin"
                        value={attributes.subHeadingMargin}
                        onChange={(newVal) => setAttributes({ subHeadingMargin: newVal })}
                    />
                </PanelBody>}
                <PanelBody title={__('Heading Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="heading" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={headingColor}
                        onChange={(color) => setAttributes({ headingColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <DimensionControl
                        label="Padding"
                        value={headingPadding}
                        onChange={(newVal) => setAttributes({ headingPadding: newVal })}
                    />
                    <DimensionControl
                        label="Margin"
                        value={headingMargin}
                        onChange={(newVal) => setAttributes({ headingMargin: newVal })}
                    />
                </PanelBody>
                <PanelBody title={__('Description Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="description" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={attributes.descriptionColor}
                        onChange={(color) => setAttributes({ descriptionColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <DimensionControl
                        label="Padding"
                        value={attributes.descriptionPadding}
                        onChange={(newVal) => setAttributes({ descriptionPadding: newVal })}
                    />
                    <DimensionControl
                        label="Margin"
                        value={attributes.descriptionMargin}
                        onChange={(newVal) => setAttributes({ descriptionMargin: newVal })}
                    />
                </PanelBody>
                <PanelBody title={__('Button Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="button" />
                    <ColorControl
                        label={__('Text Color', 'call-to-action-block')}
                        value={attributes.buttonTextColor}
                        onChange={(color) => setAttributes({ buttonTextColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <ColorControl
                        label={__('Background Color', 'call-to-action-block')}
                        value={attributes.buttonBgColor}
                        onChange={(color) => setAttributes({ buttonBgColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                    <DimensionControl
                        label="Padding"
                        value={attributes.buttonPadding}
                        onChange={(newVal) => setAttributes({ buttonPadding: newVal })}
                    />
                    <DimensionControl
                        label="Margin"
                        value={attributes.buttonMargin}
                        onChange={(newVal) => setAttributes({ buttonMargin: newVal })}
                    />
                </PanelBody>
            </InspectorControls>
            { layoutStyle === 'simple' && <InspectorControls group="styles">
                <PanelBody title={__('Contact Number Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="subHeading" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={attributes.contactNumberColor}
                        onChange={(color) => setAttributes({ contactNumberColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                </PanelBody>
            </InspectorControls>}
            { layoutStyle === 'simple' && <InspectorControls group="styles">
                <PanelBody title={__('Contact Info Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="subHeading" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={attributes.contactInfoColor}
                        onChange={(color) => setAttributes({ contactInfoColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                </PanelBody>
            </InspectorControls>}
            { layoutStyle === 'simple' && <InspectorControls group="styles">
                <PanelBody title={__('Available Info Styles', 'call-to-action-block')} initialOpen={false}>
                    <TypographyControl attributes={attributes} setAttributes={setAttributes} prefix="subHeading" />
                    <ColorControl
                        label={__('Color', 'call-to-action-block')}
                        value={attributes.availableInfoColor}
                        onChange={(color) => setAttributes({ availableInfoColor: color })}
                        defaultColor=""
                        className="color-picker-control"
                    />
                </PanelBody>
            </InspectorControls>}
        </>
    )
}
export default Settings;