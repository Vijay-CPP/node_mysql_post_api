const connection = require("../config/db_connection");

const postController = (req, res) => {
    const { uid } = req.body;

    // Query to get candidate status counts
    const query = `
        SELECT cs.status, count(*) AS count FROM user AS u
        JOIN candidate AS c ON u.uid = c.uid
        JOIN candidate_status AS cs ON c.cid = cs.cid
        WHERE u.uid = ${uid}
        GROUP BY cs.status;  
    `;

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Formatting the desired object
        let finalRes = { uid };
        // Calculating total candidates
        finalRes.totalCandidates = results.reduce((total, item) => total + item.count, 0);
        for (const item of results) {
            if(item.count > 0){
                finalRes[item.status] = item.count;
            }
        }

        // Returning
        res.json(finalRes);
    })
}

exports.postHandler = postController;