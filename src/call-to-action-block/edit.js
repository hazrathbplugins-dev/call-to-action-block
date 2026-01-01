
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './Components/Backend/Settings';
import Style from './Style';
import Toolbar from './Components/Backend/Toolbar';

export default function Edit({ attributes, setAttributes }) {
	const { subHeading, headingTag, heading, description, buttonText, buttonUrl, layoutStyle } = attributes;
	console.log('Attributes in Edit:', attributes);

	const blockProps = useBlockProps({
		className: `${layoutStyle}`,
	});

	return (
		<div {...blockProps}>
			<Toolbar attributes={attributes} setAttributes={setAttributes} />
			<Settings attributes={attributes} setAttributes={setAttributes} />
			<Style attributes={attributes} />
			{layoutStyle === 'default' && <div className={`callToActionBlock ${layoutStyle}`}>
				<div className="hero-content">
					<RichText
						tagName={headingTag}
						value={heading}
						className="main-heading"
						onChange={(val) => setAttributes({ heading: val })}
						placeholder="Heading..."
						allowedFormats={[]}
					/>
					<RichText
						tagName="p"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
						placeholder="Description..."
						className="description"
					/>
					<button className="cta-button">
						{buttonText}
					</button>
				</div>
			</div>}
			{layoutStyle === 'simple' && <div className={`callToActionBlock ${layoutStyle}`}>
				<div className="pContact004">
					<div className="pContact004__content">
						<div className="pContact004__inner">
							<div className="pContact004__innerItem">
								<div className="pContact004__textArea">
									<RichText
										tagName="span"
										className="sub"
										value={subHeading}
										onChange={(val) => setAttributes({ subHeading: val })}
										placeholder="Sub Heading..."
									/>
									<RichText
										tagName={headingTag}
										value={heading}
										className="main-heading"
										onChange={(val) => setAttributes({ heading: val })}
										placeholder="Heading..."
										allowedFormats={[]}
									/>
									<RichText
										tagName="p"
										value={description}
										onChange={(val) => setAttributes({ description: val })}
										placeholder="Description..."
										className="description"
									/>
								</div>
								<div className="pContact004__btnArea">
									<ul className="pContact004__btnList">
										<li>
											<a href="tel:000-000-0000" className="ctaBtn tel-btn">
												<i class="ri-phone-line"></i>
												<span className="num">0000-000-000</span>
												<span className="sub">Business hours: 9:00 - 18:00 (closed on weekends and holidays)</span>
											</a>
										</li>
										<li>
											<p className="call"><span>Available 24 hours a day</span></p>
											<a href={buttonUrl} className="ctaBtn mail-btn">
												<span>{buttonText}</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>}
		</div>
	);
}
