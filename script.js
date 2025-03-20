document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const convertBtn = document.getElementById('convertBtn');
    const outputFormat = document.getElementById('outputFormat');
    const previewContainer = document.getElementById('previewContainer');
    const previewImage = document.getElementById('previewImage');
    const downloadContainer = document.getElementById('downloadContainer');
    const downloadLink = document.getElementById('downloadLink');
    const errorMessage = document.getElementById('errorMessage');

    let originalImage = null;

    // Enable convert button when image is selected
    imageInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            convertBtn.disabled = false;
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImage.src = event.target.result;
                previewContainer.classList.remove('d-none');
                originalImage = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // Convert image when button is clicked
    convertBtn.addEventListener('click', async () => {
        if (!originalImage) {
            showError('Please upload an image first');
            return;
        }

        try {
            convertBtn.disabled = true;
            convertBtn.textContent = 'Converting...';

            const selectedFormat = outputFormat.value;
            const convertedImage = await convertImage(originalImage, selectedFormat);

            // Update preview
            previewImage.src = convertedImage;

            // Prepare download
            downloadLink.href = convertedImage;
            downloadLink.download = `converted_image.${selectedFormat}`;
            downloadContainer.classList.remove('d-none');
            errorMessage.classList.add('d-none');

        } catch (error) {
            showError('Error converting image: ' + error.message);
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = 'Convert Image';
        }
    });

    async function convertImage(imageData, format) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                let quality = 0.9;
                if (format === 'jpg' || format === 'jpeg') {
                    resolve(canvas.toDataURL('image/jpeg', quality));
                } else if (format === 'png') {
                    resolve(canvas.toDataURL('image/png'));
                } else if (format === 'svg') {
                    // Basic SVG conversion (Note: This is a simple implementation)
                    const svg = `<svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
                        <image href="${imageData}" width="${img.width}" height="${img.height}"/>
                    </svg>`;
                    resolve('data:image/svg+xml;base64,' + btoa(svg));
                } else {
                    reject(new Error('Unsupported format'));
                }
            };
            img.onerror = () => reject(new Error('Error loading image'));
            img.src = imageData;
        });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('d-none');
        downloadContainer.classList.add('d-none');
    }
});