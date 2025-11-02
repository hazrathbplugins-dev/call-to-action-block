/**
 * Style.jsx
 * -------------------------------------------------
 * Generates <style> tag with:
 *   • Heading typography, color, padding, margin (desktop / tablet / mobile)
 *   • Section background (solid color OR gradient)
 *   • Section padding & margin (desktop / tablet / mobile)
 */
import { __ } from '@wordpress/i18n';

const Style = ({ attributes }) => {
    const {
        headingColor,
        headingFontFamily,
        headingFontWeight,
        headingTextTransform,
        headingFontSizeDesktop,
        headingFontSizeTablet,
        headingFontSizeMobile,
        headingLineHeightDesktop,
        headingLineHeightTablet,
        headingLineHeightMobile,
        headingPadding,
        headingMargin,
        descriptionColor,
        descriptionFontFamily,
        descriptionFontWeight,
        descriptionTextTransform,
        descriptionFontSizeDesktop,
        descriptionFontSizeTablet,
        descriptionFontSizeMobile,
        descriptionLineHeightDesktop,
        descriptionLineHeightTablet,
        descriptionLineHeightMobile,
        descriptionPadding,
        descriptionMargin,
        buttonFontFamily,
        buttonFontWeight,
        buttonTextTransform,
        buttonFontSizeDesktop,
        buttonFontSizeTablet,
        buttonFontSizeMobile,
        buttonLineHeightDesktop,
        buttonLineHeightTablet,
        buttonLineHeightMobile,
        buttonPadding,
        buttonMargin,
        bgType,          
        bgColor,         // hex string
        bgGradient1,      // gradient object
        bgGradient2,
        bgGradientAngle,
        sectionPadding,
        sectionMargin,
    } = attributes;

    /* ------------------------------------------------------------------
       1. Helper – turn a value + unit into a CSS string (e.g. 20 → "20px")
       ------------------------------------------------------------------ */
    const formatSide = (val, unit) => {
        if (val === undefined || val === null || val === '') return `0${unit || 'px'}`;
        const v = String(val).trim();
        if (/\d\s*(px|%|em|rem|vh|vw)$/.test(v)) return v;      // already has unit
        return `${v}${unit || 'px'}`;
    };

    /* ------------------------------------------------------------------
       2. HEADING – responsive padding / margin
       ------------------------------------------------------------------ */
    const padH = headingPadding || {};
    const marH = headingMargin || {};

    const padDesk = padH.desktop || {}; const padTab = padH.tablet || {}; const padMob = padH.mobile || {};
    const marDesk = marH.desktop || {}; const marTab = marH.tablet || {}; const marMob = marH.mobile || {};

    const uPadDesk = padDesk.unit || 'px';
    const uPadTab = padTab.unit || uPadDesk;
    const uPadMob = padMob.unit || uPadTab;

    const uMarDesk = marDesk.unit || 'px';
    const uMarTab = marTab.unit || uMarDesk;
    const uMarMob = marMob.unit || uMarTab;

    const headingPaddingDesktop = [
        formatSide(padDesk.top, uPadDesk),
        formatSide(padDesk.right, uPadDesk),
        formatSide(padDesk.bottom, uPadDesk),
        formatSide(padDesk.left, uPadDesk),
    ].join(' ');

    const headingPaddingTablet = [
        formatSide(padTab.top, uPadTab),
        formatSide(padTab.right, uPadTab),
        formatSide(padTab.bottom, uPadTab),
        formatSide(padTab.left, uPadTab),
    ].join(' ');

    const headingPaddingMobile = [
        formatSide(padMob.top, uPadMob),
        formatSide(padMob.right, uPadMob),
        formatSide(padMob.bottom, uPadMob),
        formatSide(padMob.left, uPadMob),
    ].join(' ');

    const headingMarginDesktop = [
        formatSide(marDesk.top, uMarDesk),
        formatSide(marDesk.right, uMarDesk),
        formatSide(marDesk.bottom, uMarDesk),
        formatSide(marDesk.left, uMarDesk),
    ].join(' ');

    const headingMarginTablet = [
        formatSide(marTab.top, uMarTab),
        formatSide(marTab.right, uMarTab),
        formatSide(marTab.bottom, uMarTab),
        formatSide(marTab.left, uMarTab),
    ].join(' ');

    const headingMarginMobile = [
        formatSide(marMob.top, uMarMob),
        formatSide(marMob.right, uMarMob),
        formatSide(marMob.bottom, uMarMob),
        formatSide(marMob.left, uMarMob),
    ].join(' ');

    /* ------------------------------------------------------------------
       3. SECTION – responsive padding / margin
       ------------------------------------------------------------------ */
    const padS = sectionPadding || {};
    const marS = sectionMargin || {};

    const padSD = padS.desktop || {}; const padST = padS.tablet || {}; const padSM = padS.mobile || {};
    const marSD = marS.desktop || {}; const marST = marS.tablet || {}; const marSM = marS.mobile || {};

    const uPadSD = padSD.unit || 'px';
    const uPadST = padST.unit || uPadSD;
    const uPadSM = padSM.unit || uPadST;

    const uMarSD = marSD.unit || 'px';
    const uMarST = marST.unit || uMarSD;
    const uMarSM = marSM.unit || uMarST;

    const sectionPaddingDesktop = [
        formatSide(padSD.top, uPadSD),
        formatSide(padSD.right, uPadSD),
        formatSide(padSD.bottom, uPadSD),
        formatSide(padSD.left, uPadSD),
    ].join(' ');

    const sectionPaddingTablet = [
        formatSide(padST.top, uPadST),
        formatSide(padST.right, uPadST),
        formatSide(padST.bottom, uPadST),
        formatSide(padST.left, uPadST),
    ].join(' ');

    const sectionPaddingMobile = [
        formatSide(padSM.top, uPadSM),
        formatSide(padSM.right, uPadSM),
        formatSide(padSM.bottom, uPadSM),
        formatSide(padSM.left, uPadSM),
    ].join(' ');

    const sectionMarginDesktop = [
        formatSide(marSD.top, uMarSD),
        formatSide(marSD.right, uMarSD),
        formatSide(marSD.bottom, uMarSD),
        formatSide(marSD.left, uMarSD),
    ].join(' ');

    const sectionMarginTablet = [
        formatSide(marST.top, uMarST),
        formatSide(marST.right, uMarST),
        formatSide(marST.bottom, uMarST),
        formatSide(marST.left, uMarST),
    ].join(' ');

    const sectionMarginMobile = [
        formatSide(marSM.top, uMarSM),
        formatSide(marSM.right, uMarSM),
        formatSide(marSM.bottom, uMarSM),
        formatSide(marSM.left, uMarSM),
    ].join(' ');

    /* ------------------------------------------------------------------
       4. BACKGROUND – solid color OR gradient
       ------------------------------------------------------------------ */
    const backgroundCSS = (() => {
        if (bgType === 'gradient' && bgGradient1) {
            const stops = [`${bgGradient1} 0%`];
            if (bgGradient2) {
                stops.push(`${bgGradient2} 100%`);
            } else {
                stops.push(`${bgGradient1}00 100%`); // transparent version of first color
            }

            const angle = bgGradientAngle ?? 90;
            let direction = 'to right';
            if (angle === 0) direction = 'to right';
            else if (angle === 90) direction = 'to bottom';
            else if (angle === 180) direction = 'to left';
            else if (angle === 270) direction = 'to top';
            else direction = `${angle}deg`;

            return `linear-gradient(${direction}, ${stops.join(', ')})`;
        }

        // solid color
        return bgColor;
    })();

    console.log(backgroundCSS);
    
    return (
        <style>
            {`
				/* -------------------------------------------------
				   SECTION (container)
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block {
					background: ${backgroundCSS};
					padding: ${sectionPaddingDesktop};
					margin: ${sectionMarginDesktop};
				}

				/* -------------------------------------------------
				   HEADING
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .main-heading {
					color: ${headingColor || 'inherit'};
					${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
					${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
					${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
					font-size: ${headingFontSizeDesktop || 40}px;
					line-height: ${headingLineHeightDesktop || 1.2};
					padding: ${headingPaddingDesktop};
					margin: ${headingMarginDesktop};
				}

				/* -------------------------------------------------
				   TABLET (≤1024px)
				   ------------------------------------------------- */
				@media (max-width: 1024px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPaddingTablet};
						margin: ${sectionMarginTablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeTablet || 32}px;
						line-height: ${headingLineHeightTablet || 1.3};
						padding: ${headingPaddingTablet};
						margin: ${headingMarginTablet};
					}
				}

				/* -------------------------------------------------
				   MOBILE (≤767px)
				   ------------------------------------------------- */
				@media (max-width: 767px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPaddingMobile};
						margin: ${sectionMarginMobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeMobile || 24}px;
						line-height: ${headingLineHeightMobile || 1.4};
						padding: ${headingPaddingMobile};
						margin: ${headingMarginMobile};
					}
				}
			`}
        </style>
    );
};

export default Style;