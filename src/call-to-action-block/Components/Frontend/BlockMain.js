import { RichText } from '@wordpress/block-editor';
import Style from '../../Style';
const BlockName = ({ attributes }) => {
	const { subHeading, headingTag, heading, description, buttonText, layoutStyle } = attributes;

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
				<div className="pContact004">
					<div className="pContact004__content">
						<div className="pContact004__inner">
							<div className="pContact004__innerItem">
								<div className="pContact004__textArea">
									<RichText.Content
										tagName="span"
										className="sub"
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
											<a href="tel:000-000-0000" className="ctaBtn tel-btn">
												<span className="num">0000-000-000</span>
												<span className="sub">Business hours: 9:00 - 18:00 (closed on weekends and holidays)</span>
											</a>
										</li>
										<li>
											<p className="call"><span>Available 24 hours a day</span></p>
											<a href="/contact/" className="ctaBtn mail-btn">
												<span>Contact us by email</span>
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