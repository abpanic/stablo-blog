// /casemanagement/pages/email-template.js
import { useState } from 'react';
import emailTemplates from '../data/emailTemplates'; // Update the path if necessary

export default function EmailTemplate() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelectChange = (event) => {
        const selectedTemplateName = event.target.value;
        const selectedTemplate = emailTemplates.find(
            (template) => template.name === selectedTemplateName
        );
        setSelectedTemplate(selectedTemplate);
    };

    const handleCopy = () => {
        if (selectedTemplate) {
            navigator.clipboard.writeText(selectedTemplate.body);
        }
    };

    return (
        <div>
            <h1>Email Template Section</h1>
            <select value={selectedTemplate?.name || ''} onChange={handleSelectChange}>
                <option value="">Select a template</option>
                {emailTemplates.map((template) => (
                    <option key={template.name} value={template.name}>
                        {template.name}
                    </option>
                ))}
            </select>
            <button onClick={handleCopy}>Copy to clipboard</button>
            {selectedTemplate && (
                <div>
                    <h2>{selectedTemplate.name}</h2>
                    <p>{selectedTemplate.body}</p>
                </div>
            )}
        </div>
    );
}