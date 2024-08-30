const express = require('express');

// Create an instance of the Express app
const app = express();

// Set the port number for the server
const port = 3000;

// Define an array of college objects, including top 10 colleges in Hyderabad
let colleges = [
    { name: 'Harvard University', location: 'Cambridge, MA', type: 'private' },
    { name: 'Stanford University', location: 'Stanford, CA', type: 'private' },
    { name: 'University of California, Berkeley', location: 'Berkeley, CA', type: 'public' },
    { name: 'Indian School of Business (ISB)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'University of Hyderabad', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'Jawaharlal Nehru Technological University (JNTU)', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'Osmania University', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'International Institute of Information Technology (IIIT)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'NALSAR University of Law', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'National Institute of Pharmaceutical Education and Research (NIPER)', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'BITS Pilani Hyderabad Campus', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'Institute of Public Enterprise (IPE)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'Harvard University', location: 'Cambridge, MA', type: 'private' },
    { name: 'Stanford University', location: 'Stanford, CA', type: 'private' },
    { name: 'University of California, Berkeley', location: 'Berkeley, CA', type: 'public' },
    { name: 'Indian School of Business (ISB)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'University of Hyderabad', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'Jawaharlal Nehru Technological University (JNTU)', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'Osmania University', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'International Institute of Information Technology (IIIT)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'NALSAR University of Law', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'National Institute of Pharmaceutical Education and Research (NIPER)', location: 'Hyderabad, Telangana', type: 'public' },
    { name: 'BITS Pilani Hyderabad Campus', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'Institute of Public Enterprise (IPE)', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'Anurag University', location: 'Hyderabad, Telangana', type: 'private' },
    { name: 'Indian Institute of Technology (IIT) Bombay', location: 'Mumbai, Maharashtra', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Delhi', location: 'New Delhi, Delhi', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Madras', location: 'Chennai, Tamil Nadu', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Kanpur', location: 'Kanpur, Uttar Pradesh', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Kharagpur', location: 'Kharagpur, West Bengal', type: 'public' },
    { name: 'Indian Institute of Science (IISc)', location: 'Bengaluru, Karnataka', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Roorkee', location: 'Roorkee, Uttarakhand', type: 'public' },
    { name: 'Indian Institute of Management (IIM) Ahmedabad', location: 'Ahmedabad, Gujarat', type: 'public' },
    { name: 'Indian Institute of Management (IIM) Bangalore', location: 'Bengaluru, Karnataka', type: 'public' },
    { name: 'Indian Institute of Management (IIM) Calcutta', location: 'Kolkata, West Bengal', type: 'public' },
    { name: 'Delhi University', location: 'New Delhi, Delhi', type: 'public' },
    { name: 'Jawaharlal Nehru University (JNU)', location: 'New Delhi, Delhi', type: 'public' },
    { name: 'Banaras Hindu University (BHU)', location: 'Varanasi, Uttar Pradesh', type: 'public' },
    { name: 'Aligarh Muslim University (AMU)', location: 'Aligarh, Uttar Pradesh', type: 'public' },
    { name: 'Vellore Institute of Technology (VIT)', location: 'Vellore, Tamil Nadu', type: 'private' },
    { name: 'Amity University', location: 'Noida, Uttar Pradesh', type: 'private' },
    { name: 'Manipal Academy of Higher Education', location: 'Manipal, Karnataka', type: 'private' },
    { name: 'SRM Institute of Science and Technology', location: 'Chennai, Tamil Nadu', type: 'private' },
    { name: 'Shiv Nadar University', location: 'Greater Noida, Uttar Pradesh', type: 'private' },
    { name: 'Jamia Millia Islamia', location: 'New Delhi, Delhi', type: 'public' },
    { name: 'Savitribai Phule Pune University', location: 'Pune, Maharashtra', type: 'public' },
    { name: 'Christ University', location: 'Bengaluru, Karnataka', type: 'private' },
    { name: 'Symbiosis International University', location: 'Pune, Maharashtra', type: 'private' },
    { name: 'Thapar Institute of Engineering and Technology', location: 'Patiala, Punjab', type: 'private' },
    { name: 'Kalinga Institute of Industrial Technology (KIIT)', location: 'Bhubaneswar, Odisha', type: 'private' },
    { name: 'Jadavpur University', location: 'Kolkata, West Bengal', type: 'public' },
    { name: 'Birla Institute of Technology and Science (BITS) Pilani', location: 'Pilani, Rajasthan', type: 'private' },
    { name: 'Anna University', location: 'Chennai, Tamil Nadu', type: 'public' },
    { name: 'National Institute of Technology (NIT) Trichy', location: 'Tiruchirappalli, Tamil Nadu', type: 'public' },
    { name: 'National Institute of Technology (NIT) Surathkal', location: 'Surathkal, Karnataka', type: 'public' },
    { name: 'Indian Institute of Technology (IIT) Guwahati', location: 'Guwahati, Assam', type: 'public' },
    { name: 'Indian Institute of Management (IIM) Indore', location: 'Indore, Madhya Pradesh', type: 'public' },
    { name: 'National Law School of India University (NLSIU)', location: 'Bengaluru, Karnataka', type: 'public' },
    { name: 'Sikkim Manipal University', location: 'Gangtok, Sikkim', type: 'private' },
    { name: 'Xavier School of Management (XLRI)', location: 'Jamshedpur, Jharkhand', type: 'private' },
];

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the '/search' endpoint
app.get('/search', (req, res) => {
    // Extract the query parameters from the request
    const { name, location, type } = req.query;

    // Initialize the results array with all colleges
    let results = colleges;

    // Filter the results based on the query parameters
    if (name) {
        results = results.filter(college => college.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (location) {
        results = results.filter(college => college.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (type) {
        results = results.filter(college => college.type === type);
    }

    // If no colleges match the search, return a message saying so
    if (results.length === 0) {
        res.json({ message: 'No matching college found. Please provide details to add it.' });
    } else {
        // Return the filtered results as JSON
        res.json(results);
    }
});

// Define a route to handle adding a new college
app.get('/add-college', (req, res) => {
    const { name, location, type } = req.query;

    if (!name || !location || !type) {
        return res.json({ message: 'Please provide all college details: name, location, and type.' });
    }

    // Check if the college already exists in the list
    const existingCollege = colleges.find(college => college.name.toLowerCase() === name.toLowerCase());

    if (existingCollege) {
        return res.json({ message: 'This college already exists in the list.' });
    }

    // Add the new college to the list
    const newCollege = { name, location, type };
    colleges.push(newCollege);

    // Return the details of the newly added college
    res.json({
        message: 'College added successfully.',
        college: newCollege
    });
});

// Start the server and log a message to the console
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
