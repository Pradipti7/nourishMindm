document.addEventListener('DOMContentLoaded', () => {
    const groupForm = document.getElementById('groupForm');
    const groupList = document.getElementById('groupList');

    // Dummy data for existing groups
    const groups = [
        { name: "Support for Anorexia", description: "A safe space for sharing and healing." },
        { name: "Binge Eating Support", description: "Connect with others and find strategies to cope." },
        { name: "Body Positivity", description: "Promoting self-love and acceptance." }
    ];

    // Function to render groups
    const renderGroups = () => {
        groupList.innerHTML = ""; // Clear existing groups
        groups.forEach(group => {
            const groupItem = document.createElement('div');
            groupItem.classList.add('group-item');
            groupItem.innerHTML = `
                <h3>${group.name}</h3>
                <p>${group.description}</p>
            `;
            groupList.appendChild(groupItem);
        });
    };

    // Handle group creation
    groupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const groupName = document.getElementById('groupName').value;
        const groupDescription = document.getElementById('groupDescription').value;

        // Add new group to the list
        groups.push({ name: groupName, description: groupDescription });
        renderGroups();

        // Clear form fields
        groupForm.reset();
    });

    // Initial rendering of groups
    renderGroups();
});
