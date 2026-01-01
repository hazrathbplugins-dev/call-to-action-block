import { Button, Modal, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { REMIX_ICONS } from './icons/remix-icons';

const IconSelector = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filteredIcons = REMIX_ICONS.filter((icon) =>
        icon.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Trigger Button */}
            <div className="cta-icon-selector-trigger">
                <Button
                    variant="secondary"
                    onClick={() => setIsOpen(true)}
                >
                    {value ? (
                        <>
                            <i className={value}></i> Change Icon
                        </>
                    ) : (
                        'Choose Icon'
                    )}
                </Button>
            </div>

            {/* Modal */}
            {isOpen && (
                <Modal
                    title="Select an Icon"
                    onRequestClose={() => setIsOpen(false)}
                    className="cta-icon-modal"
                >
                    <TextControl
                        placeholder="Search icons…"
                        value={search}
                        onChange={setSearch}
                    />

                    <div className="cta-icon-grid">
                        {filteredIcons.map((icon) => (
                            <Button
                                key={icon}
                                className={`cta-icon-btn ${
                                    value === icon ? 'is-active' : ''
                                }`}
                                onClick={() => {
                                    onChange(icon);
                                    setIsOpen(false);
                                }}
                            >
                                <i className={icon}></i>
                            </Button>
                        ))}
                    </div>
                </Modal>
            )}
        </>
    );
};

export default IconSelector;
