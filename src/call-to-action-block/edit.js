
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import BlockName from './BlockMain';

export default function Edit({ attributes }) {
	return (
		<div { ...useBlockProps() }>
			<BlockName attributes={attributes} />
		</div>
	);
}
