document.addEventListener('DOMContentLoaded', function() {
    var schemaTypeSelect = document.getElementById('schema-type');
    var inputsContainer = document.getElementById('input-options');
    var outputContainer = document.getElementById('output');

    // Define input options for each schema type
    var inputOptions = {
        'Corporation': ['name', 'url', 'logo'],
        'LocalBusiness': ['name', 'image', '@id', 'url', 'telephone', 'address.streetAddress', 'address.addressLocality', 'address.postalCode', 'address.addressCountry'],
        'WebSite': ['name', 'url', 'searchTerm'],
        'FAQPage': ['question', 'answer'],
        'Article': ['headline', 'image', 'author.@type', 'author.name', 'publisher.@type', 'publisher.name', 'publisher.logo.url', 'datePublished'],
        'NewsArticle': ['headline', 'image', 'author.@type', 'author.name', 'publisher.@type', 'publisher.name', 'publisher.logo.url', 'datePublished'],
        'BlogPosting': ['headline', 'image', 'author.@type', 'author.name', 'publisher.@type', 'publisher.name', 'publisher.logo.url', 'datePublished'],
        'Product': ['name', 'image', 'aggregateRating.@type', 'aggregateRating.ratingValue', 'aggregateRating.ratingCount']
    };

    // Function to update input options based on selected schema type
    function updateInputOptions(schemaType) {
        inputsContainer.innerHTML = '';
        var options = inputOptions[schemaType];
        options.forEach(function(option) {
            var inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'text');
            inputElement.setAttribute('name', option);
            inputElement.setAttribute('placeholder', option);
            inputsContainer.appendChild(inputElement);
        });
    }

    // Event listener for schema type selection change
    schemaTypeSelect.addEventListener('change', function() {
        var selectedSchemaType = schemaTypeSelect.value;
        updateInputOptions(selectedSchemaType);
        generateSchema(); // Update output JSON when schema type changes
    });

    // Initialize input options based on default schema type
    var defaultSchemaType = schemaTypeSelect.value;
    updateInputOptions(defaultSchemaType);

    // Function to generate the schema based on user inputs
    function generateSchema() {
        var selectedSchemaType = schemaTypeSelect.value;
        var inputs = inputsContainer.querySelectorAll('input');
        var schema = {
            '@context': 'https://schema.org',
            '@type': selectedSchemaType
        };

        inputs.forEach(function(input) {
            var key = input.getAttribute('name');
            var value = input.value;
            if (value.trim() !== '') {
                // Handle nested properties
                if (key.includes('.')) {
                    var keys = key.split('.');
                    var tempObj = schema;
                    for (var i = 0; i < keys.length - 1; i++) {
                        if (!tempObj[keys[i]]) {
                            tempObj[keys[i]] = {};
                        }
                        tempObj = tempObj[keys[i]];
                    }
                    tempObj[keys[keys.length - 1]] = value;
                } else {
                    schema[key] = value;
                }
            }
        });

        outputContainer.innerText = JSON.stringify(schema, null, 2);
    }

    // Event listener for generate schema button click
    var generateButton = document.getElementById('generate-schema');
    generateButton.addEventListener('click', generateSchema);



   // Function to handle resetting inputs and output
function resetSchema() {
    // Clear all input fields
    inputsContainer.querySelectorAll('input').forEach(function(input) {
        input.value = '';
    });
    // Clear output
    outputContainer.innerText = '';
}

// Event listener for reset button click
var resetButton = document.getElementById('reset-schema');
resetButton.addEventListener('click', resetSchema);


    // Initial generation of schema on page load
    generateSchema();
});