
document.addEventListener('DOMContentLoaded', () => {
    const deleteDataForm = document.getElementById('delete-data-form');
    const toast = document.getElementById('toast');
    
    if (deleteDataForm) {
        deleteDataForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Get form data
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('delete-email').value;
            const reason = document.getElementById('delete-reason').value;
            
            // In a real application, you would send this data to a server
            console.log('Data deletion request submitted:', { fullName, email, reason });
            
            // Show success toast notification
            toast.classList.remove('hidden');
            toast.classList.add('show');
            
            // Clear form
            deleteDataForm.reset();
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.classList.add('hidden');
                }, 300);
            }, 3000);
        });
    }
});
