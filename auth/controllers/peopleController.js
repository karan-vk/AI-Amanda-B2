// Controller for transforming people list data

exports.transformPeople = (req, res) => {
    try {
        const peopleList = req.body;

        // Validate input
        if (!Array.isArray(peopleList)) {
            return res.status(400).json({
                success: false,
                message: "Input must be an array of people"
            });
        }

        // Transform the array into an object grouped by name
        const transformedData = {};

        peopleList.forEach(person => {
            if (person.name && person.age && person.birthday) {
                transformedData[person.name] = {
                    age: person.age,
                    birthday: person.birthday
                };
            }
        });

        // Log to console as requested
        console.log("Transformed People Data:", transformedData);

        res.status(200).json(transformedData);
    } catch (error) {
        console.error("Error transforming people data:", error);
        res.status(500).json({
            success: false,
            message: "Error transforming people data",
            error: error.message
        });
    }
};
