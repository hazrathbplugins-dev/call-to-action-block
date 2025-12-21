import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { category, symbol } from '@wordpress/icons';

const Themes = [
    { key: 'default', label: 'Default', icon: category },
    { key: 'simple', label: 'Simple', icon: symbol },
];

const Toolbar = ({ attributes, setAttributes }) => {
    const { layoutStyle } = attributes;
    return (
        <BlockControls>
            <ToolbarGroup>
                {Themes.map((item) => (
                    <ToolbarButton
                        key={item.key}
                        icon={item.icon}
                        isPressed={layoutStyle === item.key}
                        onClick={() => setAttributes({ layoutStyle: item.key })}
                        label={`${item.label} Theme`}
                    >
                        {item.label}
                    </ToolbarButton>
                ))}

            </ToolbarGroup>
        </BlockControls>
    );
};

export default Toolbar;