import { RichText } from '@wordpress/block-editor';
import Style from '../../Style';
const BlockName = ({ attributes }) => {
	const { subHeading, headingTag, heading, description, buttonText, buttonUrl, layoutStyle, contactIcon, contactLabel, contactNumber, contactInfo } = attributes;

	return (
		<>
			<Style attributes={attributes} />
			{layoutStyle === 'default' && <div className={`callToActionBlock ${layoutStyle}`}>
				<div className="hero-content">
					<RichText.Content
						tagName={headingTag}
						value={heading}
						className="main-heading"
					/>
					<RichText.Content
						tagName="p"
						value={description}
						className="description"
					/>
					<button className="cta-button">{buttonText}</button>
				</div>
			</div>}
			{layoutStyle === 'simple' && (<div className={`callToActionBlock ${layoutStyle}`}>
				<div className="pContact004 hero-content">
					<div className="pContact004__content">
						<div className="pContact004__inner">
							<div className="pContact004__innerItem">
								<div className="pContact004__textArea">
									<RichText.Content
										tagName="span"
										className="sub-heading"
										value={subHeading}

									/>
									<RichText.Content
										tagName={headingTag}
										value={heading}
										className="main-heading"
										allowedFormats={[]}
									/>
									<RichText.Content
										tagName="p"
										value={description}
										className="description"
									/>
								</div>
								<div className="pContact004__btnArea">
									<ul className="pContact004__btnList">
										<li>
											<a href={`tel:${contactNumber}`} className="ctaBtn tel-btn">
												<span className="num"><i class={contactIcon}></i>{contactLabel}</span>
												<span className="sub">{contactInfo}</span>
											</a>
										</li>
										<li>
											<p className="call"><span>Available 24 hours a day</span></p>
											<a href={buttonUrl} className="ctaBtn mail-btn cta-button">
												<span>{buttonText}</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)}
		</>
	)
}
export default BlockName;