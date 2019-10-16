/**
 * Internal dependencies
 */
import { buildTermsTree } from './terms';
import { TreeSelect } from '@wordpress/components';

export default function CategorySelect( { label, noOptionLabel, categoriesList, selectedCategoryId, onChange } ) {
	const termsTree = buildTermsTree( categoriesList );
	return (
		<TreeSelect
			{ ...{ label, noOptionLabel, onChange } }
			tree={ termsTree }
			selectedId={ selectedCategoryId }
		/>
	);
}
